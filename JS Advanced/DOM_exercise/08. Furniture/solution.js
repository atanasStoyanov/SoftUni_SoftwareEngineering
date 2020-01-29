function solve() {
  let input = document.querySelector('#exercise > textarea:nth-child(2)');
  let tableBody = document.getElementsByTagName('tbody')[0];
  let buttons = document.getElementsByTagName('button');

  if (input === null || tableBody === null || buttons === null) {
    throw new Error('Error...');
  }

  Array.from(buttons).map(b => b.addEventListener('click', eventHandler))

  function eventHandler(e) {
    if (e.target.innerHTML === 'Generate') {
      generateCatalogue();
    } else {
      buy();
    }
  }

  function generateCatalogue() {
    let furnituresArr = JSON.parse(input.value);

    furnituresArr.map(furnitureObj => {
      let newTableRow = document.createElement('tr');
      let tdImg = createTableCell('img', furnitureObj.img)
      let tdName = createTableCell('p', furnitureObj.name);
      let tdPrice = createTableCell('p',furnitureObj.price);
      let tdDecFactor = createTableCell('p',furnitureObj.decFactor);
      let tdCheckBox = createTableCell('checkbox');

      newTableRow.appendChild(tdImg);
      newTableRow.appendChild(tdName);
      newTableRow.appendChild(tdPrice);
      newTableRow.appendChild(tdDecFactor);
      newTableRow.appendChild(tdCheckBox);

      tableBody.appendChild(newTableRow);
     
    });
  }

  function createTableCell(innerElement, text) {
    let cell = document.createElement('td');

    if (innerElement === 'p') {
      cell.innerHTML = `<p>${text}</p>`;
    } else if (innerElement === 'img') {
      let img = document.createElement('img')
      img.src = text;
      cell.appendChild(img);
    } else if (innerElement === 'checkbox') {
      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      cell.appendChild(checkBox);
    }

    return cell;
  }

  function buy() {
    let allCheckBoxes = document.getElementsByTagName('input');
    let allTableBodyRows = document.querySelectorAll('tbody > tr');
    let outputArea = document.querySelector('#exercise > textarea:nth-child(5)');

    let boughtFurniture = [];
    let totalPrice = 0;
    let decorationFactors = [];

    Array.from(allCheckBoxes).map((input, i) => {

      if (input.checked === true) {
        
        let furnitureName = allTableBodyRows[i].children[1].textContent;
        let price = allTableBodyRows[i].children[2].textContent;
        let decFactor = allTableBodyRows[i].children[3].textContent;

        boughtFurniture.push(furnitureName);
        totalPrice += Number(price);
        decorationFactors.push(Number(decFactor));
      }
    });


    outputArea.value += `Bought furniture: ${boughtFurniture.join(', ')}\n`;
    outputArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputArea.value += `Average decoration factor: ${calculateAverage(decorationFactors)}`;
  }

  function calculateAverage(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
  }

}