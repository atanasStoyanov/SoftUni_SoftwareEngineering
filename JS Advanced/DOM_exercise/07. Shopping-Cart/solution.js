function solve() {
   let titles = document.getElementsByClassName('product-title');
   let prices = document.getElementsByClassName('product-line-price');
   let textArea = document.getElementsByTagName('textarea')[0];
   let allButtons = Array.from(document.getElementsByTagName('button'));

   if (titles === null || prices === null || textArea === null || allButtons === null) {
      throw new Error('Error...');
   }

   let totalPrice = 0;
   let list = [];
   let endShopping = false;

   allButtons.map(b => b.addEventListener('click', eventHandler));

   function eventHandler(e) {
      let clickedButton = e.target;
      let clickedButtonClass = clickedButton.className;
      let index = allButtons.indexOf(clickedButton)

      if (clickedButtonClass === 'add-product' && endShopping === false) {
         let product = titles[index].innerHTML;
         let price = prices[index].innerHTML;

         addProduct(product, price, list);

      } else if (clickedButtonClass === 'checkout' && endShopping === false) {
         checkout(list, totalPrice);

      }
   }

   function addProduct(product, price, list) {

      totalPrice += Number(price);

      addProductToList(product, list);

      textArea.innerHTML += `Added ${product} for ${price} to the cart.\n`;
   }

   function addProductToList(prod, list) {
      list.includes(prod) ? list : list.push(prod);
   }

   function checkout(list, totalPrice) {
      textArea.innerHTML += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
      endShopping = true;
   }

}


