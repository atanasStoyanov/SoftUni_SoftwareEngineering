import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/doc-modifier.js';
import handleError from '../utils/errorHandler.js';
import fillFormWithData from '../utils/formFiller.js';

export default {
    get: {
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

                context.canEdit = entity.uid === localStorage.getItem('userId');

                extend(context).then(function () {
                    this.partial('../views/entity/details.hbs');
                });

            })
                .catch(handleError);
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

            const data = {
                ...context.params,
                uid: localStorage.getItem('userId'),
                creator: localStorage.getItem('userEmail'),
            }

            models.entity.create(data)
                .then(response => {
                    context.redirect('#/home');
                })
                .catch(handleError);
        }
    },
    del: {
        close(context) {
            const { entityId } = context.params;
            models.entity.close(entityId).then(response => {
                context.redirect('#/home');
            })
                .catch(handleError);
        }
    },
    put: {
        edit(context) {
            const { entityId } = context.params;

            const data = {
                ...context.params,
            }

            models.entity.edit(entityId, data)
                .then(response => {
                    context.redirect(`#/home`);
                })
                .catch(handleError);
        }
    }
}