function solve() {
   let playerOne = document.getElementById('player1Div');
   let playerTwo = document.getElementById('player2Div');
   let allSpans = document.querySelectorAll('#result > span');
   let firstSpan = allSpans[0];
   let secondSpan = allSpans[2];
   let history = document.getElementById('history');
   let playersArr = [playerOne, playerTwo]

   playersArr.map(player => player.addEventListener('click', eventHandler));

   let firstPlayerCard = '';
   let secondPlayerCard = '';

   function eventHandler(e) {
      let parentIndex = playersArr.indexOf(e.target.parentElement)

      if (parentIndex === 0) {
         firstPlayerCard = showCard(firstPlayerCard, firstSpan, e);
         
      } else if (parentIndex === 1) {
         
         secondPlayerCard = showCard(secondPlayerCard, secondSpan, e);
      }

      if (firstSpan.innerHTML !== '' && secondSpan.innerHTML !== '') {

         Number(firstPlayerCard.name) > Number(secondPlayerCard.name) ?
            createBorder(firstPlayerCard, secondPlayerCard) :
            createBorder(secondPlayerCard, firstPlayerCard);

         saveHistory(history, firstPlayerCard.name, secondPlayerCard.name);

         setToDefaultValue(firstSpan);
         setToDefaultValue(secondSpan);
         setToDefaultValue(firstPlayerCard);
         setToDefaultValue(secondPlayerCard);

      }

   }

   function showCard(player, span, e) {
      e.target.src = 'images/whiteCard.jpg';
      span.innerHTML = e.target.name;
      player = e.target;
      return player;
   }

   function createBorder(winnerCard, looserCard) {
      winnerCard.style.border = '2px solid green';
      looserCard.style.border = '2px solid red';
   }

   function setToDefaultValue(HTMLElement) {
      HTMLElement.innerHTML = '';
   }

   function saveHistory(HTMLElement, card1, card2) {
      HTMLElement.innerHTML += `[${card1} vs ${card2}] `;
   }



}


