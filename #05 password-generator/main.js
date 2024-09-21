const passwordLength = document.querySelector(".passwordLength");
const passwordLengthText = document.querySelector(".passwordLengthText");
const password = document.querySelector(".password");
const options = document.querySelectorAll(".passwordSetting input");
const generateButton = document.querySelector(".generateButton a");
const copyClipboard = document.querySelector(".fa-copy");
passwordLengthText.textContent = passwordLength.value


const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!$%&|[]){}:;,*+-#@<>~"
}


let randomPassword = "";
const generatePassword = () => {
    let characterList = "";
    randomPassword = "";
    duplicate = false;
    passLength = passwordLength.value;

    for (let option of options) {
        if (option.checked) {
            if (option.id !== "duplicate" && option.id !== "spaces") {
                characterList += characters[option.id]
            } else if (option.id === "spaces") {
                characterList += `  ${characterList}  `
            } else {
                duplicate = true;
            }
        }
    }

    for (let i = 0; i < passLength; i++) {
        let randomChar = characterList[Math.floor(Math.random() * characterList.length)]

        if (duplicate) {
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--
        } else {
            randomPassword += randomChar

        }
    }
    password.value = randomPassword
}



passwordLength.addEventListener("input", () => {
    passwordLengthText.textContent = passwordLength.value;
    generatePassword();
})

generateButton.addEventListener("click",()=>{
    generatePassword();
})

copyClipboard.addEventListener("click",()=>{
    navigator.clipboard.writeText(password.value);
})