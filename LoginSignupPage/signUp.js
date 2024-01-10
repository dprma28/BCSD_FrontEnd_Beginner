const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const pwCheck = document.querySelector(".pw-check");
const cancel = document.querySelector(".cancel");


id.addEventListener("keyup", checkId);
pwCheck.addEventListener("keyup", checkPw);
cancel.addEventListener("click", cancelClick);


function checkId() {
    const regexp = /^[0-9a-z]*@[0-9a-z]/g;

    if (regexp.test(id.value)==true) {
        document.querySelector(".id-error").innerHTML = "<div>사용 가능합니다.</div>";
    } else {
        document.querySelector(".id-error").innerHTML = "<div>이메일 형식이 아닙니다.</div>";
    }
}
function checkPw() {
    if (pw.value === pwCheck.value) {
        document.querySelector(".pw-error").innerHTML = "<div>비밀번호가 일치합니다.</div>";
    } else {
        document.querySelector(".pw-error").innerHTML = "<div>비밀번호가 일치하지 않습니다.</div>";
    }
}
function cancelClick() {
    window.location.href = "logIn.html";
}


const majors = [
    {"name": "기계공학부", "dept_nums": ["20"]},
    {"name": "산업경영학부", "dept_nums": ["80"]},
    {"name": "컴퓨터공학부", "dept_nums": ["35", "36"]},
    {"name": "메카트로닉스공학부", "dept_nums": ["40"]},
    {"name": "고용서비스정책학과", "dept_nums": ["85"]},
    {"name": "디자인공학부", "dept_nums": ["51"]},
    {"name": "에너지신소재화학공학부", "dept_nums": ["74"]},
    {"name": "전기전자통신공학부", "dept_nums": ["61"]},
    {"name": "건축공학부", "dept_nums": ["72"]}
];

const studentNumber = document.querySelector(".student-number");
const majorElement = document.querySelector(".major");

studentNumber.addEventListener('change', e => {
    const deptCode = studentNumber.value.slice(5, 7);
    
    for(const major of majors){
        if (major.dept_nums.includes(deptCode)) {
            majorElement.innerHTML = major.name;
            break;
        }
    }
});


const autoHyphen=(target) => {
    target.value = target.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
}