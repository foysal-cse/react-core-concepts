import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Learner</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  
  const personStyle = {
    border: "2px solid red",
    margin: "10px",
    padding: "10px"

  }

  return(
    /*<div style= {{border: "2px solid red", margin: "10px", padding: "10px"}}>*/
    <div style={personStyle}>
      <h2>Hello, Person</h2>
      <p>I am a Component</p>
    </div>
  );
}

export default App;
