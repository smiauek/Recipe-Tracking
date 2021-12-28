import React from "react";

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
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  ));

  function deleteRecipe(event) {
    const filtRecipes = props.recipes.filter(
      // eslint-disable-next-line eqeqeq
      (item, index) => index != event.target.parentNode.parentNode.id
    );
    props.setRecipes(filtRecipes);
  }

  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

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
