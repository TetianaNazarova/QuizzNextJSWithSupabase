import { useQuiz } from "../services/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  console.log("11 questions", questions);
  console.log("11 index", index);
  const question = questions.at(index);

  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
