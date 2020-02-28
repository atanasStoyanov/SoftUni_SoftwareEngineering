function solve(arr) {
    let commands = {
        add: function (collection, str) {
            collection.push(str);
            return collection;
        },
        remove: function (collection, str) {
            collection = collection.filter(a => a !== str);
            return collection;
        },
        print: function (collection) {
            console.log(collection.join(','));
            return collection;
        }
    }

    arr.reduce((agr, e) => {
        let [command, str] = e.split(' ');

        agr = commands[command](agr, str);

        return agr;
    }, []);
}

solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])