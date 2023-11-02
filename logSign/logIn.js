const login = document.querySelector(".login");

login.addEventListener("click", checkLogIn);

function checkLogIn() {
    const id = document.querySelector(".id").value;
    const pw = document.querySelector(".pw").value;

    if (id === "" || pw === "") {
        alert("id, pw를 입력해주세요");
    } else {
        alert("로그인 되었습니다.");
    }
}