function solve(kingdomsArr, fights) {
    function addKingdomAndGeneralToObj(obj, kingdom, general) {
        obj.hasOwnProperty(kingdom) ? obj[kingdom][general] = 0 : obj[kingdom] = {[general] : 0};
    }

    function addArmyToObj(obj, kingdom, general, army) {
        obj[kingdom].hasOwnProperty(general) ? obj[kingdom][general] += Number(army) :  obj[kingdom][general];
    }

    let kingdomsObj = kingdomsArr.reduce((agr, kingdomInfo) => {
        let kingdom = kingdomInfo.kingdom;
        let general = kingdomInfo.general;
        let army = kingdomInfo.army;

        addKingdomAndGeneralToObj(agr, kingdom, general);
        addArmyToObj(agr, kingdom, general, army)

        return agr;
    },{});

    

    return kingdomsObj;
}


console.log(solve(
    [{ 'kingdom': "Maiden Way", 'general': "Merek", 'army': 5000 },
    { 'kingdom': "Stonegate", 'general': "Ulric", 'army': 4900 },
    { 'kingdom': "Stonegate", 'general': "Doran", 'army': 70000 },
    { 'kingdom': "YorkenShire", 'general': "Quinn", 'army': 0 },
    { 'kingdom': "YorkenShire", 'general': "Quinn", 'army': 2000 },
    { 'kingdom': "Maiden Way", 'general': "Berinon", 'army': 100000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]

));
