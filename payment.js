// @ts-nocheck
const container = document.getElementById("payment-ct");
const containerSidebar = document.getElementById("payment-sidebar");

async function getCourseId() {
  try {
    let URL = "https://65275100917d673fd76d901a.mockapi.io/list-course";
    let response = await fetch(URL);
    let data = await response.json();
    const detail = data.find((d) => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      return d.id === id;
    });
    let item = `
      <div class="course-detail p-4">
      <img src=${detail.img} alt="" width="250px" />
      <div class="txt-deskripsi d-flex flex-column justify-content-center align-items-start">
        <h3 class="h4">${detail.title}</h3>
        <p>
          ${detail.deskripsi}
        </p>
        <div class="harga h6 text-primary">Rp.${detail.price}</div>
      </div>
    </div>
    <div class="ava d-flex justify-content-center align-items-center">
      <img
        src="image/instruktur-removebg-preview.png"
        alt=""
        width="60x"
      />
      <h3 class="h5">${detail.author}</h3>
    </div>
      `;

    let sideItem = `
    <div class="card card-payment p-3">
            <div class="detail text-center">
              <img src=${detail.img} alt="" width="250px" />
              <h4 class="mt-3">${detail.title}</h4>
            </div>
            <div class="harga">
              <span class="h6">Harga Kelas</span>
              <span class="h5 text-primary">Rp.${detail.price}</span>
            </div>
            <div class="total">
              <span class="h6">Total Harga </span>
              <span class="h5 text-primary">Rp.${detail.price}</span>
            </div>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">Bayar</button>
            <div class="payment">
              <div class="line mt-3 mb-3"></div>
              <span class="h5">Metode Pembayaran</span>
              <div class="img-payment">
                <img src="image/payment/bca.png" alt="" width="70px" />
                <img src="image/payment/mandiri.png" alt="" width="70px" />
                <img src="image/payment/gopay.png" alt="" width="70px" />
                <img src="image/payment/spay.png" alt="" width="70px" />
                <img src="image/payment/ovo.png" alt="" width="70px" />
              </div>
            </div>
          </div>
    `;
    container.innerHTML = item;
    containerSidebar.innerHTML=sideItem;
  } catch (err) {
    console.log(err);
  }
}


function buyCourseHandler(){
  
}
getCourseId();
