function solve() {
  const links = document.querySelectorAll("a");
  const paragraphs = document.querySelectorAll("p");

  const extractNumFromString = str => Number(str.match(/\d+/g)[0]);

  function updateVisitors(a, p) {
    a.addEventListener("click", function () {

      let count = extractNumFromString(p.innerHTML);
      p.innerHTML = `visited ${++count} times`;
    })
  }

  for (let i = 0; i < links.length; i++) {
    let a = links[i];
    let p = paragraphs[i]
    updateVisitors(a, p);
  }

}