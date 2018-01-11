import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { setVisibleTodos , moveDown , moveUp } from './action'

class App extends Component {
  componentWillMount(){
    this.props.setVisibleTodos(this.props.data)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <ul>
          {this.props.todos.map((i,idx) => 
              <li key={idx} style={{padding:'10px',color:`${i.color}`}}>
               {idx} ) {i.text} 
                <button 
                  onClick={() => this.props.moveDown(idx)}
                >
                  down
                </button>
                <button 
                  onClick={() => this.props.moveUp(idx)}
                >
                  up
                </button>
              </li>
          )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos : state
})

export default connect(
  mapStateToProps,{
    setVisibleTodos,
    moveDown,moveUp
  })(App);
