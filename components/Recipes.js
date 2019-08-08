import React from "react"
import {Link} from "react-router-dom"

const Recipes=props=>(
    <div className="container"> 
    <div className="row">
        {props.recipes.map((reci)=>{
        return (
        <div className="col-md-4" style={{marginBottom:"2rem"}}>
        <div className="recipe__box">
            

          <img className="recipe__box-img" src={reci.image_url} alt={reci.title}/>
         <div className="recipe__text">
          <h5 className="recipes__title">
          {reci.title.length < 20 ? `${reci.title}` : `${reci.title.substring(0,25)}...`}</h5>
          <p className="recipes__subtitle">Publisher:<span>{reci.publisher}</span></p>
          </div>
          <button className="recipe__button" type="button" class="btn btn-dark" color="white" style={{marginTop:"2rem"}}>
            <Link to={{pathname:`/recipe/${reci.recipe_id}`,
                       state:{recipe:reci.title } }}>View Recipe</Link>
            </button>
</div>
        </div>
        )
      })}
    </div> 
    </div>
     )
 
export default Recipes