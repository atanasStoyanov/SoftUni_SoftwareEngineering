function oldBooks(input) {
    let aniBook = input.shift();
    let capacity = Number(input.shift());
    let counter = 0;
    let isBookfound = false;

    while(counter < capacity){
        let checkedBook = input.shift();
        if(checkedBook == aniBook){
            isBookfound = true;
            break;
        }else{
            counter++
        }
    }
   if (isBookfound == false){
    console.log(`The book you search is not here!`);
    console.log(`You checked ${counter} books.`)
   }else{
    console.log(`You checked ${counter} books and found it.`);
   } 
}

oldBooks(['The Spot',4,'Hunger Games','Harry Potter','Torronto','Spotify'])