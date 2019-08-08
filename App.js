import React, {Component} from 'react';
import Form from './components/Form'
import Recipes from './components/Recipes'
import './App.css';

const API_KEY="8b78b122621dc8bf337e1032cc93a283"




class App extends Component{

  state={
    recipes:[]
  }
 getRecipe =async(e)=>{
   const recipeName=e.target.elements.recipeName.value
   e.preventDefault(); //prevents default behaviour of the page ..prevents full page refresh
   const api_call=await fetch(`https://cors-anywhere.herokuapp.com/http://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=16`)
   const data=await api_call.json()
   this.setState({recipes: data.recipes})
console.log(this.state.recipes)
 } 

render()
{
  return ( 
    <div className="App">
      <header className="App-header">
       <h1 className="App-title">Recipe Search</h1>
      </header>
      
      <Form getRecipe={this.getRecipe}/>
      <Recipes recipes={this.state.recipes }/>
    </div>
  )
}
  }
export default App;
