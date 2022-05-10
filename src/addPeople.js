import './App.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate  } from "react-router";


function AddPeople() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    const addPerson = (e) => {
        e.preventDefault();
        const NEWPERSON = {
            name: name,
            age: age
        }

        fetch('http://localhost:3004/people', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(NEWPERSON),
        })
        .then(()=>{
            navigate("/");
        });
    }

    return (
        <div className="AddPeople">
            <header>
                <Link to="/"><button>See People</button></Link>
                <Link to="/addPeople"><button>Add People</button></Link>
            </header>
            <form onSubmit={addPerson}>
                <input
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)} />
                <input
                    type="number"
                    required
                    onChange={(e) => setAge(e.target.value)} />
                <button>Add person</button>
            </form>

        </div>
    );
}

// {
//     "people": [
//       {
//         "id": 1,
//         "name": "Bob",
//         "age": 21
//       },
//       {
//         "id": 2,
//         "name": "Rob",
//         "age": 25
//       },
//       {
//         "id": 3,
//         "name": "Bobby",
//         "age": 30
//       },
//       {
//         "name": "123",
//         "age": "123",
//         "id": 4
//       },
//       {
//         "name": "123123",
//         "age": "123123123",
//         "id": 5
//       }
//     ]
//   }

export default AddPeople;
