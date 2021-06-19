function f1(){
   document.cookie = "userName=btuG10";
}

function f1_1(){
   var d = new Date();
   console.log(d);
   console.log(d.getTime());
   d.setTime(d.getTime()+60*1000);
   console.log(d);
   var expires = "expires="+d;
   document.cookie = "user3=btuG10_3;"+expires+";path=/";
}

function f2(){
   console.log(document.cookie);
}

function f3(){
   localStorage.setItem("user1", "giorgi1");
}

function f4(){
   console.log(localStorage.getItem("user1"));
}

function f5(){
   localStorage.removeItem("user1");
}