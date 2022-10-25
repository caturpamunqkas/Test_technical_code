import React, { Component } from "react";

import './App.css';
import axios from "axios";

const baseURL = "http://localhost:3300";

class App extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    // const inputValue = useState('');

    // function handleChange(event) {
    //   console.log(event.target.value);
    // }

    function genSegitiga() {
      axios
        .post(baseURL+"/gen-segitiga", {
          value: '123456' 
        })
        .then((response) => {
          console.log(response.data)
        });
    }

    return (
      <div className="App">
          <input type="text"/><br />
          <button onClick={genSegitiga}>Generate Segitiga</button>
          <button>Generate Bilangan Ganjil</button>
          <button>Generate Bilangan Prima</button>
          <p>Result :</p>
      </div>
    );
  }
}

export default App;
