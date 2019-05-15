function moving (input){
   let width = Number(input.shift());
   let length = Number(input.shift());
   let height = Number(input.shift());

   let freeSpace = width * length * height;
   let takenSpace = 0; 
   let currentBoxes = input.shift(); 

   while (takenSpace <= freeSpace){
       if (currentBoxes == 'Done'){
           break;
       }
       currentBoxes = Number(currentBoxes);
       takenSpace += currentBoxes
       currentBoxes = input.shift()
   }
   let diff = Math.abs(takenSpace - freeSpace)

   if (takenSpace > freeSpace){
       console.log(`No more free space! You need ${diff} Cubic meters more.`)
   }else{
    console.log(`${diff} Cubic meters left.`)
   }
}       

moving([10,10,2,20,20,20,20,122])