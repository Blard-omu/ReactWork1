import React from 'react';
 import {useState} from 'react';

const Example = () => {
let [text, setText] = useState('Random Title');
let [age, setAge] = useState(100)
//more example
let [person, setPerson] = useState({
  Name: 'Blard',
  Age: 21,
  Message: 'web developer'
}
)
// function changePerson(){
//   setPerson({...person, Name: 'Eggy', Age: 50, Message: 'Trainer'})
// }

function resetPerson(){
  if(person.Name === 'Blard'){
    setPerson({...person, Name: 'Eggy', Age: 50, Message: 'Trainer'})
  }else{
    setPerson({...person, Name: 'Blard', Age: 21, Message: 'Tech guy'})
  }

}


function ageChanger(){
  if (age === 100) {
      setAge(150)  
  }else{
    setAge(100)
  }
  }


function hold(){
  if (text === 'Random Title'){
    setText('Random City')
  }else{
    setText('Random Title')
  }
}



  return (
    <div className='example'>
      <h2>useState Basics</h2>
      <h2>{text}</h2>
      <button onClick={hold}>Click to change Title</button>
      
      <div>
        <h2>{age}</h2>
        <button onClick={ageChanger}>Click to change age</button>
      </div>

<h2>{person.Name}</h2>
<h2>{person['Age']}</h2>
<h1>{person.Message}</h1>
<button onClick={resetPerson}>Click to change person</button>

    </div>
  )
}

export default Example

//Hookes in react e.g usestate/ 
