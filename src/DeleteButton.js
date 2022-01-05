import React from "react";

function DeleteButton(props) {
  function deleteRecipe(event) {
    const filtRecipes = props.recipes.filter(
      // eslint-disable-next-line eqeqeq
      (item, index) => index != event.target.parentNode.parentNode.id
    );
    props.setRecipes(filtRecipes);
  }

  return (
    <button name="delete" onClick={deleteRecipe}>
      Delete
    </button>
  );
}

export default DeleteButton;
