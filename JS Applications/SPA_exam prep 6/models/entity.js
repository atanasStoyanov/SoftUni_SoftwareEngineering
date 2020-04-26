export default {
    create(collection, data) {
        return firebase.firestore().collection(collection).add(data);
    },
    getAll(collection){
        return firebase.firestore().collection(collection).get();
    },
    get(collection, id) {
        return firebase.firestore().collection(collection).doc(id).get();
    },
    close(collection, id){
        return firebase.firestore().collection(collection).doc(id).delete();
    },
    edit(collection, id, data) {
        return firebase.firestore().collection(collection).doc(id).update(data);
    },
}