import React, { useState } from "react";

function RecipeCreate(props) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setRecipes([...props.recipes, formData]);
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                placeholder="Name"
                style={{ width: "100%" }}
                onChange={handleChange}
                value={formData.name}
                required
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                style={{ width: "100%" }}
                onChange={handleChange}
                value={formData.cuisine}
                required
              />
            </td>
            <td>
              <input
                name="photo"
                type="url"
                placeholder="URL"
                style={{ width: "100%" }}
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                style={{ width: "100%" }}
                onChange={handleChange}
                value={formData.ingredients}
                required
              />
            </td>
            <td>
              <textarea
                name="preparation"
                type="text"
                placeholder="Preparation"
                style={{ width: "100%" }}
                onChange={handleChange}
                value={formData.preparation}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
