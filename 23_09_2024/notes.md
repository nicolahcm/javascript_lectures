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


## 2. Conditional Rendering / Условная рендеринг

```
import React from 'react';
import { useState } from 'react';

const Cross = function (props) {
  return <div>
    This is a cross... Personalize your component CROSS X
  </div>
}

const Head = function (props) {
  return <div>
    This is a Head... Personalize your component HEAD O
  </div>
}

export default function App(props) {
  let [crossOrHead, setCrossOrHead] = useState('X');

  let onButtonClicked = function (event) {
    if (crossOrHead === "X") {
      setCrossOrHead('O');
    } else {
      setCrossOrHead("X")
    }
  };

  if (crossOrHead === "O") {
    return (
      <div className='App'>
        HELLO WORLD
        <Head />
        <button onClick={onButtonClicked}>Cross Or Head?</button>
      </div>
    );
  } else {
    return <div className='App'>
      HELLO FUNCTION
      <Cross />
      <button onClick={onButtonClicked}>Cross Or Head?</button>
    </div>
  }
}
```

Based on a state, we can decide what to render. We can render 1 child component or another, for example.

Resources:

1. https://playcode.io/react 
2. 