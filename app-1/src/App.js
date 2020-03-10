import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      text: ""
    };
  }

  handleChange(value){
    this.setState({text: value});
  }



  render(){
    return(
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} 
        type="text">
        </input>
        <p>{this.state.text}</p>

      </div>
    );
  }
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
