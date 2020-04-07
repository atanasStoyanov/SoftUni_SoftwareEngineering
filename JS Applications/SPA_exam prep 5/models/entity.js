export default {
    create(data) {
        return firebase.firestore().collection('events').add(data);
    },
    getAll(){
        return firebase.firestore().collection('events').get();
    },
    get(id) {
        return firebase.firestore().collection('events').doc(id).get();
    },
    close(id){
        return firebase.firestore().collection('events').doc(id).delete();
    },
    edit(id, data) {
        return firebase.firestore().collection('events').doc(id).update(data);
    },
}