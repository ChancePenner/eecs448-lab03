// passwordValidator.js

function myFunc()
{
  var password1 = (document.getElementById("password1")).value;
  var password2 = (document.getElementById("password2")).value;

  if(password1 != password2)
  {
    alert("Your passwords are not the same!");
  }
  else
  {
    if(password1.length < 8 || password2.length < 8)
    {
      alert("Password must be 8 characters long!");
    }
    else
    {
      alert("Login successful!");
    }
  }
}
