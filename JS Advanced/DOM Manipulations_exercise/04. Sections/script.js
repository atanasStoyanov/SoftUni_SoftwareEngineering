function create(words) {
   let mainDiv = document.getElementById('content');

   words.map(w => {
      let p = createParagph(w);

      let divSection = document.createElement('div');
      divSection.appendChild(p);

      mainDiv.appendChild(divSection);
   });

   let allSections = document.querySelectorAll('#content > div');

   Array.from(allSections).map(s => s.addEventListener('click', showParagraph));

   function showParagraph(e) {
      e.preventDefault();
      
      let p = e.target.firstChild;
      p.style.display = 'block';
   }

   function createParagph(text) {
      let p = document.createElement('p');
      p.textContent = text;
      p.style.display = 'none';
      return p;
   }
}