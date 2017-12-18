var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
//var add = "Almond Joy"
function addElementToBeginningOfArray(chocolateBars,value){
  return [value, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars,value){
  return chocolateBars.unshift(add)
}