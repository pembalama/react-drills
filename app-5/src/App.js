import React from 'react';
import logo from './logo.svg';
import './App.css';

import Image from "./component/Image";


class App extends React.Component{

  render(){
    return(
        <div className="App">
            <Image url={"https://http.cat/409"} />
        </div>
    );
  }
}
export default App;

