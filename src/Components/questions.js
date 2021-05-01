import { useState } from "react"
import quiz from '../Data/Quiz'

const Questions = () => {
    const [curQuestion, setCurQuestion] = useState(0)
    const [score, setScore] = useState(0)

    const handleSubmit = () => {
        if(curQuestion < quiz.length) {
            setCurQuestion(curQuestion + 1)
        }
    }
    return (
        <div>
            <div>{quiz[curQuestion].questionText}</div>
            <div>
                <button>{quiz[curQuestion].answers[0].answerText}</button>
                <button>{quiz[curQuestion].answers[1].answerText}</button>
            </div>
            <div>
                {curQuestion < quiz.length - 1 ? <button onClick={handleSubmit}>Submit</button>
                : <button>See Result</button>}
            </div>
        </div>
    )
}

export default Questions