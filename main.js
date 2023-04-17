//Javascript inputs

// Outputs
let output3 = document.getElementById("output3").value
let output = document.getElementById("output").value
let output2 = document.getElementById("output2").value
let output4 = document.getElementById("output4").value
let question1 = document.getElementById("question1").value;
// Find out whether answers are correct or not
document.getElementById("btn").addEventListener("click",btnclicked)

function btnclicked(){
    let question1 = document.getElementById("question1").value;

    if(question1 == "the king") {
        document.getElementById("output").innerHTML = "Correct!"
    } else if(question1 == "king"){
      document.getElementById("output").innerHTML = "Correct!"
    } else {
      document.getElementById("output").innerHTML = "Incorrect, try again"
    }
}

document.getElementById("btn2").addEventListener("click",btn2clicked)

function btn2clicked() {
     let question2 = document.getElementById("question2").value;

     if( question2 == "the queen") {
        document.getElementById("output2").innerHTML = "Correct!"
     } else if( question2 == "queen"){
      document.getElementById("output2").innerHTML = "Correct!"
     }
     else {
        document.getElementById("output2").innerHTML = "Incorrect, try again"
     }

}

document.getElementById("btn3").addEventListener("click",btn3clicked)

function btn3clicked() {
     let question3 = document.getElementById("question 3").value;

     if( question3 === "8") {
        document.getElementById("output3").innerHTML = "Correct!"
     } else {
        document.getElementById("output3").innerHTML = "Incorrect, try again"
     }

}

document.getElementById("btn4").addEventListener("click",btn4clicked)

function btn4clicked() {
     let question4 = document.getElementById("question4").value;

     if( question4 == "checkmate") {
        document.getElementById("output4").innerHTML = "Correct!"
     } else {
        document.getElementById("output4").innerHTML = "Incorrect, try again"
     }

}
//View Your Score

document.getElementById("btn5").addEventListener("click",btn5clicked)
function btn5clicked() {
   //Inputs
   let question1 = document.getElementById("question1").value;
   let question3 = document.getElementById("question 3").value;
   let question4 = document.getElementById("question4").value;
   let question2 = document.getElementById("question2").value;
   let output = document.getElementById("output").value;
   let output2 = document.getElementById("output2").value;
  if(question1 == "the king" && question2 == "the queen" && question3 === "8" && question4 == "checkmate") {
    document.getElementById("output5").innerHTML = "100%, 4/4, Excellent!" ;
  }else if( question1 == "king" && question2 == "the queen" && question3 === "8" && question4 == "checkmate") {
   document.getElementById("output5").innerHTML = "100%, 4/4, Excellent!" ;}
    else if(question1 == "the king"  && question2 == "the queen" && question3 === "8" ) {
   document.getElementById("output5").innerHTML = "75%, 3/4, almost there!"
  }else if(question1 == "king"  && question2 == "the queen" && question3 === "8" ){
   document.getElementById("output5").innerHTML = "75%, 3/4, almost there!"
  } else if(question1 == "the king"  && question2 == "the queen"  && question4 == "checkmate"){
   document.getElementById("output5").innerHTML = "75%, 3/4, almost there!"
  } else if (question1 == "king"  && question2 == "the queen"  && question4 == "checkmate"){
   document.getElementById("output5").innerHTML = "75%, 3/4, almost there!"
}else if(question1 == "king"   && question3 === "8" && question4 == "checkmate"){
   document.getElementById("output5").innerHTML = "75%, 3/4, almost there!"
  } else if( question2 == "the queen" && question3 === "8" && question4 == "checkmate"){
   document.getElementById("output5").innerHTML = "75%, 3/4"
  } else if( question1 == "king" && question3 === "8" && question4 == "checkmate"){
   document.getElementById("output5").innerHTML = "75%, 3/4, almost there!"}
   else if (question1 == "the king"  && question2 == "the queen"){
   document.getElementById("output5").innerHTML = "50%, 2/4, better luck next time"
  } else if( question3 === "8" && question4 == "checkmate"){
   document.getElementById("output5").innerHTML = "50%, 2/4, better luck next time"
  }else if (question1 == "king"  && question2 == "the queen"){
   document.getElementById("output5").innerHTML = "50%, 2/4, better luck next time"}
    else if(question1 == "the king"  && question4 == "checkmate"){
   document.getElementById("output5").innerHTML = "50%, 2/4, better luck next time"
  } else if(question1 == "king"  && question4 == "checkmate"){
   document.getElementById("output5").innerHTML = "50%, 2/4, better luck next time"
  } else if( question2 == "the queen"  && question4 == "checkmate"){
   document.getElementById("output5").innerHTML = "50%, 2/4, better luck next time"
  } else if ( question2 == "the queen" && question3 === "8") {
   document.getElementById("output5").innerHTML = "50%, 2/4, better luck next time"
  } else if(question1 == "the king"  && question3 === "8" ){
   document.getElementById("output5").innerHTML = "50%, 2/4, better luck next time"
  } else if(question1 == "king"  && question3 === "8" ){
   document.getElementById("output5").innerHTML = "50%, 2/4, better luck next time"
  }else if(question1 == "the king" ){
   document.getElementById("output5").innerHTML = "25%, 1/4, better luck next time"
  } else if(question1 == "king" ){
   document.getElementById("output5").innerHTML = "25%, 1/4, better luck next time"
  }else if(question2 == "the queen"){
   document.getElementById("output5").innerHTML = "25%, 1/4, better luck next time"
}  else if(question3 === "8"){
   document.getElementById("output5").innerHTML = "25%, 1/4, better luck next time"
} else if(question4 == "checkmate"){
   document.getElementById("output5").innerHTML = "25%, 1/4, better luck next time"
} else {
   document.getElementById("output5").innerHTML = "0%, 0/4, try again"
}

}
