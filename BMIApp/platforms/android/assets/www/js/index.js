function calculate(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight/(height*height);
    var message = "";

    if (isNaN(weight) || isNaN(height) || weight =="" || height =="") {
        message = "Please, you must enter only numbers.";
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementById("result").innerHTML = message;
        return;
    }


    switch(true) {
        case (bmi<18.5):
            message = "BMI = " + bmi.toFixed(2) + "<br>Weight Status: Underweight<br>You should eat a little bit more.";
            break;
        case (bmi>=18.4 && bmi<24.9):
            message = "BMI = " + bmi.toFixed(2) + "<br>Weight Status: Normal<br>Keep doing what you are doing.";
            break;
        case (bmi>=24.5 && bmi<29.9):
            message = "BMI = " + bmi.toFixed(2) + "<br>Weight Status: Overweight<br>You should cut down on your food a little bit.";
            break;
        default:
            message = "BMI = " + bmi.toFixed(2) + "<br>Weight Status: Obese<br>You should really do something about your appetite ASAP.";
            break;                                                
    }
    document.getElementById("result").innerHTML = message;
    
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("BMI: " + bmi.toFixed(2)));
    ul.appendChild(li);
    document.getElementById("history").style.visibility = "visible";

    //setInterval(function(){ document.getElementById("result").style.visibility = "hidden"; }, 10000);    
}

function clearHistory() {
    document.getElementById("list").innerHTML = "";
    document.getElementById("history").style.visibility = "hidden";
}

document.getElementById("history").style.visibility = "hidden";
