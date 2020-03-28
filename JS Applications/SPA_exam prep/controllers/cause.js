import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/doc-modifier.js'

export default {
    get: {
        dashboard(context) {

            models.cause.getAll().then(response => {
                const causes = response.docs.map(docModifier);
                context.causes = causes;

                extend(context).then(function () {
                    this.partial('../views/cause/dashboard.hbs');
                });
            })
        },
        create(context) {
            extend(context).then(function () {
                this.partial('../views/cause/create.hbs');
            });
        },
        details(context) {
            const { causeId } = context.params;

            models.cause.get(causeId).then(response => {

                const cause = docModifier(response);
                Object.keys(cause).forEach(key => context[key] = cause[key]);

                context.canDonate = cause.uid !== localStorage.getItem('userId');

                extend(context).then(function () {
                    this.partial('../views/cause/details.hbs');
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
                collectedFunds: 0,
                donors: []
            }

            models.cause.create(data)
                .then(response => {
                    context.redirect('#/cause/dashboard');
                })
                .catch(e => console.error(e));
        }
    },
    del: {
        close(context) {
            const { causeId } = context.params;
            models.cause.close(causeId).then(response => {
                context.redirect('#/cause/dashboard');
            })
                .catch(e => console.error(e));
        }
    },
    put: {
        donate(context) {
            const { causeId, currentDonation } = context.params;

            models.cause.get(causeId).then(response => {
                const cause = docModifier(response);
                cause.collectedFunds += Number(currentDonation);

                if (!cause.donors.includes(localStorage.getItem('userEmail'))){
                    cause.donors.push(localStorage.getItem('userEmail'));
                }

                return models.cause.donate(causeId, cause);
            })
            .then(response => {
                context.redirect(`#/cause/details/${causeId}`);
            })

        }
    }
}