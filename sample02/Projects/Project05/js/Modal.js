// // 모달 on
// body.style.overflow = 'hidden';

// // 모달 off
// body.style.overflow = 'auto';

let Modal = document.querySelector(".Modal_bg");
let txt1 = document.querySelector(".txt1");
let txt2 = document.querySelector(".txt2");
let txt3 = document.querySelector(".txt3");
let txt4 = document.querySelector(".txt4");
let bnt = document.querySelector(".MD_ok");
let closes = document.querySelector(".Md_close");
let body = document.querySelector("body");

function openModal01() {
  body.style.overflow = "hidden";
  Modal.style.display = "block";
  txt2.style.display = "none";
  txt3.style.display = "none";
  txt4.style.display = "none";
  txt1.style.display = "block";
}

function openModal02() {
  body.style.overflow = "hidden";
  Modal.style.display = "flex";
  txt1.style.display = "none";
  txt3.style.display = "none";
  txt4.style.display = "none";
  txt2.style.display = "block";
}

function openModal03() {
  body.style.overflow = "hidden";
  Modal.style.display = "flex";
  txt1.style.display = "none";
  txt2.style.display = "none";
  txt4.style.display = "none";
  txt3.style.display = "block";
}
function openModal04() {
  body.style.overflow = "hidden";
  Modal.style.display = "flex";
  txt1.style.display = "none";
  txt2.style.display = "none";
  txt3.style.display = "none";
  txt4.style.display = "block";
}

function closeModal() {
  body.style.overflow = "";
  Modal.style.display = "none";
}

closes.addEventListener("click", closeModal);
bnt.addEventListener("click", closeModal);
