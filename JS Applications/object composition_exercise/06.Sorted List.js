function solve() {
    return {
        collection: [],
        size: 0,
        add: function (element) {
            this.collection.push(element);
            this.collection.sort((a, b) => a - b);
            this.size++;
        },
        remove: function (index) {
            validateIndex(this.collection, index);
            this.collection.splice(index, 1);
            this.size--;
        },
        get: function (index) {
            validateIndex(this.collection, index)
            return this.collection[index];
        }

    }

    function validateIndex(arr, index) {
        if (index < 0 || index > arr.length - 1) {
            throw new Error('Index out of boundery');
        }
    }
}