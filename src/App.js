import React, { Component } from 'react';
import './App.css';
import User from './user';
import Home from './Home';
import About from './About';
import {BrowserRouter as Router,NavLink,Redirect,Switch,Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route'; 

class App extends Component {
  state ={
  loggedin:false
  }
  loginHandle=()=>{
    this.setState(prevState=>({loggedin:!prevState.loggedin}))
    
  }
 
  render() {
    return (
      <Router>
      <div className="App">
      <ul>
      <li>
      <NavLink to="/home" exact activeStyle={{color:'red'}}>Home</NavLink>
      </li>
      <li>
      <NavLink to="/about" exact activeStyle={{color:'red'}}>About</NavLink>
      </li>
      <li>
      <NavLink to="/user/james" exact activeStyle={{color:'red'}}>User</NavLink>
      </li>
      <li>
      <NavLink to="/user/peter" exact activeStyle={{color:'red'}}>User</NavLink>
      </li>
      </ul>
      <Prompt
      when={!this.state.loggedin}
      message="Are you sure?" 
      ></Prompt>
      <input type="button" value={this.state.loggedin ?'Log Out':'Log In'} onClick={this.loginHandle}/>
      <Switch>
      <Route path="/home" exact strict  
        render={()=>(this.state.loggedin ? (<Home/>)
        :(<Redirect to="/"/>))}
        />
         <Route path="/about" exact strict render={()=>(this.state.loggedin ? (<About/>)
        :(<Redirect to="/"/>))}
          
        />
        <Route path="/user/:username" exact strict 
        
        render={({match})=>(this.state.loggedin ? (<User username={match.params.username}/>)
        :(<Redirect to="/"/>))}

        />
        </Switch>
      </div>
      </Router>
      
    ); 
  }
}

export default App;
