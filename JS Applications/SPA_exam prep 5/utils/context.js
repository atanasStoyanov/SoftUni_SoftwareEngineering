export default function extend(context) {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            context.isLoggedIn = true;
            context.userId = user.uid;
            const username = user.email.split('@')[0];
            context.username = username;
            context.photoURL = user.photoURL;
            
            localStorage.setItem('userId', user.uid);
            localStorage.setItem('userEmail', user.email);
            // ...
        } else {
            // User is signed out.
            context.isLoggedIn = false;
            context.userId = null;
            context.username = null;
            context.photoURL = null;

            localStorage.removeItem('userId');
            localStorage.removeItem('userEmail');

            // ...
        }
    });

    return context.loadPartials({
        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs',
    });
}
