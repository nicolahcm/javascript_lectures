# Очень главные вещи в React


## 1. Reusbility / Повторимаесть 

когда у нас есть какой то шаблон кода который хотели бы повторить, но поменять какие то внутренные данные (динамичекие данные)

----------------
```
import React from 'react';

function Button(props) {
  return <div> 
    <button> {props.text} </button>
  </div>
}

  // textsInButtons.map((el,i) => <Button text={el} key={i}/>) 
  // ====
  // [ <Button text={"Heellookkkkk"} key={1}/>,
  //   <Button text={900000000000} key={2}/>,
  //   <Button text={"НЕТТТ"} key={3}/>,
  //   <Button text={"WORLD"} key={4}/> ]

export function App(props) {
  let textsInButtons = ["Heellookkkkk", 900000000000, "НЕТТТ", "WORLD"]

  return (
    <div className='App'>
      {textsInButtons.map((el,i) => <Button text={el} key={i}/>)}
    </div>
  );
}
```
---------------------
Задача: делайте то же самое, но с какими то картами как Avito, Ozon, etc.. 




Resources:

1. https://playcode.io/react 
2. 