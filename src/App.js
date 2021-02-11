import React from 'react';
import './App.css';
import Button from './Button.js';
import Card from 'react-bootstrap/Card';
import List from './List.js';

class App extends React.Component{
  constructor(props){
  super(props);
  this.nameInput = React.createRef(); 
  this.state = {
    userText:' ',
    inputText:' ',
    list: [],        
    }
  }
  changedText =(e) =>{
    this.setState({userText:e.target.value})
  }
 
 btnClick =(e) => {
   console.log('clicked')
   e.preventDefault();
    this.setState({inputText: this.state.userText ,list: [
        {
          name: this.state.userText,
        }, ...this.state.list], 
         userText:" "
        });
        console.log((this.state.list.name),this.state.list)
 }

btnClear =() =>{
  console.log('clearing')
    this.setState({userText:' ', inputText:' ', list:[]})
}

close =() =>{
  
}
  render(){
    return (
      <div className="middle">
          <Card>
            <h1>Create a To-Do</h1>
            <input ref={this.nameInput} type="text" value={this.state.userText} onChange={this.changedText}/><br/>
            <Button onClick={this.btnClick} onClear={this.btnClear}/>
          </Card>
            <br/>
            <br/>
            <div className="liststyle">
          <List list={this.state.list}  onClick={()=>{this.btnClear(); this.close();}}/>
          </div>
         
      </div>
    )};
  
}


export default App;
