// import React, { useState } from 'react';

// const FormCreateCard = (props) => {
//   return (
//     <div>
//       <form>
//         <label className="form-label">Content</label>
//         <textarea rows="7" type="text" className="form-control input-group-sm" placeholder="Insert the content of the card" />
//         <button>Add</button>
//         <button onClick={props.helloWorld}>Back</button>
//       </form>
//     </div>
//   )
// }

// const Card = (props) => {
//   return <div>
//     This is a card
//     <button onClick={props.helloWorld}>Back</button>
//   </div>
// }

// function App() {
//   const [cardOrForm, setCardOrForm] = useState("F")
//   const helloWorld = (e) => {
//     e.preventDefault()
//     console.log("Hello World")
//     let newValue = cardOrForm == "C" ? "F" : "C"
//     setCardOrForm(newValue)
//   }

//   if (cardOrForm == "F") {
//     return (<div className="App">
//       <FormCreateCard helloWorld={helloWorld} />
//     </div>
//     )
//   } else {
//     return (<div className="App">
//       <Card helloWorld={helloWorld}></Card>
//     </div>)
//   }
// }

// export default App;
