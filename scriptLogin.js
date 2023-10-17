// Fungsi untuk mengambil data dari API
async function fetchDataFromAPI() {
  try {
    const response = await fetch(
      "https://65277168917d673fd76db3d3.mockapi.io/loginuser/v1/apiuserlogin"
    ); // Gantilah 'URL_API_ANDA' dengan URL API yang sesuai
    if (!response.ok) {
      throw new Error("Gagal mengambil data dari API");
    }

    const data = await response.json();
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
      console.log("Login berhasil");
      localStorage.setItem(email);
      // Lakukan tindakan selanjutnya setelah login berhasil
    } else {
      console.log("Login gagal. Email atau password salah.");
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
