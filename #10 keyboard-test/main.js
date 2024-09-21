let startBtn = document.querySelector(".btnStart");
let finishBtn = document.querySelector(".btnFinish");
let textContent = document.querySelector(".textContent");
let restartBtn = document.querySelector(".btnRestart");
let userText = document.querySelector(".userText");
let time = document.querySelector(".time");
let mistakes = document.querySelector(".mistakes");
let accuracy = document.querySelector(".accuracy");
let result = document.querySelector("#result");

const typingList = [
    "Şiirlerini küçük yaşlardan itibaren yazdı. Şinasi’yle tanışıncaya değin, şiirlerinde tasavvuf etkileri görülür. Bu dönemde özellikle Yenişehirli Avni, Leskofçalı Galib gibi şairlerden etkilendi.",
    "Giderek Neriman Şinasi’den soğumaya başladı. Neriman oturduğu mevki olan Fatih’I, sevmemektedir. Çünkü Fatih, doğuyu, gelişmemişliği ve eskiyi temsil ediyordu.",
    "Neriman’la Şinasi çocukluk arkadaşlarıdır. Tanıdıkları ilk karşıt cins birbirleridir. İlk başta ikisi de birbirlerini seviyorlardı. Okula beraber gidip geliyorlardı. Üniversite de bile beraberdiler.",
    "Neriman’ın babası Faiz Bey’dir ve Şinasi’yi de çok sevmektedir. Bazı geceler Faiz Bey’in evinde saz çalarlar ve sohbet ederlerdi. Herkese bir gün Şinasi ile Neriman’ın evleneceğini düşünüyordu.",
    "Sonunda, gence dönmeye karar verir ve aramaya başlar. Büyük uğraşlar sonucu bulur ama genç kabul etmez. Kız bunun verdiği üzüntü ile evine gider ve tabanca ile kendini öldürür."
];

let mistakesCount = 0;

let load = () => {
    let random = Math.floor(Math.random() * typingList.length);
    let span = typingList[random].split("").map((letter) => `<span class='chars'>${letter}</span>`)
    textContent.innerHTML = span.join("")
}
load();

let second = 59;
let timer;
startBtn.addEventListener("click", () => {
    userText.disabled = false;
    startBtn.style.display = "none";
    finishBtn.style.display = "block"
    timer = setInterval(() => {

        if (second >= 0) {
            time.textContent = second.toString() + "s"
            --second
        } else {
            clearInterval()
            finishBtn.click()
            calculateResult();
        }
    }, 1000);

})

finishBtn.addEventListener("click", () => {
    clearInterval(timer);
    calculateResult();
    calculateMistakes();
    userText.disabled = "true";
    result.classList.add("fadeIn");
    finishBtn.style.display = "none";
    restartBtn.style.display = "block";
})

restartBtn.addEventListener("click",()=>{
    location.reload()
})

userText.addEventListener("input", async (e) => {
    let chars = document.querySelectorAll(".chars")
    let userChars = userText.value.split("")

    if (chars.length == userChars.length) {
        finishBtn.click();
    }
    chars.forEach((char, index) => {
        if (char.textContent == userChars[index]) {
            char.classList.remove("danger")
            char.classList.add("success")
        } else if (userChars[index] != null) {
            char.classList.remove("success")
            char.classList.add("danger")
        } else {
            char.classList.remove("success")
            char.classList.remove("danger")

        }
    })

    if (e.key == "Backspace") calculateMistakes();
    calculateMistakes();
})

function calculateMistakes() {
    mistakesCount = 0
    let danger = document.querySelectorAll(".danger");
    for (let mistake of danger) {
        mistakesCount += 1;
        mistakes.textContent = mistakesCount
    }
    mistakes.textContent = mistakesCount

}

function calculateResult() {
    let chars = document.querySelectorAll(".chars")
    let userChars = userText.value.split("")
    let dogrular = 0;
    let charsCount = 0;
    chars.forEach((char, index) => {
        charsCount += 1;
        if (char.textContent == userChars[index]) {
            dogrular += 1;
        }
    })

    accuracy.textContent = ((dogrular / charsCount) * 100).toFixed(2) + "%"
    console.log(dogrular + " " + charsCount)

}

