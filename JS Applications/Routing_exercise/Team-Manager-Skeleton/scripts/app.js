//First install Node modules with "npm install" command;
//Use live server to run this project;

import { createFormEntity } from './form-helpers.js';
import {fireBaseRequestFactory} from './firebase-requests.js';

async function applyCommon() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
    }

    this.username = sessionStorage.getItem('username');
    this.loggedIn = !!sessionStorage.getItem('token');
    this.hasNoTeam = true;
}

async function homeViewHandler() {
    await applyCommon.call(this);

    this.partial('./templates/home/home.hbs');
};

async function aboutViewHandler() {
    await applyCommon.call(this);

    this.partial('./templates/about/about.hbs');
};

async function loginHandler() {
    await applyCommon.call(this);

    this.partials.loginForm = await this.load('./templates/login/loginForm.hbs');

    await this.partial('./templates/login/loginPage.hbs');

    let formRef = document.querySelector('#login-form');

    formRef.addEventListener('submit', (e) => {
        e.preventDefault();

        let form = createFormEntity(formRef, ['username', 'password']);
        let { username, password } = form.getValue();

        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(res => {
                firebase.auth().currentUser.getIdToken().then(token => {
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('username', res.user.email);
                });

                this.redirect('#/home');
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    });
};

async function registerHandler() {
    await applyCommon.call(this);
    this.partials.registerForm = await this.load('./templates/register/registerForm.hbs');

    await this.partial('./templates/register/registerPage.hbs');

    let formRef = document.querySelector('#register-form');
    let form = createFormEntity(formRef, ['username', 'password', 'repeatPassword']);

    formRef.addEventListener('submit', (e) => {
        e.preventDefault();
        let { username, password, repeatPassword } = form.getValue();
        let repeatPassField = formRef.querySelector('#repeatPassword');

        if (password !== repeatPassword) {
            repeatPassField.style.border = 'solid 1px';
            repeatPassField.style.borderColor = 'red';
            return
        } else {
            repeatPassField.style.border = '';
            repeatPassField.style.borderColor = '';
        }

        firebase.auth().createUserWithEmailAndPassword(username, password)
            .then(res => {
                firebase.auth().currentUser.getIdToken().then(token => {
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('username', res.user.email);
                });
                this.redirect(['#/home']);
            });
    });
}

async function logoutHandler() {
    sessionStorage.clear();
    firebase.auth().signOut()
    this.redirect(['#/home']);
}

async function catalogHandler() {
    await applyCommon.call(this);

    this.partial('./templates/catalog/teamCatalog.hbs');
     
}

async function createTeamHandler() {
    await applyCommon.call(this);
    this.partials.createForm = await this.load('./templates/create/createForm.hbs');

    await this.partial('./templates/create/createPage.hbs');

    let formRef = document.querySelector('#create-form');
    const firebaseTeams = fireBaseRequestFactory('https://testapp-1c79d.firebaseio.com/', 'teams', sessionStorage.getItem('token'));

    formRef.addEventListener('submit', (e) => {
        e.preventDefault();

        let form = createFormEntity(formRef, ['name', 'comment']);
        let formValue = form.getValue();

        firebaseTeams.createEntity(formValue)
        .then(res => {
            this.redirect(['#/catalog']);
        })

    });
}


// initialize the application
var app = Sammy('#main', function () {
    // include a plugin
    this.use('Handlebars', 'hbs');

    // define a 'route'
    this.get('#/', homeViewHandler);
    this.get('#/home', homeViewHandler);
    this.get('#/about', aboutViewHandler);
    this.get('#/login', loginHandler);
    this.post('#/login', () => false);
    this.get('#/register', registerHandler);
    this.post('#/register', () => false);
    this.get('#/logout', logoutHandler);
    this.post('#/logout', () => false);
    this.get('#/catalog', catalogHandler);
    this.get('#/create', createTeamHandler);
    this.post('#/create', () => false);

});

// start the application


(function () {
    app.run('#/');

})();