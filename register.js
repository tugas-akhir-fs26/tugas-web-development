// Fungsi untuk melakukan validasi nama sebelum mendaftar
function validateName() {
  var nameInput = document.getElementById("name");
  var nameError = document.getElementById("name-error");
  var name = nameInput.value;

  if (name.trim() === "") {
    nameError.textContent = "Nama harus diisi";
    nameError.style.display = "block";
    return false;
  }

  nameError.style.display = "none";
  return true;
}

// Menggunakan event listener untuk memanggil fungsi validasi saat input nama kehilangan fokus
var nameInput = document.getElementById("name");
nameInput.addEventListener("blur", validateName);

function limitNameLength(input, maxLength) {
  var name = input.value;
  var nameError = document.getElementById("name-error");

  if (name.length > maxLength) {
    nameError.textContent = "Sudah melebihi 35 karakter";
    nameError.style.display = "block";
    input.value = name.slice(0, maxLength); // Batasi panjang nama
  } else {
    nameError.style.display = "none";
  }
}

// Fungsi untuk melakukan validasi email sebelum mendaftar
function validateEmail() {
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("email-error");
  var email = emailInput.value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email.trim() === "") {
    emailError.textContent = "Email harus diisi";
    emailError.style.display = "block";
    return false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Email tidak valid";
    emailError.style.display = "block";
    return false;
  }

  emailError.style.display = "none";
  return true;
}

// Menggunakan event listener untuk memanggil fungsi validasi saat input email kehilangan fokus
var emailInput = document.getElementById("email");
emailInput.addEventListener("blur", validateEmail);

// Fungsi untuk melakukan validasi password sebelum mendaftar
function validatePassword() {
  var passwordInput = document.getElementById("password");
  var passwordError = document.getElementById("password-error");
  var password = passwordInput.value;
  var passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)/;
  if (password.trim() === "") {
    passwordError.textContent = "Password harus diisi";
    passwordError.style.display = "block";
    return false;
  } else if (!passwordPattern.test(password)) {
    passwordError.textContent = "Password harus berupa huruf dan angka";
    passwordError.style.display = "block";
    return false;
  }

  passwordError.style.display = "none";
  return true;
}

// Menggunakan event listener untuk memanggil fungsi validasi saat input password kehilangan fokus
var passwordInput = document.getElementById("password");
passwordInput.addEventListener("blur", validatePassword);

// Fungsi untuk membuka modal
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
  var modals = document.querySelectorAll(".modal");
  modals.forEach(function (modal) {
    modal.style.display = "none";
  });
}

// Validasi data kosong sebelum pendaftaran
document.querySelector(".btn").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(name);
  console.log(email);
  console.log(password);
  if (name === "" || email === "" || password === "") {
    openModal("incompleteDataModal");
  } else if (!validateEmail()) {
    return;
  } else if (!validatePassword()) {
    return;
  } else {
    var data = {
      name: name,
      email: email,
      password: password
    };

    fetch("https://6528c37e931d71583df26ee3.mockapi.io/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      openModal("successModal");
      localStorage.setItem("email", data.email)
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }
});

// Fungsi untuk memeriksa apakah email sudah digunakan
function isEmailAlreadyUsed(email) {
  // Gantilah bagian ini dengan logika yang sesuai dengan mock API atau database Anda
  // Contoh: Anda memiliki array email yang berisi email yang sudah terdaftar
  var registeredEmails = [
    "email1@example.com",
    "email2@example.com",
    "email3@example.com",
  ];

  // Periksa apakah email sudah ada di dalam daftar
  return registeredEmails.includes(email);
}

// Fungsi untuk menampilkan notifikasi bahwa email telah digunakan
function showEmailUsedNotification() {
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("email-error");
  var email = emailInput.value;

  if (isEmailAlreadyUsed(email)) {
    emailError.textContent = "Email telah digunakan";
    emailError.style.display = "block";
  }
  // Tambahan: tambahkan kode di sini untuk menyembunyikan pesan kesalahan jika diperlukan
  // Misalnya, jika pengguna mengoreksi email yang salah.
}

// Menggunakan event listener untuk memanggil fungsi notifikasi saat input email kehilangan fokus
var emailInput = document.getElementById("email");
emailInput.addEventListener("blur", showEmailUsedNotification);

// Fungsi ikon mata pada password
function eyechange() {
  var x = document.getElementById("password").type;

  if (x == "password") {
    document.getElementById("password").type = "text";

    document.getElementById(
      "eyebutton"
    ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>`;
  } else {
    document.getElementById("password").type = "password";

    document.getElementById(
      "eyebutton"
    ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
    <path
      d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"
    />
  </svg>`;
  }
}
