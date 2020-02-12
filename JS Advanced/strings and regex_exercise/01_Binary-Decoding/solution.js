let button = document.getElementsByTagName('button')[0];

window.addEventListener('DOMContentLoaded', () => {
	button.addEventListener('click', eventHandler);
});

function eventHandler(e) {
	e.preventDefault();
	let input = document.getElementById('input').value;
	let outputField = document.getElementById('resultOutput');

	outputField.textContent = decoding(input);

}

const convertBinaryToDecimal = bin => parseInt(bin, 2);


function decoding(binaryStr) {

	let weight = calculateWeight(binaryStr);

	let resultBinary = binaryStr
		.slice(weight, binaryStr.length - weight)

	let resultString = resultBinary
		.match(/.{8}|.{7}|.{6}|.{5}|.{4}|.{3}|.{2}|.{1}/g)
		.map(convertBinaryToDecimal)
		.reduce((agr, el) => agr += String.fromCharCode(Number(el)), '')
		.replace(/[^\w\s]/gm, '');

	return resultString;
}

function calculateWeight(str) {
	let singleNumPattern = /^[0-9]{1}$/g;

	while (singleNumPattern.test(str) === false) {
		str = str
			.split('')
			.reduce((a, b) => a + Number(b), 0)
			.toString();
	}
	return Number(str);
}


//Solution for judge.Add onclick="solve()" to the button tag;

// function solve() {
// 	let input = document.getElementById('input').value;
// 	let outputField = document.getElementById('resultOutput');

// 	const convertBinaryToDecimal = bin => parseInt(bin, 2);

// 	function decoding(binaryStr) {

// 		let weight = calculateWeight(binaryStr);

// 		let resultBinary = binaryStr
// 			.slice(weight, binaryStr.length - weight)

// 		let resultString = resultBinary
// 			.match(/.{8}|.{7}|.{6}|.{5}|.{4}|.{3}|.{2}|.{1}/g)
// 			.map(convertBinaryToDecimal)
// 			.reduce((agr, el) => agr += String.fromCharCode(Number(el)), '')
// 			.replace(/[^\w\s]/gm, '');

// 		return resultString;
// 	}

// 	outputField.textContent = decoding(input);

// 	function calculateWeight(str) {
// 		let singleNumPattern = /^[0-9]{1}$/g;

// 		while (singleNumPattern.test(str) === false) {
// 			str = str
// 				.split('')
// 				.reduce((a, b) => a + Number(b), 0)
// 				.toString();
// 		}
// 		return Number(str);
// 	}
// }