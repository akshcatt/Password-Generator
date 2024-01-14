let genBtn = document.querySelector(".generate");
let up = document.querySelector("#upCase");
let low = document.querySelector("#lowercase");
let special = document.querySelector("#special");
let num = document.querySelector("#numbers");
let copy = document.querySelector(".copy");
let length = document.querySelector("#len");
let pw = document.querySelector(".password");

const getCap = () => {
    let rand = (Math.floor(150 * Math.random()));
    if (rand >= 65 & rand <= 90) {
        return String.fromCharCode(rand);
    }
    else {
        return getCap();
    }
};

const getLow = () => {
    let rand = (Math.floor(150 * Math.random()));
    if (rand >= 97 & rand <= 122) {
        return String.fromCharCode(rand);
    }
    else {
        return getLow();
    }
};

const getNum = () => {
    let rand = (Math.floor(150 * Math.random()));
    if (rand >= 48 & rand <= 57) {
        return String.fromCharCode(rand);
    }
    else {
        return getNum();
    }
};

const getSpec = () => {
    let rand = (Math.floor(150 * Math.random()));
    if (rand >= 35 & rand <= 38) {
        return String.fromCharCode(rand);
    }
    else {
        return getSpec();
    }
};

let char = [];

up.addEventListener("change", () => {
    if (up.checked) {
        char.push(getCap);
    }
    else {
        char.pop(getCap);
    }
})

low.addEventListener("change", () => {
    if (low.checked) {
        char.push(getLow);
    }
    else {
        char.pop(getLow);
    }
})
num.addEventListener("change", () => {
    if (num.checked) {
        char.push(getNum);
    }
    else {
        char.pop(getNum);
    }
})
special.addEventListener("change", () => {
    if (special.checked) {
        char.push(getSpec);
    }
    else {
        char.pop(getSpec);
    }
})

const getIdx = () => {
    return Math.floor(Math.random() * char.length);
};
genBtn.addEventListener("click", () => {
    let password = "";
    if (length.value < 4 || length.value > 15) {
        length.value = 4;
        alert("Enter atleast 4")
    }
    for (let i = 0; i < length.value; i++) {
        password = password + char[getIdx()]();
    }
    pw.innerHTML = password;
    reset();
})


copy.addEventListener("click", () => {
    const cb = navigator.clipboard;
    cb.writeText(pw.innerHTML).then();
})

const reset = () => {
    length.value = "";
    up.checked = false;
    low.checked = false;
    num.checked = false;
    special.checked = false;
}








