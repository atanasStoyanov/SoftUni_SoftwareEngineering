function solve() {
   let addBtn = document.querySelector('#add-new > button');
   let filterBtn = document.querySelector('#products > div > button');
   let productsList = document.querySelector('#products > ul');
   let kartList = document.querySelector('#myProducts > ul');
   let totalPriceHeading = document.querySelector('body > h1:nth-child(4)');
   let buybtn = document.querySelector('#myProducts > button');
   let totalPrice = 0;

   addBtn.addEventListener('click', addItem);
   filterBtn.addEventListener('click', filterProducts);
   productsList.addEventListener('click', addToKart);
   buybtn.addEventListener('click', buy);

   function addItem(e) {
      e.preventDefault();

      let productName = document.querySelector('#add-new > input[type=text]:nth-child(2)');
      let productQuantity = document.querySelector('#add-new > input[type=text]:nth-child(3)');
      let productPrice = document.querySelector('#add-new > input[type=text]:nth-child(4)');

      let li = document.createElement('li');

      let nameSpan = document.createElement('span');
      nameSpan.textContent = productName.value;
      li.appendChild(nameSpan);

      let quantityStrong = document.createElement('strong');
      quantityStrong.textContent = `Available: ${productQuantity.value}`;
      li.appendChild(quantityStrong);

      let div = document.createElement('div');
      let priceStrong = document.createElement('strong');
      priceStrong.textContent = (Number(productPrice.value)).toFixed(2);
      div.appendChild(priceStrong);
      let button = document.createElement('button');
      button.textContent = "Add to Client's List";
      div.appendChild(button);

      li.appendChild(div);

      productsList.appendChild(li);

      productName.value = '';
      productQuantity.value = '';
      productPrice.value = '';

   }

   function filterProducts(e) {
      let filterInput = document.getElementById('filter').value;
      let availableProductsList = document.querySelectorAll('#products > ul > li');

      for (const li of availableProductsList) {

         let name = li.querySelector('span').textContent.toLowerCase()

         if (name.includes(filterInput.toLowerCase())) {
            li.style.display = 'block';
         } else {
            li.style.display = 'none';
         }
      }

   }

   function addToKart(e) {
      if (e.target.tagName = 'BUTTON') {
         let clickedProductLi = e.target.parentNode.parentNode
         let clickedProdName = clickedProductLi.querySelector('span').textContent;
         let clickedProdPrice = clickedProductLi.querySelector('div > strong').textContent;
         let clickedProdQuantity = clickedProductLi.querySelector('strong')
         let parsedQuantity = Number(clickedProdQuantity.textContent.split(':')[1]);

         console.log(parsedQuantity);


         let kartLi = document.createElement('li');
         kartLi.textContent = clickedProdName;
         let kartPriceStrong = document.createElement('strong');
         kartPriceStrong.textContent = clickedProdPrice;
         kartLi.appendChild(kartPriceStrong);

         kartList.appendChild(kartLi);
         totalPrice += Number(clickedProdPrice);
         totalPriceHeading.textContent = `Total Price: ${totalPrice.toFixed(2)}`;

         if (parsedQuantity - 1 > 0) {
            clickedProdQuantity.textContent = `Available: ${parsedQuantity - 1}`;
         } else {
            clickedProductLi.remove();
         }

      }

   }

   function buy(e) {
      totalPriceHeading.textContent = `Total Price: 0.00`;
      kartList.innerHTML = '';  
      totalPrice = 0;
   }

}