import extend from '../utils/context.js';
import models from '../models/index.js';
import notifications from '../utils/notifications.js';
import docModifier from '../utils/doc-modifier.js';
import initializeGame from '../games/snake/initializeGame.js';

export default {
    get: {
        snake(context) {
            extend(context).then(function () {
                this.partial('../views/games/snakeGame.hbs')
                    .then(res => {
                        initializeGame();
                    });

            });
        },
        scoreboard(context) {
            models.entity.getAll('snakeScores').then(response => {
                const entities = response.docs.map(docModifier);
                // context.entities = entities;
                console.log(entities);
                
                // extend(context).then(function () {
                //     this.partial('../views/entity/dashboard.hbs');
                // });
            })
        }
    },
    post: {
        saveScore(collection, score) {
            models.entity.getAll(collection).then(response => {
                const entities = response.docs.map(docModifier);
                const userId = localStorage.getItem('userId');

                let user = entities.find(x => x.uid === userId);

                const data = {
                    uid: userId,
                    userEmail: localStorage.getItem('userEmail'),
                    score: score
                }

                if (user) {
                    models.entity.edit(collection, user.id, data)
                        .then(response => {
                            notifications.showInfo('Score saved successfully!');
                        })
                        .catch(notifications.handleError);
                } else {
                    models.entity.create(collection, data)
                        .then(response => {
                            notifications.showInfo('Score saved successfully!');
                        })
                        .catch(notifications.handleError);
                }

            }).catch(notifications.handleError);
        }
    }

}