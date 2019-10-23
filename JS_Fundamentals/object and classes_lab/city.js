function solve(name, area, population, country, postCode) {
    let city = {};
    city['name'] = name;
    city['area'] = area;
    city['population'] = population;
    city['country'] = country;
    city['postCode'] = postCode;

    for (const key in city) {
        console.log(`${key} -> ${city[key]}`);
    }
}

solve("Sofia"," 492", "1238438", "Bulgaria", "1000");