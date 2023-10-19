// @ts-nocheck
const nonMember = document.getElementById('btn-user');
const member = document.getElementById('btn-avatar');
const modalEmail = document.getElementById('ct-email')

const isLogin = localStorage.getItem("email")
if (isLogin){
    nonMember.style.display = "none"
    member.style.display = "block"
    modalEmail.innerHTML = `<p class="h5">${localStorage.getItem("email")}</p>`
} else {
    nonMember.style.display = "block"
    member.style.display = "none"
}

function Logout(){
    localStorage.removeItem("email")
}
