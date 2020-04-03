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
                const ideas = response.docs
                    .map(docModifier)
                    .filter(idea => idea.uid === localStorage.getItem('userId'))
                    .map(idea => idea = idea.title);

                context.ideas = ideas;
                context.ideasNumber = ideas.length;

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
                    context.redirect('#/home');
                })
                .catch(notifications.handleError);

        },
        register(context) {
            const { username, password, repeatPassword } = context.params;

            if (password === repeatPassword) {
                models.user.register(username, password)
                    .then(response => {
                        notifications.showInfo('Registration successfull!');
                        context.redirect('#/home');
                    })
                    .catch(notifications.handleError);
            } else {
                notifications.showError('Passwords do not match!');
            }

        }
    }
}