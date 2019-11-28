function solve(arr) {
    let concert = {};

    for (let i = 0; i < arr.length; i++) {
        let [action, band, info] = arr[i].split('; ');

        if (action === 'Add') {

            if (concert.hasOwnProperty(band)) {
                concert[band].members.push(...info.split(', '));
            } else {
                concert[band] = {
                    'members': [...info.split(', ')],
                    'time': 0
                }
            }

        } else if (action === 'Play'){

            if (concert.hasOwnProperty(band)) {
                concert[band].time += Number(info);
            } else {
                concert[band] = {
                    'members': [],
                    'time': Number(info)
                }
            }

        } else {
            break;
        }
    }

    let totalTime = Object.keys(concert)
        .reduce((agr, b) => agr += concert[b].time, 0);
    
    console.log(`Total time: ${totalTime}`);
    
    Object.keys(concert)
        .sort((a,b) => a.localeCompare(b))
        .sort((a,b) => concert[b].time - concert[a].time)
        .map(a => console.log(`${a} -> ${concert[a].time}`))
    
    let bandToPrint = arr.pop();
    console.log(bandToPrint);
    concert[bandToPrint].members
        .filter((el, i, self) => self.indexOf(el) === i)
        .map(a => console.log(`=> ${a}`));
}

solve([
    'Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'

]);