export default {
    create(data) {
        return firebase.firestore().collection('ideas').add(data);
    },
    getAll(){
        return firebase.firestore().collection('ideas').get();
    },
    get(id) {
        return firebase.firestore().collection('ideas').doc(id).get();
    },
    close(id){
        return firebase.firestore().collection('ideas').doc(id).delete();
    },
    comment(id, data) {
        return firebase.firestore().collection('ideas').doc(id).update(data);
    },
    edit(id, data) {
        return firebase.firestore().collection('ideas').doc(id).update(data);
    },
}