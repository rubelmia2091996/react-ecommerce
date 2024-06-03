import React, { useState } from "react"

const RubelUseState = props =>{
    const[peopleState, setPeopleState] = useState({
        people:[
            {
              name: "John Doe",
              age: 30,
              occupation: "Engineer",
              hobbies: ["reading", "travelling"]
            },
            {
              name: "Jane Smith",
              age: 25,
              occupation: "Designer",
              hobbies: ["drawing", "cycling"]
            },
            {
              name: "Sam Johnson",
              age: 40,
              occupation: "Teacher",
              hobbies: ["writing", "hiking"]
            },
            {
              name: "Alice Brown",
              age: 35,
              occupation: "Doctor",
              hobbies: ["swimming", "photography"]
            }
          ]
    });
    const findAge = (id)=>{
        setPeopleState({
          people:[
            {
              name: "Rubel",
              age: 30,
              occupation: "Engineer",
              hobbies: ["reading", "travelling"]
            },
            {
              name: "Mia",
              age: 25,
              occupation: "Designer",
              hobbies: ["drawing", "cycling"]
            },
            {
              name: "musta",
              age: 40,
              occupation: "Teacher",
              hobbies: ["writing", "hiking"]
            },
            {
              name: "fiz",
              age: 35,
              occupation: "Doctor",
              hobbies: ["swimming", "photography"]
            }
          ]
        })
        alert(peopleState.people[id].age);
      }
      return <div>
        {peopleState.people.map((person, index) => (
          <div key={index}>
            <h2>{person.name}</h2>
            <p>Age: <button onClick={() => findAge(index)}>Find Age</button></p>
            <p>Occupation: {person.occupation}</p>
            <p>Hobbies:</p>
            <ol>
              {person.hobbies.map((hobby, hobbyIndex) => (
                <li key={hobbyIndex}>{hobby}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
}
export default RubelUseState