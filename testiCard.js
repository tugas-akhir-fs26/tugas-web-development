const testiContainer = document.getElementById("testi-ct");

async function getDataTesti() {
  try {
    let URL = "https://65275100917d673fd76d901a.mockapi.io/list-testi";
    let response = await fetch(URL);
    let data = await response.json();

    console.log(data);

    data.map((testi) => {
      let card = `
            <div class="card test-ct mt-4">
            <img src="${testi.img}" class="testi-img" alt="${testi.name}" />
            <div class="card-body">
              <span class="card-author">${testi.name}</span>
              <p class="card-text">
              ${testi.review}
              </p>
            </div>
          </div>`;

      // @ts-ignore
      testiContainer.innerHTML += card;
    });
  } catch (err) {
    console.log(err);
  }
}

getDataTesti();
