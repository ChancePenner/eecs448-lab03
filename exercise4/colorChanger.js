// colorChanger.js

var redBorder = 0;
var greenBorder = 0;
var blueBorder = 0;
var width = 0;

var redBackground = 0;
var greenBackground = 0;
var blueBackground = 0;

var paragraph = "";

//Access the tag:
function myFunc()
{

  redBorder = document.getElementById("redBorder"); //gets the red border value
  greenBorder = document.getElementById("greenBorder"); //gets the green border value
  blueBorder = document.getElementById("blueBorder"); //gets the blue border value
  width = document.getElementById("width"); //gets the width

  redBackground = document.getElementById("redBackground"); //gets the red value
  greenBackground = document.getElementById("greenBackground"); //gets the green value
  blueBackground = document.getElementById("blueBackground"); //gets the blue value
  width = document.getElementById("width"); //gets the width

  document.body.style.borderStyle = "solid";  //initialize the border to be a solid line

  //Change the style attribute
  // redValue.borderColor:rgb(redValue,0,0): /* red */
  //
  // greenValue.borderColor:rgb(0,greenValue,0): /* green */
  //
  // blueValue.borderColor:rgb(0,0,blueValue): /* blue */

  document.body.style.borderWidth = width.value;  //set the border width to the user's input

  document.body.style.borderColor = 'rgb(' + [redBorder.value,greenBorder.value,blueBorder.value].join(',') + ')';
  //this sets the red, green, and blue values, taking in 0-255 for each

  document.body.style.backgroundColor = 'rgb(' + [redBackground.value,greenBackground.value,blueBackground.value].join(',') + ')';

}
