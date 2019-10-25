function solve(arr) {

    arr = arr
        .reduce((agr, prop) => {
            let [town, latitude, longitude] = prop.split(' | ');
            latitude = Number(latitude).toFixed(2);
            longitude = Number(longitude).toFixed(2);
            
            agr.push({town, latitude, longitude})
            return agr
        }, [])
        .map(a => console.log(a));
}

solve([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);