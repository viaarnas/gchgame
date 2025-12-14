username = document.getElementById("userid");
    username.addEventListener("input", function(){
      username.value = username.value.replace(/[\s\W_]/g,"");
    });