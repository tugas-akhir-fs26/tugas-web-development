// @ts-nocheck
const cardContainer = document.getElementById("card-ct");
const author = document.getElementById("author");
const instruktur = document.getElementById("instruktur");
const courseTitle = document.getElementById("judul-course");
const courseImg = document.getElementById("img-tb");
const coursePrice = document.getElementById("price");
const courseTarget = document.getElementById("target");
const courseDeskripsi = document.getElementById("deskripsi");
const courseReason = document.getElementById("alasan");
const authorCourse = document.getElementById("course");
const authorDetail = document.getElementById("info-ins");

courseImg.style.width = "400px";
courseImg.style.textAlign = "center";

async function getDataCourse() {
  try {
    let URL = "https://65275100917d673fd76d901a.mockapi.io/list-course";
    let response = await fetch(URL);
    let data = await response.json();
    const detail = data.find((d) => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      return d.id === id;
    });
    author.innerHTML = detail.author;
    authorCourse.innerHTML = detail.title;
    instruktur.innerHTML = detail.author;
    courseTitle.innerHTML = detail.title;
    courseImg.src = detail.img;
    coursePrice.innerHTML = `Rp.${detail.price}`;
    courseDeskripsi.innerHTML = detail.deskripsi;
    courseTarget.innerHTML = detail.target;
    courseReason.innerHTML = detail.alasan;
    authorDetail.innerHTML = detail.info;

  } catch (err) {
    console.log(err);
  }
}

function paymentHandler() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log("dari button");
  if (localStorage.getItem("email")) {
    window.location.href = `payment.html?id=${id}`;
  } else {
    if (confirm("Anda belum Login silahkan login terlebih dahulu")) {
      window.location.href = "login.html";
    }
  }
}

getDataCourse();
