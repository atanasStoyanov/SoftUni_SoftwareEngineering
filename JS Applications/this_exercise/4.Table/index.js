function solve() {
   let $table = document.querySelector('body > table');
   let $tableRows = Array.from(document.getElementsByTagName('tr'));

   $table.addEventListener('click', changeBackground);

   function changeBackground(e) {
      e.preventDefault();

      if (e.target.nodeName === 'TD') {
         let $currentRow = e.target.parentNode;

         if ($currentRow.hasAttribute('style')) {
            $currentRow.removeAttribute('style');
         } else {
            $tableRows.map(r => r.removeAttribute('style'));
            $currentRow.style.backgroundColor = '#413f5e';
         }
      }
   }
}

