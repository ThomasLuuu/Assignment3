import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Link, Route,Switch} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import User from "./components/user";
import Admin from "./components/admin";
import Loginpage from "./components/loginpage";
export default class App extends React.Component{
  render(){
  return (
    <Admin/>
                               
  );
}
}

