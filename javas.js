let buffer="0";
let runningTotal="0";
let previousOperator;
let screen=document.querySelector(".screen");

function buttonClick(value){
    if (isNaN(parseInt(value))){
        handleSym(value);
    }else{
        handlenNum(value);
    }
    rerender();
}

inIt();
function inIt(){
    document
    .querySelector(".calc-buttons")
    .addEventListener("click",function(event){
        buttonClick(event.target.innerText);
    })

}

function handleSym(symbol){

    switch (symbol){
        case "C":
            buffer="0";
            runningTotal=0
            break;
        
        case "=":
            if (previousOperator === null) {
                // need two numbers to do math
                return;
              }
              flushOperation(parseInt(buffer));
              previousOperator = null;
              buffer = +runningTotal;
              runningTotal = 0;
            break;

             case "<-":
           buffer=parseInt(buffer/10);
            break;

        case "-":
        case "+":
        case "/":
        case "*":
           handleMath(symbol);
           break;
         
        } 
    }

    function handleMath(symbol){ 
       
         if(buffer==='0'){
            return;
         }
         const intBuffer= parseInt(buffer);
         if(runningTotal===0){
            runningTotal=intBuffer;
        }else{
             flushOperation(intBuffer);
        }
        console.log(runningTotal)
        buffer='0'
        previousOperator=symbol;
        
        
    }

    function flushOperation(intBuffer){
        if(previousOperator==='*'){
            runningTotal*=intBuffer;
        }
        else if(previousOperator==='/'){
            runningTotal/=intBuffer;
        }
       else if(previousOperator==='+'){
            runningTotal+=intBuffer;
        }
        else if(previousOperator==='-'){
            runningTotal-=intBuffer;
        }
       
    }

    

function handlenNum(number){
    if(buffer==="0"){
        buffer=number;
    }else{
        buffer = buffer + number;
    }
   
}

function rerender(){
    screen.innerText=buffer;
}


