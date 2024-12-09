const content = "#한세사이버보안고 #프론트엔드 #Mobile";
const text = document.querySelector(".hashTag");
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
  }
}
setInterval(typing, 100);

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "gray";
    header.style.transition = "background-color 0.3s ease";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
