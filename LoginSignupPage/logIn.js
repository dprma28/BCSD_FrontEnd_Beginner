const maxLoginAttempts = 5;
const loginAttemptsKey = "loginAttempts";
const blockLoginKey = "blockLogin";
const blockLoginExpireTime = 3600;

const login = document.querySelector(".login");
const logout = document.querySelector(".logout");

login.addEventListener("click", checkLogIn);
logout.addEventListener("click", checkLogOut);

function checkLogIn() {
    const id = document.querySelector(".id").value;
    const pw = document.querySelector(".pw").value;

    const loginAttempts = parseInt(getCookie(loginAttemptsKey)) || 0;

    if (id === "" || pw === "") {
        alert("id, pw를 입력해주세요");
        return;
    }
    if (getCookie(blockLoginKey)) {
        alert("로그인 시도가 많이 실패했습니다. 잠시 후 다시 시도해주세요.");
        return;
    }
    if (loginAttempts >= maxLoginAttempts) {
        alert("로그인 시도가 많이 실패했습니다. 잠시 후 다시 시도해주세요.");
        return;
    }
    if (id !== "user" || pw !== "password") {
        handleFailedLogin(id, loginAttempts);
    } else {
        handleSuccessfulLogin(id);
    }
}
function handleFailedLogin(id, loginAttempts) {
    alert("잘못된 ID 또는 비밀번호입니다.");
    localStorage.setItem("id", id);
    sessionStorage.setItem("id", id);

    const updatedAttempts = loginAttempts + 1;
    document.cookie = `${loginAttemptsKey}=${updatedAttempts}`;

    if (updatedAttempts >= maxLoginAttempts) {
        const expireTime = blockLoginExpireTime;
        document.cookie = `${blockLoginKey}=true; max-age=${expireTime}`;
    }
}
function handleSuccessfulLogin(id) {
    alert("로그인 되었습니다.");
    localStorage.setItem("id", id);
    sessionStorage.setItem("id", id);

    const expireTime = 72 * 60 * 60;
    const expire = `max-age=${expireTime}`;

    document.cookie = `id=${id}; ${expire}`;
    resetLoginAttempts();
}
function resetLoginAttempts() {
    const pastDate = new Date(0);
    document.cookie = `${loginAttemptsKey}=; expires=${pastDate.toUTCString()};`;
}
function getCookie(name) {
    const cookieArr = document.cookie.split("; ");
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0]) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}
function checkLogOut() {
    alert("로그아웃 되었습니다.");

    localStorage.removeItem("id");
    sessionStorage.removeItem("id");

    const expireTime = 0;
    const expire = `max-age=${expireTime}`;

    document.cookie = `id=; ${expire}`;
}