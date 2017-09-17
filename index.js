var katzDeli = []

function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return (`Welcome, ${name}. You are number ` + katzDeli.length + ` in line.`)
}

function nowServing(){
  if (katzDeli.length  ==[]){
    return "There is nobody waiting to be served!"
  } else {
    return katzDeli.shift()
  }
}

function currentLine(){
var lineDescription = ""
if (katzDeli == []){
  return "The line is currently empty."
} else {
  for (var i = 0; i < katzDeli.length; i++){
    lineDescription += (i)+1 + ". "+ katzDeli[i] + ","
  }

}
return "The line is currently: " + lineDescription
}
