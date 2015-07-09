var tbox, greutate, inaltime, varsta, gideal, inamic, imc;

function check() {



   if(document.getElementById("masc").checked)
{
 tbox = "masculin";

 var greutate =  document.getElementById("greu").value;
  var inaltime =  document.getElementById("inalt").value;
 var varsta = document.getElementById("vrs").value;
var inamic = document.getElementById("inalt").value/100;
 var gideal= (inaltime-100-((inaltime-150)/4))+((varsta-20)/4);
 var imc = greutate/(inamic*inamic);
 // confirm("Greutatea ideala: " + gideal+"kg; \n"+"IMC: "+imc+".");
document.getElementById("demo").innerHTML = gideal;
document.getElementById("demo2").innerHTML = imc;

} else if(document.getElementById("fem").checked)
{
	
 tbox = "feminin";
  

   var greutate =  document.getElementById("greu").value;
  var inaltime =  document.getElementById("inalt").value;
 var varsta = document.getElementById("vrs").value;
var inamic = document.getElementById("inalt").value/100;
 var gideal= (inaltime-100-((inaltime-150)/2.5))+((varsta-20)/6);
  var imc = greutate/(inamic*inamic);
  document.getElementById("demo").innerHTML = gideal;
document.getElementById("demo2").innerHTML = imc;
}

 


}