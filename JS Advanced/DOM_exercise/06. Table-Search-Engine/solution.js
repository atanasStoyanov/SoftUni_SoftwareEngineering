function solve() {
   let input = document.getElementById('searchField');
   let button = document.getElementById('searchBtn');
   let tableCells = document.querySelectorAll('td');
   let tableRows = document.querySelectorAll('body > table > tbody > tr');

   if (input === null || button === null) {
      throw new Error('Error...');
   }

   button.addEventListener('click', eventHandler);

   function addClassToHTMLElement(HTMLElement, classStr) {
      HTMLElement.classList.add(classStr);
   }

   function removeClassIfExists(HTMLElement, classStr) {
      HTMLElement.classList.contains(classStr) ? HTMLElement.classList.remove(classStr) : HTMLElement;
   }

   function eventHandler() {
      let searchedText = input.value;

      Array.from(tableRows)
         .map(row => removeClassIfExists(row, 'select'));

      Array.from(tableCells)
         .map(cell => {
            let cellText = cell.innerHTML;
            let cellParent = cell.parentElement;

            if (cellText.includes(searchedText)) {
               addClassToHTMLElement(cellParent, 'select');
            }
         });

      input.value = '';
   }

}