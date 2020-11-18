import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const abul = ["Shakib Abul", "Bappi Mofiz"]; //alternative way Array
  // const student = [
  //   {name: "Gelabi Alam", job: "CSE"},
  //   {name: "Tahsan Faisal", job: "CSE"},
  //   {name: "Samiul Alam", job: "CSE"}
  // ];
  const tablet = ["hello", "mia", "jia", "kia", "tia"];
  const friends = [
    {name: "Gelabi Alam", job: "CSE"},
    {name: "Tahsan Faisal", job: "CSE"},
    {name: "Samiul Alam", job: "CSE"}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Learner</p>
        <ul> 
          {
            tablet.map(friend => <li>{friend}</li>)
            //friends.map(friend => <li>{friend.name}</li>)
          }
        </ul>

        <ul>
          {
            friends.map(p => <Friends frnd = {p}></Friends>)
          }
        </ul>
        
        <Counter></Counter>
        <Users></Users>

        {/* <a>
          {
            student.map(p => <Student stu = {p}></Student>)
          }
        </a>
        {/* <Student stu = {student[0]}></Student>
        <Student stu = {student[1]}></Student>
        <Student stu = {student[2]}></Student> */}
      </header>
    </div>
  );
}

// function Person(props){

//   const personStyle = {
//     border: "2px solid red",
//     margin: "10px",
//     padding: "10px"

//   }
//   return(
//     /*<div style= {{border: "2px solid red", margin: "10px", padding: "10px"}}>*/
//     <div style={personStyle}>
//       <h2>Hello, Person {props.name} Food: {props.food}</h2>
//       <p>I am a Component</p>
//     </div>
//   );
// }

// function Student(props){ // this is a Component

//     //Style Added
//     const personStyle = {  
//     border: "2px solid red",
//     margin: "10px",
//     width: "300px",
//     padding: "10px"
//     }

//   const {name, job} = props.stu; //Object Destructuring
//   return(
//     <div style={personStyle}>
//       <h2>Name: {name}</h2>
//       <p>Job: {job}</p>
//       <button type="submit">Okay</button>
//     </div>
//   );
// }


//Create Multiple Components from an array of objects

function Friends(props){

      //Style Added
    const personStyle = {  
    border: "2px solid red",
    margin: "10px",
    width: "300px",
    padding: "10px"
    }

    const {name, job} = props.frnd;

  return(
    <div style = {personStyle}>
      <h2>Hello Friends :)</h2>
      <h3>Name: {name}</h3>
      <h3>Job: {job}</h3>
    </div>
  );
}

//componet state
function Counter(){

  const personStyle = {  
    border: "2px solid yellow",
    margin: "10px",
    width: "300px",
    padding: "10px",
    marginLeft: "50px",
    textAlign: "center"
    }
  
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
      //const newCount = count + 1;
      setCount(count + 1);
    };
  return(

    <div style = {personStyle}>

      <p>This is a State Example</p>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
} 

//set and Update State and Set Event handler

function Users(){

  const personStyle = {  
    border: "2px solid aqua",
    margin: "10px",
    width: "300px",
    padding: "10px",
    marginLeft: "50px",
    textAlign: "center"
    }

    const[users, setUsers] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    }, [])

  return(
    <div style = {personStyle}>
      <h2>Dynamic Users: {users.length}</h2>
      <ul>
        {
          users.map(p => <li>{p.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;