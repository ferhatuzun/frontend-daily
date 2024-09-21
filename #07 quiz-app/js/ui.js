function Ui() {
    this.btnPlay = document.querySelector(".btnPlay");
    this.questionTime = document.querySelector(".questionTime");
    this.questionContent = document.querySelector(".question");
    this.options = document.querySelectorAll(".option");
    this.optionA = document.querySelector(".optionA");
    this.optionB = document.querySelector(".optionB");
    this.optionC = document.querySelector(".optionC");
    this.optionD = document.querySelector(".optionD");
    this.btnNext = document.querySelector(".btnNext");
    this.startScreen = document.querySelector("#startScreen");
    this.quizScreen = document.querySelector("#quizScreen");
    this.questionLength = document.querySelector(".questionLength");
    this.endScreen = document.querySelector("#endScreen");
    this.scoreInfo = document.querySelector(".scoreInfo");
    this.btnRestart = document.querySelector(".btnRestart");
    this.timer = document.querySelector(".timer");
}