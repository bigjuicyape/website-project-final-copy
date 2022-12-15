// 


let score = 0


// document.getElementById("complete quiz").click = btn4()



let answer = document.getElementById("a3").innerHTML;

function btn4() {
var ans1 = document.getElementById("q1").value
if (ans1 == "308 negra arroyo lane, albuquerque, new mexico, 87104" || ans1 =="308 negra arroyo lane" || ans1 =="308 negra arroyo Lane, albuquerque, new mexico," || ans1 =="negra arroyo Lane, albuquerque" || ans1 =="negra arroyo lane" ||ans1 =="albuquerque"|| ans1 =="albuquerque, new mexico"){
    score++;
}
var ans2 = document.getElementById("q2").value;
if (ans2 == "minerals"|| ans2 == "mineral collecting"){
    score++;

}
var ans3 = document.getElementById("q3").value;
if (ans3 == "lawyer"){
    score++;

}
var ans4 = document.getElementById("q4").value;
if (ans4 == "ehrmantraut"){
    score++;

}
document.getElementById("a3").innerHTML = `${score}/4`;
if (score == 4)
{
    document.getElementById("a3").innerHTML = `${score}/4, welldone`;
}}
