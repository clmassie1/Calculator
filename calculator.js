console.log('hello');

let button1 = document.getElementById("add");
button1.addEventListener("click", addingNumbers);

let button2 = document.getElementById("multiply");
button2.addEventListener("click", multiplyNumbers);

let button3 = document.getElementById("subtract");
button3.addEventListener("click", subtractNumbers);

let button4 = document.getElementById("divide");
button4.addEventListener("click", divideNumbers);

let button5 = document.getElementById("step");
button5.addEventListener("click", stepNumbers);


function addingNumbers(){
    console.log('addingNumbers:', addingNumbers);
    let inputArea = parseInt(document.getElementById("inputArea").value);
    console.log('inputArea:', inputArea);
    
    let inputArea2 = parseInt(document.getElementById("inputArea2").value);
    console.log('inputArea:', inputArea2);

    let answer = document.getElementById("answer")
    

    answer.value = inputArea + inputArea2;

}

function multiplyNumbers(){
    console.log('multiplyNumbers:', multiplyNumbers);
    let inputArea = parseInt(document.getElementById("inputArea").value);
    console.log('inputArea:', inputArea);
    
    let inputArea2 = parseInt(document.getElementById("inputArea2").value);
    console.log('inputArea:', inputArea2);

    let answer = document.getElementById("answer")
    

    answer.value = inputArea * inputArea2;

}

function subtractNumbers(){
    console.log('subtractNumbers:', subtractNumbers);
    let inputArea = parseInt(document.getElementById("inputArea").value);
    console.log('inputArea:', inputArea);
    
    let inputArea2 = parseInt(document.getElementById("inputArea2").value);
    console.log('inputArea:', inputArea2);

    let answer = document.getElementById("answer")
    

    answer.value = inputArea - inputArea2;

}
function divideNumbers(){
    console.log('divideNumbers:', divideNumbers);
    let inputArea = parseInt(document.getElementById("inputArea").value);
    console.log('inputArea:', inputArea);
    
    let inputArea2 = parseInt(document.getElementById("inputArea2").value);
    console.log('inputArea:', inputArea2);

    let answer = document.getElementById("answer")
    

    answer.value = inputArea / inputArea2;

}


function stepNumbers(){
    console.log('',stepNumbers);
    
    function divideNumbers(){
        console.log('divideNumbers:', divideNumbers);
    let inputArea = parseInt(document.getElementById("inputArea").value);
    console.log('inputArea:', inputArea);
    
    let inputArea2 = parseInt(document.getElementById("inputArea2").value);
    console.log('inputArea:', inputArea2);

    let answer = document.getElementById("answer")
    

    answer.value = inputArea / inputArea2;


    function subtractNumbers(){
        console.log('',);
        
    console.log('subtractNumbers:', subtractNumbers);
    let inputArea = parseInt(document.getElementById("inputArea").value);
    console.log('inputArea:', inputArea);
    
    let inputArea2 = parseInt(document.getElementById("inputArea2").value);
    console.log('inputArea:', inputArea2);

    let answer = document.getElementById("answer")
    

    answer.value = inputArea - inputArea2;

}
    }

    
    
}




