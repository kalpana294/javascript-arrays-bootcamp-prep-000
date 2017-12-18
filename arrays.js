var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var add = "Almond Joy"
function addElementToBeginningOfArray(chocolateBars,add){
  return [add, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars,add){
  return chocolateBars.unshift(add)
}