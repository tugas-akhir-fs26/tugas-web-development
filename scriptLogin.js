// Fungsi untuk mengambil data dari API
async function fetchDataFromAPI() {
  try {
    const response = await fetch(
      "https://6528c37e931d71583df26ee3.mockapi.io/users"
    ); // Gantilah 'URL_API_ANDA' dengan URL API yang sesuai
    if (!response.ok) {
      throw new Error("Gagal mengambil data dari API");
    }

    const data = await response.json()
    return data;
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    throw error;
  }
}

// Fungsi untuk melakukan autentikasi
async function authenticate(email, password) {
  try {
    const apiData = await fetchDataFromAPI();

    // Mengecek apakah email dan password sesuai dengan data dari API
    const matchingUser = apiData.find(
      (user) => user.email === email && user.password === password
    );

    if (matchingUser) {
      alert("Login Berhasil");
      localStorage.setItem("email", email);
      window.location.href = "index.html"
      // Lakukan tindakan selanjutnya setelah login berhasil
    } else {
      alert("Login gagal");
    }
  } catch (error) {
    console.error("Gagal melakukan autentikasi:", error);
  }
}

// Menggunakan fungsi authenticate
const inputEmail = "email_input"; // Gantilah 'email_input' dengan elemen input email Anda
const inputPassword = "password_input"; // Gantilah 'password_input' dengan elemen input password Anda

// Mendengarkan peristiwa klik tombol login
const loginButton = document.getElementById("login_button"); // Gantilah 'login_button' dengan ID tombol login Anda
loginButton.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;
  authenticate(email, password);
});
