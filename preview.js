const cardContainer = document.getElementById("card-ct");

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
    console.log(detail);
  } catch (err) {
    console.log(err);
  }
}

getDataCourse();
