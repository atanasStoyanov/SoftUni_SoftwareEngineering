import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/doc-modifier.js'

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
                .catch(e => console.error(e));
        }
    },
    post: {
        create(context) {

            const data = {
                ...context.params,
                uid: localStorage.getItem('userId'),
                creator: localStorage.getItem('userEmail'),
                likes: 0,
                comments: []
            }

            models.entity.create(data)
                .then(response => {
                    context.redirect('#/entity/dashboard');
                })
                .catch(e => console.error(e));
        }
    },
    del: {
        close(context) {
            const { entityId } = context.params;
            models.entity.close(entityId).then(response => {
                context.redirect('#/entity/dashboard');
            })
                .catch(e => console.error(e));
        }
    },
    put: {
        comment(context) {

            const { entityId, newComment } = context.params;

            models.entity.get(entityId).then(response => {
                const idea = docModifier(response);

                const comment = `${localStorage.getItem('userEmail')}: ${newComment}`;

                idea.comments.push(comment);

                return models.entity.comment(entityId, idea);
            })
                .then(response => {
                    context.redirect(`#/entity/details/${entityId}`);
                })
                .catch(e => console.error(e));
        },
        like(context) {
            const { entityId } = context.params;

            models.entity.get(entityId).then(response => {
                const idea = docModifier(response);
                idea.likes += 1;

                return models.entity.edit(entityId, idea);
            })
                .then(response => {
                    context.redirect(`#/entity/details/${entityId}`);
                })
                .catch(e => console.error(e));;
        }
    }
}