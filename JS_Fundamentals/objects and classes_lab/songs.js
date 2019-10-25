function solve(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songsNumber = arr.shift();
    let typeOfTheList = arr.pop();

    arr = arr
        .map(a => a.split('_'))
        .map(([typeList, name, time]) => new Song(typeList, name, time))

    if (typeOfTheList === 'all') {
        arr = arr.map(a => console.log(a.name));
    } else {
        arr = arr
            .filter(a => a.typeList === typeOfTheList)
            .map(a => console.log(a.name));
    }

}

solve([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);