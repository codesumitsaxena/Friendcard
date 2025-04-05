var remove = document.querySelector(".Remove");
var Addfriend = document.querySelector(".Addfriend");
var heading = document.querySelector(".heading");
var name = document.querySelector(".account-name");

var flag = 0;


Addfriend.addEventListener("click",function(){
  if(flag == 0 ){
    heading.innerHTML = "Friends"
    Addfriend.innerHTML = "remove"
     Addfriend.style.backgroundColor = "red"
    flag = 1

  }
  else{
    heading.innerHTML = "Stranger"
     Addfriend.innerHTML = "Add Friend"
     Addfriend.style.backgroundColor = "green"
    flag = 0
  }

})