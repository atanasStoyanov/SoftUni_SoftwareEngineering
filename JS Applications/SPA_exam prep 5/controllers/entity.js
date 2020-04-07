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

                context.canJoin = entity.uid !== localStorage.getItem('userId');

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
           
            const data = {
                ...context.params,
                uid: localStorage.getItem('userId'),
                organizer: localStorage.getItem('userEmail'),
                peopleInterestedIn: 0,
            }

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

        join(context) {
            const { entityId } = context.params;

            models.entity.get(entityId).then(response => {
                const event = docModifier(response);
                
                event.peopleInterestedIn += 1;

                return models.entity.edit(entityId, event);
            })
                .then(response => {
                    notifications.showInfo('You joined the event successfully.');
                    context.redirect(`#/entity/details/${entityId}`);
                    
                })
                .catch(notifications.handleError);;
        },
        edit(context) {
            const { entityId } = context.params;

            const data = {
                ...context.params,
            }

            models.entity.edit(entityId, data)
                .then(response => {
                    notifications.showInfo('Event edited successfully.');
                    context.redirect(`#/entity/details/${entityId}`);
                })
                .catch(notifications.handleError);
        }
    }
}