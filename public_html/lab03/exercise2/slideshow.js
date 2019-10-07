// slideshow.js

var picArr = ["Charizard.jpg","snorlax.jpg","heracross.jpg","tyranitar.png","gengar.jpg","espeon.jpg"]
var index = 0;

function showPrev()
{
  if(index == 0)
  {
    index = 5;
  }
  else
  {
    index--;
  }

  document.images[0].src = picArr[index]; //accesses the 0th img tag of the document

}
function showNext()
{
  if(index == 5)
  {
    index = 0;
  }
  else
  {
    index++;

  }

  document.images[0].src=picArr[index]; //accesses the 0th img tag of the document

}
