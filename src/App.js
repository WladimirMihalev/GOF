import React from 'react';
import logo from './logo.svg';
import './App.css';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
  
// установка схемы
const userScheme = new Schema({
    name: String,
    age: Number
});
  
// подключение
mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true });
  
const User = mongoose.model("User", userScheme);
const user = new User({
    name: "Bill",
    age: 41
});
  
user.save(function(err){
    mongoose.disconnect();  // отключение от базы данных
      
    if(err) return console.log(err);
    console.log("Сохранен объект", user);
});



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
