player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="questionturn-"+player1_name;
document.getElementById("player_answer").innerHTML="answerturn-"+player2_name;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    question_word="<h4 >q."+number1+"x"+number2+"</h4>";
    input_box="<br>answer:<input type='text' id='input_check_box'>";
    button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question_word+input_box+button;
    document.getElementById("output").innerHTML=row
    document.getElementById("number1").value=""
    document.getElementById("number2").value=""
}