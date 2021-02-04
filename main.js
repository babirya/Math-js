function ma(){ 

    var a = parseInt(document.getElementById("in1").value) ; 
    var b = parseInt(document.getElementById("in2").value) ;  
    var res= parseInt(a+b); 
    var res1= parseInt(a-b);
    var res2= parseInt(a*b); 
    if(b!==0)
    {
       var res3= parseInt(a/b); 
    }else{
        var res3="cannot  devise on Zero";
    }
    
    var af= document.getElementById("a"); 
    var af1= document.getElementById("b"); 
    var af2= document.getElementById("c"); 
    var af3= document.getElementById("d"); 

  
    af.innerHTML+=res;
    af1.innerHTML+=res1;
    af2.innerHTML+=res2;
    af3.innerHTML+=res3; 
    
    //
    var max=document.getElementById("max");
    var min=document.getElementById("min");
if(a>b)
{
   
    max.innerHTML+=a;
    min.innerHTML+=b;
}else{
    max.innerHTML+=b;
    min.innerHTML+=a;
} 
 
// other 
var tan =Math.tan(a);
var taan =document.getElementById("tan");
taan.innerHTML+=tan; 

var tan1 =Math.tan(b);
var taan1 =document.getElementById("tan1");
taan1.innerHTML+=tan1; 
 

// sin 
var sin =Math.sin(a);
var siin =document.getElementById("sin");
siin.innerHTML+=sin; 

var sin1 =Math.sin(b);
var siin1 =document.getElementById("sin1");
siin1.innerHTML+=sin1; 
// cos 
var cos =Math.cos(a);
var coos =document.getElementById("cos");
coos.innerHTML+=cos; 

var cos1 =Math.cos(b);
var coos1 =document.getElementById("cos1");
coos1.innerHTML+=cos1; 

// random 
} 

function red (){
    var a = parseInt(document.getElementById("in1").value) ; 
    var b = parseInt(document.getElementById("in2").value) 
    var some=a+b;  
    var sou=a-b;
    if(some==3)
    {
        var d1=document.getElementById("d1");
        document.body.style.backgroundColor="red";
    } 
    if(sou==5)
    {
        var d1=document.getElementById("d1");
        document.body.style.color="red";
    }

}  


function aff() {

    var dd=document.getElementById("d1");
    dd.style.display="block";
} 

function hide() {

    var dd=document.getElementById("d1");
    dd.style.display="none";
}
