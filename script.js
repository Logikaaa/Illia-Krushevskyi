let q = document.querySelector('.question')
let ans = document.querySelectorAll('.answear')

function randint(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

let sings = ['+', '-', '*', '/']
function getRandomSing() {
    return sings[randint(0, 3)]
}

class Question {
    constructor() {
        let a = randint(1, 30)
        let b = randint(1, 30)
        let sing = getRandomSing()
        this.question = `${a} ${sing} ${b}`
        if (sing == '+') {this.correct = a + b}
        else if (sing == '-') {this.correct = a - b}
        else if (sing == '*') {this.correct = a * b}
        else if (sing == '/') {this.correct = a / b}
        this.answear = [
            randint(this.correct - 15, this.correct -1),
            randint(this.correct - 15, this.correct -1),
            this.correct,
            randint(this.correct + 1, this.correct +15),
            randint(this.correct + 1, this.correct +15)

        ]
    }
        dispay(){
            q.innerHTML = this.question
            for (let i = 0; i < this.answear.length; i += 1) {
                ans[i].innerHTML = this.answear[i]
            }
        }
    
} 

let new_question
new_question = new Question()
new_question.dispay()