import './App.css';
import Button from './components/Button';

export default function App() {

  let descriptions = ["hello world", "Buy New Product",
    "Tomatoes", "Potatoes"]

  return <div>
    Hello World
    <br>
    </br>
    {descriptions.map((el) => <Button text={el}></Button>)}
  </div>
}
