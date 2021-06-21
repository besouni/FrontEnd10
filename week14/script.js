console.log($("p"));

function f1(){
   var d1 = $("#d1");
   console.log(d1);
   d1.html("<b>Hello</b>");
   var d2  = $("div");
   console.log(d2);
   console.log(d2[2]);
   d2[2].innerText = "JavaScript";
}

$("#ex2").click(function(){
   console.log($(this));
   $(this).css("background-color", "green");
   $("#d1").toggle(3000);
})

