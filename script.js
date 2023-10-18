const nonMember = document.getElementById('non-member');

console.log(nonMember);
const isLogin = localStorage.getItem("email")
if (isLogin){
    nonMember.style.display = "none"
} else {
    nonMember.style.display = "block"
}
