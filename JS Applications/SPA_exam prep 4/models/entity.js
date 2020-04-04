export default {
    create(data) {
        return firebase.firestore().collection('recipes').add(data);
    },
    getAll(){
        return firebase.firestore().collection('recipes').get();
    },
    get(id) {
        return firebase.firestore().collection('recipes').doc(id).get();
    },
    close(id){
        return firebase.firestore().collection('recipes').doc(id).delete();
    },
    edit(id, data) {
        return firebase.firestore().collection('recipes').doc(id).update(data);
    },
}