import React from "react";
import DeleteButton from "./DeleteButton";

function RecipeList(props) {
  const rows = props.recipes.map((recipe, index) => (
    <tr key={index} id={index}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img className="scale_down" src={recipe.photo} alt="" />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <DeleteButton recipes={props.recipes} setRecipes={props.setRecipes} />
      </td>
    </tr>
  ));

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
