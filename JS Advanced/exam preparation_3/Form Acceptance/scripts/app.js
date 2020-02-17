function acceptance() {
	let $addBtn = document.getElementById('acceptance');
	let $company = document.querySelector('#fields > td:nth-child(1) > input[type=text]');
	let $product = document.querySelector('#fields > td:nth-child(2) > input[type=text]');
	let $quantity = document.querySelector('#fields > td:nth-child(3) > input[type=text]');
	let $scrape = document.querySelector('#fields > td:nth-child(4) > input[type=text]');
	let $warehouseDiv = document.getElementById('warehouse');

	$addBtn.addEventListener('click', addProduct);

	function addProduct(e) {
		e.preventDefault();
		let companyNameIsValid = isValidStringInput($company.value);
		let productNameIsValid = isValidStringInput($product.value);
		let availableProducts = Number($quantity.value) - Number($scrape.value);

		if (companyNameIsValid && productNameIsValid && !isNaN($quantity.value) && !isNaN($scrape.value) && availableProducts > 0) {
			let productInfo = `[${$company.value}] ${$product.value} - ${Number($quantity.value) - Number($scrape.value)} pieces`;

			let $div = createHTMLElement('div')
			let $p = createHTMLElement('p', null, productInfo);
			let $outOfStockBtn = createHTMLElement('button', null, 'Out of stock', [{ k: 'type', v: 'button' }], { name: 'click', func: removeProduct });


			$div.appendChild($p);
			$div.appendChild($outOfStockBtn);
			$warehouseDiv.appendChild($div);

			$company.value = '';
			$product.value = '';
			$quantity.value = '';
			$scrape.value = '';
		}

	}

	function removeProduct(e) {
		let parent = e.target.parentNode;
		parent.remove();
	}

	function createHTMLElement(tagName, className, textContent, atributes, event) {
		let element = document.createElement(tagName);

		if (className) {
			element.classList.add(className);
		}

		if (textContent) {
			element.textContent = textContent;
		}

		if (atributes) {
			atributes.forEach(a => element.setAttribute(a.k, a.v));
		}

		if (event) {
			element.addEventListener(event.name, event.func)
		}

		return element;
	}

	function isValidStringInput(input) {
		if (typeof input === 'string' && input !== '') {
			return true;
		} else false;
	}
}