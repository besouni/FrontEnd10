// x = 7
// if(x>10){
//    document.write(x*2)
//    document.write(x+2)
// }else{
//    document.write(x*3)
//    document.write(x+3)
// }
// document.write("<hr>")
// for(i=0; i<10; i = i+2){
//    console.log(i)
// }

// console.log(3+"6")
// console.log(parseFloat("3.9")+6)
// console.log("3"+"6")
// console.log("3"-6)
// console.log("3"*6)
// console.log("3"*"6")
// console.log("3"/"6")

// m = [4, 5, "script", 9.8, false]
// console.log(m)
// m1 = [
//    [3, 4, 5, 9],
//    [4, 5],
//    4, 
//    [5, 6, 9, 98],
//    98
// ]
// console.log(m1)

function f1(){
   document.write("<h2>JavaScript</h2>");
}

f1();
f1();
f1();

function f2(name="", lastname=""){
   document.write("<h2>"+name+" "+lastname+"</h2>");
}

f2("Beso")
f2("Beso", "Tabatadze")


function f3(){
   a = 7;
   return a;
}

document.write("<h1>"+f3()*5+"</h1>");

function f4(a, b, c){
   s = a+b+c;
   return s;
   d = 98;
   return d+100;
}

document.write("<h1>"+f4(4, 6, 7)+"</h1>");

o = {
   name:"Giorgi",
   lastname:"mikadze",
   age: 34,
   print:function(){
      document.write("<h1>"+this.name+"</h1>")
   }
}

o.print();

// console.log(o);
// console.log(o.lastname);

// for(i of m1){
//    console.log(i);
// }

// for(i in o){
//    console.log(o[i]);
// }


function task8_4(w){
   tb = "<table border=1 width="+w+" height=200>";
      for(i=0; i<5; i++){
         tb += "<tr>";
            for(j=0; j<5; j++){
               tb += "<td>";
               tb += Math.random();
               tb += "</td>";
            }
         tb += "</tr>";
      }
   tb += "</table>";
   document.write(tb);
}

task8_4();





