import React from 'react'
import Person from './components/Person'
import Header from './components/Header'
import List from './components/List'
import Button from './components/Button'
function App() {
  return (
   
    <>
    

  <Person name={"Sujoy Maji"} age={21} />
    <hr />
  <br />
  <Header title={"The Curious Incident of the Dog in the Night-Time"}   />
  <hr />
  <br />
<List   items={"Mango"}    />
<List   items={"Apple"}    />
<List   items={"Guava"}    />
<List   items={"Grapes"}    />
<Button text={"WELCOME"} onClick={"handleClick"}/>
    </>
  )
}

export default App
