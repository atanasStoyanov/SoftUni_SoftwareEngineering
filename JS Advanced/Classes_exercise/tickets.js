function solve(ticketsArr, sortingCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const sortObjectsByCriteria = (a, b) => sortingCriteria === 'price' ?
        a[sortingCriteria] - b[sortingCriteria] :
        a[sortingCriteria].localeCompare(b[sortingCriteria]);

    return ticketsArr
        .reduce((agr, ticketInfo) => {
            let [destination, price, status] = ticketInfo.split('|');
            
            agr.push(new Ticket(destination, price, status));

            return agr;
        }, [])
        .sort(sortObjectsByCriteria);

}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
));