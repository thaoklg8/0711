fetch("/json/users.json")
  .then(response => response.json())
  .then(
       
       function(data){
        for (let i = 0; i < data.users.length; i++) {
            u = data.users[i];
            if(u.email == localStorage.email)
                 localStorage.userName= u.userName;
        }
      }
  );

if (localStorage.clickcount == 1) {
    window.onload  = function(){
        document.getElementById("sign--register").innerHTML = "";
    document.getElementById("sign--register1").innerHTML = "<span style='color:red; margin-top:11px;margin-left:-15px'>"+localStorage.userName+"</span>";
    document.getElementById("button__signout").innerHTML="Sign out"; 
    document.getElementById("button__signout--submenu").innerHTML="Sign out";
    }
}
function signout(){
    localStorage.clickcount = 0;
}



