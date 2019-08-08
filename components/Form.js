import React from 'react'
const Form = props =>( //whatever gets passed on the getrecipe method gets stored on the props args
<form onSubmit={props.getRecipe} style={{marginBottom:"2rem"}}>
    <input className="form__input" type="text" name="recipeName"/>
    <button className="form__button" >Search</button>
</form>
)

export default Form