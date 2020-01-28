function solve() {
   let input = document.getElementById('chat_input');
   let sendButton = document.getElementById('send');
   let messagesArea = document.getElementById('chat_messages');

   if (input === null || sendButton === null || messagesArea === null) {
      throw new Error('Error...');
   }

   function createMessageBox(tag) {
      let msgBox = document.createElement(tag);
      msgBox.classList.add('message', 'my-message');
      return msgBox;
   }

   function sendMessage() {
      let newMessage = createMessageBox('div');
      let text = input.value;

      if (text !== '') {
         newMessage.innerHTML = text;

         messagesArea.appendChild(newMessage);

         input.value = '';
      }
   }

   // sendButton.addEventListener('click', sendMessage);  ---- use this eventListner in order to work in judge

   document.addEventListener('DOMContentLoaded', x => {
      sendButton.addEventListener('click', sendMessage);

   });
}

