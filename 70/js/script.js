// (function () {
//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }
//
//     Question.prototype.displayQuestion = function () {
//         console.log(this.question);
//         for (let i = 0; i < this.answers.length; i++) {
//             console.log(i + ':' + this.answers[i]);
//         }
//     };
//
//     Question.prototype.checkAnswer = function (answer) {
//         if (answer === this.correct) {
//             console.log('correct answer');
//         } else {
//             console.log('wrong');
//         }
//     };
// })();
//
// var q1 = new Question('is js cool?', ['yes', 'no'], 0);
// var q2 = new Question('what is your name', ['john', 'mark', 'mike'], 0);
// var q3 = new Question('what is your age', ['20', '21', '22'], 0);
//
// var questions = [q1, q2, q3];
// var n = Math.floor(Math.random() * questions.length);
// questions[n].displayQuestion();
// var answer = parseInt(prompt('select a answer'));
// questions[n].checkAnswer(answer);

(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + ':' + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function (answer) {
        if (answer === this.correct) {
            console.log('correct answer');
        } else {
            console.log('wrong');
        }
    };
})();
