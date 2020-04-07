import models from '../models/index.js';
import extend from '../utils/context.js';
import docModifier from '../utils/doc-modifier.js';
import notifications from '../utils/notifications.js';

export default {
    get: {
        login(context) {
            extend(context).then(function () {
                this.partial('../views/user/login.hbs');
            });
        },
        register(context) {
            extend(context).then(function () {
                this.partial('../views/user/register.hbs');
            });
        },
        logout(context) {
            models.user.logout().then(response => {
                notifications.showInfo('Logout successfull!');
                context.redirect('#/home');
            });
        },
        profile(context) {
            models.entity.getAll().then(response => {
                const events = response.docs
                    .map(docModifier)
                    .filter(event => event.uid === localStorage.getItem('userId'))
                    .map(event => event = event.name);

                context.events = events;
                context.eventsNumber = events.length;

                extend(context).then(function () {
                    this.partial('../views/user/profile.hbs');
                });
            });
        }
    },
    post: {
        login(context) {
            const { username, password } = context.params;
            models.user.login(username, password)
                .then(response => {
                    context.user = response;
                    notifications.showInfo('Login successfull!');
                    context.redirect('#/entity/dashboard');
                })
                .catch(notifications.handleError);

        },
        register(context) {
            const { username, password, rePassword, photoURL } = context.params;

            if (password === rePassword) {
                models.user.register(username, password)
                    .then(response => {

                        // models.user.logout().catch(e => console.error(e)); // signing out the user after registration if you want to redirect him to the login page

                        notifications.showInfo('User registration successful.');
                        // context.redirect('#/user/login'); // redirect to the login page 
                        context.redirect('#/entity/dashboard'); // redirect to the dashboard straight after registration
                    })
                    .then(response => models.user.update({photoURL: photoURL}))
                    .catch(notifications.handleError);
            } else {
                notifications.showError('Passwords do not match!');
            }

        }
    }
}