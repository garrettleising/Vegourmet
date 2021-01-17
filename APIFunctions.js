import { getBonApiToken, getFoodRepoToken } from "./APIKeys.js";
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(theUrl, token) {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.responseType = "json";
  xmlHttp.open("GET", theUrl, false); //opens get req
  xmlHttp.setRequestHeader("Authorization", token); //adds token
  xmlHttp.send(null); //send
  return xmlHttp.responseText; //returns response raw
}

function formatToken(token) {
  return "Token " + token; //tokens for both work this way.
}

//FOOD REPO

function getFoodRepoURL(ids) {
  return (
    "https://www.foodrepo.org/api/v3/products?excludes=images%2Cnutrients&barcodes=" +
    ids
  ); //ids are joined by a comma
}

function foodRepoRequest(ids, token) {
  let key = formatToken(token);
  let url = getFoodRepoURL(ids.join("%2C")); //%2C is a comma i guess?
  return httpGet(url, key);
}

function foodRepoParseName(request) {
  let i;
  let names = [];
  for (i = 0; i < request["data"].length; i++) {
    names.push(request["data"][i]["name_translations"]["en"]); //take english names only
  }
  return names;
}

//BONAPI

function getBonApiURL(foods, conditions, diet) {
  let joiner = "";
  let conditions_f = "";
  let diet_f = "";
  //empty if both condition and diet are false
  if (conditions) {
    joiner = "/?";
    conditions_f = "allergies=" + conditions;
    if (diet) {
      diet_f = "&diet=" + diet; //ampersand if both are present
    }
  } else {
    if (diet) {
      joiner = "/?";
      diet_f = "diet=" + diet;
    }
  }
  return (
    "https://bon-api.com/api/v1/ingredient/alternatives/" +
    foods +
    joiner +
    conditions_f +
    diet_f
  );
}

function bonApiRequest(foods, allergies, diet, token) {
  let key = formatToken(token);
  let url = getBonApiURL(foods.join(","), allergies.join(","), diet);
  return httpGet(url, key);
}

function bonAPIParseIngredients(request) {
  return [
    request["response"]["matched_ingredients"],
    request["response"]["updated_ingredients"],
  ];
}

function main(barcodes, allergies, diet) {
  let token = getFoodRepoToken;
  let foodnames = foodRepoParseName(
    JSON.parse(foodRepoRequest(barcodes, token))
  );
  let foods = foodnames.join(",").split(" ").join("_").split(",");
  //gotta clean the data or rig it...
  foods = ["eggs", "bread", "milk"]; //delete

  token = getBonApiToken;
  let ingredients = bonAPIParseIngredients(
    JSON.parse(bonApiRequest(foods, allergies, diet, token))
  );

  return [foods, ingredients[0], ingredients[1]];
}

//////////////////////EVERYTHING BELOW HERE IS JUST TO RUN MAIN.
//fetching names from ids (in app only use one at a time)
var ids = ["0099482434366", "0646670317873", "0184706000042"];

//fetching replacements given params
var foodnames = ["eggs", "bread", "milk"];
var diet_enum = ["meateater", "pescetarian", "vegetarian", "vegan"];
var allergies_enum = [
  "mollusc_allergy",
  "mustard_allergy",
  "sesame_allergy",
  "gluten_allergy",
  "lactose_intolerance",
  "soy_allergy",
  "egg_allergy",
  "fish_allergy",
  "celergy_allergy",
  "crustacean_allergy",
  "peanut_allergy",
  "tree_nut_allergy",
  "wheat_allergy",
  "lupin_allergy",
  "milk_allergy",
];
var diet = diet_enum[1];
var allergies = ["gluten_allergy", "egg_allergy", "mustard_allergy"];

var a = main(ids, allergies, diet);
console.log(a);
