var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
//var add = "Almond Joy"
function addElementToBeginningOfArray(chocolateBars,value){
  return [value, ...chocolateBars]
}

var cities = ['New York']
function destructivelyAddElementToBeginningOfArray(cities,value){
  cities.unshift(value);
  return cities
}
var endArray=["1"]
function addElementToEndOfArray(endArray,value){
  
  return [...endArray,value ]
}
function destructiveAddElementToEndOFArray(endArray,value){
  endArray.push(value)
  return endArray
}
function accessElementInArray()