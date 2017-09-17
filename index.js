var katzDeli = []

function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return (`Welcome, ${name}. You are number ` + katzDeli.length + ` in line.`)
}

function nowServing(){
  if (katzDeliLine.length  ==[]){
    return "There is nobody waiting to be served!"
  } else {
    return katzDeliLine.shift()
  }
}

function currentLine(){
var lineDescription = ""
if (katzDeliLine == []){
  return "The line is currently empty."
} else {
  for (var i = 0; i < katzDeliLine.length; i++){
    lineDescription += (i)+1 + ". "+ katzDeliLine[i] + ","
  }

}
return "The line is currently: " + lineDescription
}
