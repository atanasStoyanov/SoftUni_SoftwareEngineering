import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/doc-modifier.js';
import handleError from '../utils/errorHandler.js';


export default {
    get: {
        home(context) {

            models.entity.getAll().then(response => {
                const entities = response.docs.map(docModifier);

                const jsArticles = entities.filter(a => a.category === 'JavaScript').sort((a, b) => b.title.localeCompare(a.title));
                const cArticles = entities.filter(a => a.category === 'C#').sort((a, b) => b.title.localeCompare(a.title));
                const javaArticles = entities.filter(a => a.category === 'Java').sort((a, b) => b.title.localeCompare(a.title));
                const pythonArticles = entities.filter(a => a.category === 'Python').sort((a, b) => b.title.localeCompare(a.title));

                context.jsArticles = jsArticles;
                context.cArticles = cArticles;
                context.javaArticles = javaArticles;
                context.pythonArticles = pythonArticles;

                extend(context).then(function () {
                    this.partial('../views/home/home.hbs');
                });
            })
            .catch(handleError);
        }
    }
}