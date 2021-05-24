function example1(){
   console.log("Clicked");
}

function example2(){
   var divs  = document.getElementsByTagName("div");
   console.log(divs);
   divs[2].innerText = "<b>Hello JavaScript</b>";
   divs[2].innerHTML = "<b>Hello JavaScript</b>";
   divs[2].style.backgroundColor = "yellow";
   divs[2].classList.add("div1");
}

function example3(){
   var ps  = document.getElementsByClassName("p1");
   console.log(ps);
   for(let item of ps){
         item.style.backgroundColor = "pink";
   }
}

function example4(){
   var par1 = document.getElementById("par1");
   console.log(par1);
   par1.innerHTML = "GetElementByID";
   var par2 = document.querySelector("#par2");
   console.log(par2);
   var divs = document.querySelectorAll("div");
   console.log(divs);
   var ps = document.querySelectorAll(".p1");
   console.log(ps);
   var pides = document.querySelectorAll("#par2");
   console.log(pides);
}


function example5(){
   setTimeout(function(){ 
      console.log("Hello")
   }, 2000);
}

i = 0
function example6(){
   var k = setInterval(function(){
      console.log(i);
      i++;
   }, 1000)
}

function example7(){
   // console.log(k);
   clearInterval(k);
}

function example8(){
   var data = document.getElementById("data");
   var result = document.querySelector("#result");
   result.innerHTML = parseInt(data.value) + 9;
}




// m = [
//       [3, 4, 5],
//       [9, 9, 1, 2, 3],
//       [9, 8, 2]
// ]

// n = []

// for (var i=0; i<12; i++){
//    n[i] = [];
//    for(var j=0; j<12; j++){
//       n[i][j] = Math.ceil(Math.random()*99); 
//    }
// }

// console.log(n);