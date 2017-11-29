
function Ingredient(id, quantity, name, prep) {
  this.id = id;
  this.quantity = quantity;
  this.name = name;
  this.prep = prep;
}

var ingredients;
var numAdds = 0;

function init() {
  ingDiv = document.getElementById("new_ingredients");
  ingDiv.innerHTML = "Ingredients";

  myForm = document.createElement("form");
  myForm.setAttribute("method", "GET");

  quantity = document.createElement("input");
  quantity.setAttribute("id", "ingQuantity");
  quantity.setAttribute("name", "quantity");
  quantity.setAttribute("type", "text");
  iName = document.createElement("input");
  iName.setAttribute("id", "ingName");
  iName.setAttribute("name", "ingredient");
  iName.setAttribute("type", "text");
  prep = document.createElement("input");
  prep.setAttribute("id", "ingPrep");
  prep.setAttribute("name", "prep");
  prep.setAttribute("type", "text");

  ingList = document.createElement("ul");
  ingList.setAttribute("id", "ingredientList");
  myForm.appendChild(ingList);

  myForm.innerHTML += "Quantity: ";
  myForm.appendChild(quantity);
  myForm.innerHTML += " Ingredient: ";
  myForm.appendChild(iName);
  myForm.innerHTML += " Prep: ";
  myForm.appendChild(prep);

  button = document.createElement("input");
  button.setAttribute("type", "button");
  button.setAttribute("name", "submit");
  button.setAttribute("value", "Add");
  button.setAttribute("onclick", "addIngredient(this.form)");
  myForm.appendChild(button);

  ingDiv.appendChild(myForm);

  ingredients = new Array();
}

function addIngredient(form) {
  numAdds++;
  var ing = new Ingredient(numAdds, form.quantity.value, form.ingredient.value, form.prep.value);
  ingredients.push(ing);
  ingList = document.getElementById("ingredientList");
  newIngItem = document.createElement("li");
  newIngItem.setAttribute("class", "ingItem");
  newIngItem.setAttribute("id", "ing_" + numAdds);
  if (ing.quantity != "") {
    newIngItem.innerHTML = ing.quantity + " " + ing.name;
  } else {
    newIngItem.innerHTML = ing.name;
  }
  if (ing.prep != "") {
    newIngItem.innerHTML += ", " + ing.prep;
  }
  newIngItem.innerHTML += " ";
  // add a remove button
  removeButton = document.createElement("input");
  removeButton.setAttribute("type", "button");
  removeButton.setAttribute("id", "ingDelete_" + numAdds);
  removeButton.setAttribute("onclick", "removeIngredient(event)");
  removeButton.setAttribute("value", "Remove");
  newIngItem.appendChild(removeButton);

  ingList.appendChild(newIngItem);
  // reset ingredient form elements
  document.getElementById("ingQuantity").value = "";
  document.getElementById("ingName").value = "";
  document.getElementById("ingPrep").value = "";

  console.log(ingredients);
}

function removeIngredient(event) {
  ingID = parseInt(event.target.id.substr(10));
  for (var i = 0; i < ingredients.length; i++) {
    if (ingredients[i].id == ingID) {
      ingredients.splice(i, 1);
      ingElement = document.getElementById("ing_" + ingID);
      ingElement.parentNode.removeChild(ingElement);
      break;
    }
  }
  console.log(ingredients);
}

window.onload = init
