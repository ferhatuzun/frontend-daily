function Questions(question,options,answer){
    this.question=question;
    this.options=options;
    this.answer=answer;
}

Questions.prototype.checkAnswer= function(answer){
    return this.answer==answer;
}

