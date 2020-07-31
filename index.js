const recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value)  {
    recipes = {prop: 1};
    var newobj = Object.assign({}, recipes, {prop2: 2});
    return obj;
   }
   
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes = {prop: 1};
  recipes.prop2 = 2;
  return recipes;
}

function deleteFromObjectByKey(object, key){
  var recipes = {prop: 2}
  var newObj = Object.assign({}, recipes)
  delete newObj.prop
  return newObject;
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes = {prop: 1};
  delete recipes.prop;
  return recipes;
}




/*const recipes = function(){
  var obj = {};
  return obj;
};


function updateObjectWithKeyAndValue(recipes, key, value)  {
    recipes = {prop: 1};
    obj.assign(recipes, prop2, 2);
    return obj;
   }
   
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  
  recipes.prop2 = 2;
  return recipes;
}*/







