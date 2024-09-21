let ui = new Ui();
let questionList = [
    new Questions("Hangisi back-end programlama dilidir ?", ["javascript", "react", "next js", "node js"], "node js"),
    new Questions("Hangisi front-end programlama dilidir ?", ["javascript", "c#", "c++", "node js"], "javascript"),
    new Questions("Hangisi css yazmayı kolaylaştırmak için kullanılır ?", ["javascript", "react", "scss", "node js"], "scss"),
    new Questions("Hangisi mobil programlama dilidir ?", ["flutter", "react", "next js", "node js"], "flutter"),
]
let counter;
let counterLine;
let quiz = new Quiz(questionList);
ui.btnPlay.addEventListener("click", () => {
    ui.startScreen.style.display = "none";
    ui.quizScreen.style.display = "flex";
    startTimer(10);
    startTimerLine(1)
})



let loadElement = (question) => {
    ui.questionLength.textContent = ` ${quiz.questionIndex + 1}/${questionList.length}`

    ui.questionContent.textContent = question.question
    ui.optionA.textContent = question.options[0]
    ui.optionB.textContent = question.options[1]
    ui.optionC.textContent = question.options[2]
    ui.optionD.textContent = question.options[3]

    for (let opt of ui.options) {
        opt.addEventListener("click", selectAnswer)
    }
}

function selectAnswer(e) {
    if (quiz.getQuestion().checkAnswer(e.target.textContent)) {
        quiz.score += 1;
        e.target.classList.add("success")
        disabledBtn()
        ui.btnNext.style.display = "block"
        clearInterval(counter)
        clearInterval(counterLine)
    } else {
        e.target.classList.add("danger")
        disabledBtn()
        clearInterval(counter)
        clearInterval(counterLine)
        ui.btnNext.style.display = "block"
    }
}

loadElement(quiz.getQuestion())
function disabledBtn() {
    for (let opt of ui.options) {
        opt.disabled = true

    }
}
function activeBtn() {
    for (let opt of ui.options) {
        opt.disabled = false
        opt.classList.remove("success")
        opt.classList.remove("danger")
    }
}
ui.btnNext.addEventListener("click", () => {
    if (quiz.questionIndex < quiz.questionList.length - 1) {
        ui.btnNext.style.display = "none"
        quiz.questionIndex += 1;
        loadElement(quiz.getQuestion());
        activeBtn();
        startTimer(10);
        startTimerLine(1)
    } else {
        ui.quizScreen.style.display = "none";
        ui.endScreen.style.display = "flex";
        ui.timer.style.width = "0%"
        ui.scoreInfo.textContent = `${questionList.length} sorudan ${quiz.score} soru bildiniz.`
    }

})

ui.btnRestart.addEventListener("click", () => {
    quiz.questionIndex = 0;
    location.reload()
})


function startTimerLine(time) {
    counterLine = setInterval(timer, 100)

    function timer() {
        if (time > 100) {
            clearInterval(counterLine)
        }
        time++
        ui.timer.style.width = time + "%"
    }
}
function startTimer(time) {
    counter = setInterval(timer, 1000)
    ui.questionTime.textContent = time

    function timer() {
        time--
        if (time >=0) {
            ui.questionTime.textContent = time
        }
        if (time <= 0) {
            clearInterval(counter)
            ui.btnNext.style.display = "block"
            for (let btn of ui.options){
                if(quiz.getQuestion().checkAnswer(btn.textContent)){
                    btn.classList.add("success");
                }
            }
            disabledBtn();

        }


    }
}