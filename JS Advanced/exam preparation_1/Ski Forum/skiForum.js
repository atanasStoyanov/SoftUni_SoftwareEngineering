class Forum {
    
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
    }

    register(username, password, repeatPassword, email) {
        if (username === '' || password === '' || repeatPassword === '' || email === '') {
            throw new Error('Input can not be empty');
        }

        if (password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }

        for (const user of this._users) {
            if (user.username === username || user.email === email) {
                throw new Error('This user already exists!');
            }
        }

        let newUser = {
            username,
            password,
            email,
            status: 'loggedOut'
        }

        this._users.push(newUser);

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {

        for (const user of this._users) {
            if (user.username === username && user.password === password) {
                user.status = 'loggedIn';
                return 'Hello! You have logged in successfully';
            }
        }

        throw new Error('There is no such user');
    }

    logout(username, password) {

        for (const user of this._users) {
            if (user.username === username && user.password === password) {
                user.status = 'loggedOut';
                return 'You have logged out successfully';
            }
        }

        throw new Error('There is no such user');
    }

    postQuestion(username, question) {
        let userIsLoggedIn = false;

        for (const user of this._users) {
            if (user.username === username && user.status === 'loggedIn') {
                userIsLoggedIn = true;
                break;
            }
        }

        if (userIsLoggedIn === false) {
            throw new Error('You should be logged in to post questions');
        }

        if (userIsLoggedIn === true && question === '') {
            throw new Error('Invalid question');
        }

        let newQuestion = {
            id: this._id,
            question,
            username,
            answers: []
        }

        this._questions.push(newQuestion);
        this._id++;

        return 'Your question has been posted successfully';
    }

    postAnswer(username, questionId, answer) {
        let userIsLoggedIn = false;
        let questionExists = false;

        for (const user of this._users) {
            if (user.username === username && user.status === 'loggedIn') {
                userIsLoggedIn = true;
                break;
            }
        }

        if (userIsLoggedIn === false) {
            throw new Error('You should be logged in to post answers');
        }

        if (userIsLoggedIn === true && answer === '') {
            throw new Error('Invalid answer');
        }


        for (const question of this._questions) {

            if (question.id === questionId) {
                question.answers.push(`${username}: ${answer}`);
                questionExists = true;
                return 'Your answer has been posted successfully';
            }
        }

        if (questionExists === false) {
            throw new Error('There is no such question');
        }
    }

    showQuestions() {
        let result = '';

        this._questions.map(q => {
            result += `Question ${q.id} by ${q.username}: ${q.question}\n`;
            q.answers.map(a => result += `---${a}\n`);
        });

        return result.trim();
    }
}

let forum = new Forum();

forum.register('Jonny', '12345', '12345', 'jonny@abv.bg');
forum.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
forum.login('Jonny', '12345');
forum.login('Peter', '123ab7');

forum.postQuestion('Jonny', "Do I need glasses for skiing?");
forum.postAnswer('Peter',1, "Yes, I have rented one last year.");
forum.postAnswer('Jonny',1, "What was your budget");
forum.postAnswer('Peter',1, "$50");
forum.postAnswer('Jonny',1, "Thank you :)");

console.log(forum.showQuestions());
