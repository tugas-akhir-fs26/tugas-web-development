const cardContainer = document.getElementById("card-ct");

async function getDataCourse() {
  try {
    let URL = "https://65275100917d673fd76d901a.mockapi.io/list-course";
    let response = await fetch(URL);
    let data = await response.json();

    data.map((course) => {
      let card = `
            <div class="card card-ct">
            <img src="${course.img}" class="card-img-top" alt="${course.title}" />
            <div class="card-body">
              <h5 class="card-title">${course.title}</h5>
              <span class="card-author">${course.author}</span>
              <p class="card-text">
                <span>5.0</span>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </p>
              <div class="card-price">
                <h5>
                Rp.${course.price}
                </h5>
              </div>
              <a href="preview-kelas.html?id=${course.id}" class="btn btn-primary">Detail Kelas</a>
            </div>
          </div>`;

      // @ts-ignore
      cardContainer.innerHTML += card;
    });
  } catch (err) {
    console.log(err);
  }
}

getDataCourse();
