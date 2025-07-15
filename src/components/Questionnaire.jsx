import { Row, Container, Col, Spinner, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import Summary from "./Summary";

export default function Questionnaire() {
    const [step, setStep] = useState(0);
    const [responses, setResponses] = useState([]);
  
    const handleAnswer = (question, answer) => {
      setResponses([...responses, { question, answer }]);
      setStep(step + 1);
    };

    
  
    const currentQuestion = () => {
      const lastAnswer = responses[responses.length - 1]?.answer;
  
      switch (step) {
        case 0:
          return {
            question: "Do you want to do something inside or outside?",
            options: ["Inside", "Outside"],
          };
        case 1:
          if (responses[0].answer === "Outside") {
            return {
              question: "What season are you in?",
              options: ["Spring", "Summer", "Fall", "Winter"],
            };
          } else {
            // Skip to companionship question
            setStep(step => step + 2);
            return null;
          }
        case 2:
          if (["Spring", "Summer", "Fall"].includes(lastAnswer)) {
            return {
              question: "Is it raining?",
              options: ["Yes", "No"],
            };
          } else if (lastAnswer === "Winter") {
            return {
              question: "Is it snowing?",
              options: ["Yes", "No"],
            };
          } else {
            return {
              question: "Are you alone or with friends?",
              options: ["Alone", "With Friends"],
            };
          }
        case 3:
          return {
            question: "Are you alone or with friends?",
            options: ["Alone", "With Friends"],
          };
        case 4:
          if (responses[responses.length - 1].answer === "With Friends") {
            return {
              question: "How many friends are you with?",
              options: ["1", "2", "3", "4", "5+"],
            };
          } else {
            return null;
          }
        default:
          return null;
      }
    };
  
    const questionData = currentQuestion();
  
    return (
      <Container>
        <h1 className="text-2xl font-bold mb-4">Questionnaire</h1>
        {questionData ? (
          <div className="mb-4">
            <p className="text-lg mb-2">{questionData.question}</p>
            <div className="space-x-2">
              {questionData.options.map((opt) => (
                <Button key={opt} onClick={() => handleAnswer(questionData.question, opt)} >
                  {opt}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <Summary responses={responses} />
        )}
      </Container>
    );
}