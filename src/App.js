import './App.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function App() {
  const [people, setPeople] = useState();
  useEffect(()=> {
    getData();
  },[])

  const getData = () => {
    fetch('http://localhost:3004/people')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setPeople(data);
    })
  }

  const deletePerson = (id) => {
    fetch('http://localhost:3004/people/' + id, {
      method: 'DELETE'
    }).then(()=>{
      getData();
    })
  }

  return (
    <div className="App">
      <header>
      <Link to="/"><button>See People</button></Link>
      <Link to="/addPeople"><button>Add People</button></Link>
      </header>
    
       {people && people.map(person =>
       <div key={person.id}>
         Name: {person.name}, Age: {person.age} <span onClick={()=>deletePerson(person.id)}>❌</span>
       </div>
      )}
    </div>
  );
}

export default App;
