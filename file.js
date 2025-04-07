let imgBox = document.getElementById("img-box");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("downloadBtn");

function generateQr() {
  if (qrText.value !== "") {
    let size = "150x150";
    let qrCodeUrl =
      "https://api.qrserver.com/v1/create-qr-code/?size=" +
      size +
      "&data=" +
      encodeURIComponent(qrText.value);
    qrImg.src = qrCodeUrl;
    //qrImg.src = qrCodeUrl + encodeURIComponent(qrText.value);
    imgBox.classList.add("show-img");
    downloadBtn.disabled = false;
    downloadBtn.dataset.url = qrCodeUrl;
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
    downloadBtn.disabled = true;
  }
}
function downloadQr() {
  let qrCodeUrl = downloadBtn.dataset.url;
  console.log(qrCodeUrl);
  if (qrCodeUrl) {
    let a = document.createElement("a");
    a.href = qrCodeUrl;
    a.download = "qrcode.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
const getBtn = document.querySelector("button");
getBtn.addEventListener("click", generateQr);
downloadBtn.addEventListener("click", downloadQr);
