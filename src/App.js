import './App.css';
import React, {useState} from 'react';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';

function App() {
  const questions = [
    {
      id: 1,
      question: 'How long do deliveries usually take?',
      answer: ''
    },
    {
      id: 2,
      question: 'Where can I check the tracking information of my order?',
      answer: ''
    },
    {
      id: 3,
      question: "Why has my order's delivery date been changed?",
      answer: ''
    },
    {
      id: 4,
      question: 'What are the shipping costs of deliveries?',
      answer: ''
    },
    {
      id: 5,
      question: 'Can I return my order after I recieve it?',
      answer: ''
    },
    {
      id: 6,
      question: 'Can I use gift cards to pay for the expense of an order?',
      answer: ''
    },
    {
      id: 7,
      question: 'How do I become a seller?',
      answer: ''
    }
  ];
  const answers = [
    'Delivery times depend on where the order is being delivered from, the size of the delivery, and the destination of the delivery, making it hard to determine exactly how long the delivery will take. However, we provide expected arrival times in the description of your order, as well as tracking information.',
    'The tracking information for any orders is located in the details section on any order in the orders menu.',
    'Unfortunately, sometimes delivery scheduling can be inaccurate, and accidents may happen during shipping, leading to unexpected setbacks in the delivery process.',
    'Often times, shipping costs will be around 10% of the cost of the item or less.',
    'In the event you find your order unsatisfactory, you may return it within 30 days of its arrival, but it must be in good condition (little use, little to no damage).',
    'You may use any gift card you own to pay for part, if not all of the costs of the order.',
    'If you have a product you would like to sell in our store, you may go to the "Become a Seller" section in the details menu, where you can register to become a seller, if your product meets the terms and conditions agreement.'
  ];
  const [QAndAs, setQAndAs] = useState(questions);
  const toggle = (id) => {
    var {question} = questions[id - 1];
    var answer = answers[id - 1];
    setQAndAs(
      QAndAs.map(qAndA => qAndA = (qAndA.id !== id) ? qAndA : (qAndA.answer === '') ? {id, question, answer} : {id, question, answer: ''})
    )
  }
  return (
    <div className="App">
        <h1 className='title'>Questions And<br/> Answers<br/> About Our<br/> Delivery</h1>
        <div className='questions'>
          {
            QAndAs.map((qAndA) => {
              return <div className='question' key={qAndA.id}>
                <div>
                  <h2>{qAndA.question}</h2>
                  <h1 onClick={() => toggle(qAndA.id)}>{(qAndA.answer !== '') ? <AiFillMinusSquare/> : <AiFillPlusSquare/>}</h1>
                </div>
                <p>{(qAndA.answer)}</p>
              </div>
            })
          }
        </div>
    </div>
  );
}

export default App;
