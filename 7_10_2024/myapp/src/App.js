import './App.css';

function Card(props) {

  return <div className='card'>
    {props.name} <h4>Price:
      {props.price} </h4>
    <img className='img' src={props.imgUrl} />
  </div>
}

function Description(props) {
  return <div> This is a Description </div>
}

function App() {
  let cards = [
    {
      "name": "flower",
      "price": 500,
      "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZly4t3rdIz5XDJa4QIVwkNjkIEU3bRJVYbQ&s"
    },
    {
      "name": "computer",
      "price": 5000,
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/640px-Desktop_computer_clipart_-_Yellow_theme.svg.png"
    },
    {
      "name": "duck",
      "price": 2000,
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/800px-Anas_platyrhynchos_male_female_quadrat.jpg"
    }
  ]


  return (
    <div className="App">
      <div id="container">
        {cards.map((card, i) => <Card name={card.name} price={card.price} imgUrl={card.imgUrl} key={i} />)}
      </div>

      <Description />
    </div>
  );
}

export default App;
