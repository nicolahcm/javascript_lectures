import React, { useState } from 'react';

const FormCreateCard = ({ bodyCard, setBodyCard, changeView }) => {

  const handleChangeBody = (e) => {
    setBodyCard(e.target.value)
  }

  const handleClickBtnAdd = (e) => {
    e.preventDefault()
    changeView(e)
  }

  return (
    <div className="containerOfNewCardBtn">
      <div className="formWrapper">
        <form >
          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea rows="4" type="text" className="form-control input-group-sm" placeholder="Insert the content of the card" value={bodyCard} onChange={handleChangeBody} />
          </div>

          <div className="buttonsContainerForm">
            <button className="btn btn-primary" onClick={handleClickBtnAdd}>Add</button>
            <button className="btn btn-primary" onClick={changeView}>Back</button>
          </div>

        </form>
      </div>
    </div>
  )
}


const Card = ({ body, changeView }) => {

  return (
    <div className="card text-white bg-primary mb-3 singleCardForArr">
      <div>{body}</div>
      <button className="btn btn-primary" onClick={changeView}>Edit</button>
    </div >
  )

}

function App() {

  const [bodyCard, setBodyCard] = useState("")
  const [cardOrEditForm, setCardOrEditForm] = useState("C")

  setBodyCard("jjj")

  const changeView = (e) => {
    e.preventDefault()
    let newValue = cardOrEditForm == "C" ? "F" : "C"
    console.log(newValue)
    setCardOrEditForm(newValue)
  }

  if (cardOrEditForm == "C") {
    return (
      <div className="App">
        <FormCreateCard setBodyCard={setBodyCard} bodyCard={bodyCard} changeView={changeView} />
      </div>
    );
  } else if (cardOrEditForm == "F") {
    return <div className="App">
      <Card body={bodyCard} changeView={changeView}></Card>
    </div>
  }
}

export default App;
