let imgBox = document.getElementById("img-box");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function generateQr() {
  if (qrText.value !== "") {
    let qrCodeUrl =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    qrImg.src = qrCodeUrl + encodeURIComponent(qrText.value);
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
const button = document.querySelector("button");
button.addEventListener("click", generateQr);
