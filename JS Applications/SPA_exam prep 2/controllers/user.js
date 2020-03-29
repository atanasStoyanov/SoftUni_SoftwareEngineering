import models from '../models/index.js';
import extend from '../utils/context.js';

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
                context.redirect('#/home');
            });
        }
    },
    post: {
        login(context) {
            const { username, password } = context.params;
            models.user.login(username, password)
                .then(response => {
                    context.user = response;
                    context.redirect('#/cause/dashboard');
                })
                .catch(e => console.error(e));

        },
        register(context) {
            const { username, password, rePassword } = context.params;

            if (password === rePassword) {
                models.user.register(username, password)
                    .then(response => {
                        context.redirect('#/cause/dashboard');
                    })
                    .catch(e => console.error(e));
            }

        }
    }
}