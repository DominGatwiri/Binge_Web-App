
            var x = document.getElementById("login");
            var y = document.getElementById("register");
            var z = document.getElementById("btn");
            var b= document.getElementById("my__form");
            var c= document.getElementById("getstarted");
            var d = document.getElementById("my__bmi");
            var e = document.getElementById("next");
            var f = document.getElementById("my__data");
            var g = document.getElementById("results");
       
       
            function register(){
                x.style.left ="-400px";
                y.style.left ="50px";
                z.style.left = "110px";
            }
            function login(){
                x.style.left ="50px";
                y.style.left ="450px";
                z.style.left = "0px";
            }
//To display the log-in form
function getstarted(){
    d.style.display ="block";   
}
// Close Log in page and open BMI
//function Continue(){
  //  b.style.display ="none";
   // d.style.display ="block";

// close BMI form and open data form  ***
function next(){
   d.style.display ="none";
   f.style.display ="block";
}
function predict(){
    f.style.display ="none";
    g.style.display ="block";
}
//Go to results
function forward(){
    d.style.display ="none";
    f.style.display ="block";
 }


 function predict(){
   document.getElementById("results-page");
 }
 //Close calories and open mood

 //BMI Calculator
 function BMI() {
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));

    document.getElementById("result").innerHTML="Your BMI is " + bmio;
}