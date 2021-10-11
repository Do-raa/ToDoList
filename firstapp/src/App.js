
import CardList from './components/CardList'; 
import React ,{useState} from 'react';
import './App.css';  
import Form from './components/Form'


const App = () => {
  const [cards, setCards] = useState([])

 const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  return (
    <div>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}
export default App;
