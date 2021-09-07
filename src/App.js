import './App.css';
import React, {useState} from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';

function App() {
  const data = [
    {
      id: 1,
      question: 'Why?',
      answer: 'yes'
    },
    {
      id: 2,
      question: 'Wh?',
      answer: 'ys'
    }
  ];
  const [QAndAs, setQAndAs] = useState(data);
  const toggle = (id) => {
    var {question, answer} = data[id - 1]
    setQAndAs(
      QAndAs.map(qAndA => qAndA = (qAndA.id !== id) ? qAndA : (qAndA.answer === '') ? {id, question, answer} : {id, question, answer: ''})
    )
  }
  return (
    <div className="App">
        <h1 className='title'>Questions And Answers</h1>
        <div>
          {
            QAndAs.map((qAndA, index) => {
              return <div className='question' key={qAndA.id}>
                <div>
                  <h2>{qAndA.question}</h2>
                  <h1 onClick={() => toggle(qAndA.id)}><AiFillPlusCircle/></h1>
                </div>
                <p>{qAndA.answer}</p>
              </div>
            })
          }
        </div>
    </div>
  );
}

export default App;
