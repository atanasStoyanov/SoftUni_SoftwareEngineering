import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/doc-modifier.js';
import notifications from '../utils/notifications.js';
import fillFormWithData from '../utils/formFiller.js';

export default {
    get: {
        dashboard(context) {

            models.entity.getAll().then(response => {
                const entities = response.docs.map(docModifier);
                context.entities = entities;

                extend(context).then(function () {
                    this.partial('../views/entity/dashboard.hbs');
                });
            })
        },
        create(context) {
            extend(context).then(function () {
                this.partial('../views/entity/create.hbs');
            });
        },
        details(context) {
            const { entityId } = context.params;

            models.entity.get(entityId).then(response => {

                const entity = docModifier(response);
                Object.keys(entity).forEach(key => context[key] = entity[key]);

                context.canLike = entity.uid !== localStorage.getItem('userId');

                extend(context).then(function () {
                    this.partial('../views/entity/details.hbs');
                });

            })
                .catch(notifications.handleError);
        },
        edit(context) {
            extend(context).then(function () {
                context.id = context.params.entityId;
                this.partial('../views/entity/edit.hbs');
            });

            const { entityId } = context.params;

            models.entity.get(entityId).then(response => {
                const formValues = response.data();
                const formRef = document.querySelector('form');
                fillFormWithData(formRef, formValues);
            });

        }
    },
    post: {
        create(context) {
            const foodCategoryImgs = {
                'Grain Food': 'https://previews.123rf.com/images/olegdudko/olegdudko1809/olegdudko180900461/107707662-grain-food-group.jpg',
                'Vegetables and legumes/beans': 'https://mh-1-stockagency.panthermedia.net/media/previews/0017000000/17350000/17350330_high.jpg',
                'Fruits': 'https://flourmilldundee.co.uk/wp-content/uploads/2019/08/Fruit.jpeg',
                'Milk, cheese, eggs and alternatives': 'https://enjoyrussian.com/wp-content/uploads/2017/10/Milk-products.jpg',
                'Lean meats and poultry, fish and alternatives': 'https://bubbles-the-wolf.weebly.com/uploads/2/6/5/7/26571372/8452771_orig.jpg'
            }

            const category = context.params.category;

            const data = {
                ...context.params,
                uid: localStorage.getItem('userId'),
                categoryImageUrl: foodCategoryImgs[category],
                likesCounter: 0,
            }

            data.ingredients = data.ingredients.split(', ');

            models.entity.create(data)
                .then(response => {
                    notifications.showInfo('Recipe shared successfully!');
                    context.redirect('#/entity/dashboard');
                })
                .catch(notifications.handleError);
        }
    },
    del: {
        close(context) {
            const { entityId } = context.params;
            models.entity.close(entityId).then(response => {
                notifications.showInfo('Your recipe was archived.');
                context.redirect('#/entity/dashboard');
            })
                .catch(notifications.handleError);
        }
    },
    put: {
        // comment(context) {

        //     const { entityId, newComment } = context.params;

        //     models.entity.get(entityId).then(response => {
        //         const entity = docModifier(response);

        //         const comment = `${localStorage.getItem('userEmail')}: ${newComment}`;

        //         entity.comments.push(comment);

        //         return models.entity.edit(entityId, entity);
        //     })
        //         .then(response => {
        //             notifications.showInfo('Comment added.')
        //             context.redirect(`#/entity/details/${entityId}`);
        //         })
        //         .catch(notifications.handleError);
        // },
        like(context) {
            const { entityId } = context.params;

            models.entity.get(entityId).then(response => {
                const recipe = docModifier(response);
                recipe.likesCounter += 1;

                return models.entity.edit(entityId, recipe);
            })
                .then(response => {
                    notifications.showInfo('You liked that recipe.');
                    context.redirect(`#/entity/details/${entityId}`);
                    
                })
                .catch(notifications.handleError);;
        },
        edit(context) {
            const { entityId } = context.params;

            const foodCategoryImgs = {
                'Grain Food': 'https://previews.123rf.com/images/olegdudko/olegdudko1809/olegdudko180900461/107707662-grain-food-group.jpg',
                'Vegetables and legumes/beans': 'https://mh-1-stockagency.panthermedia.net/media/previews/0017000000/17350000/17350330_high.jpg',
                'Fruits': 'https://flourmilldundee.co.uk/wp-content/uploads/2019/08/Fruit.jpeg',
                'Milk, cheese, eggs and alternatives': 'https://enjoyrussian.com/wp-content/uploads/2017/10/Milk-products.jpg',
                'Lean meats and poultry, fish and alternatives': 'https://bubbles-the-wolf.weebly.com/uploads/2/6/5/7/26571372/8452771_orig.jpg'
            }

            const category = context.params.category;

            const data = {
                ...context.params,
                categoryImageUrl: foodCategoryImgs[category],
            }

            data.ingredients = data.ingredients.split(', ');

            models.entity.edit(entityId, data)
                .then(response => {
                    notifications.showInfo('Successfully edited recipe.');
                    context.redirect(`#/entity/details/${entityId}`);
                })
                .catch(notifications.handleError);
        }
    }
}