// display the number in the text box

function displayNumber(num){
    result.value+=num
}

// clear the text box

function clearBox(){
    result.value=''
}

// evaluate expression

function evaluateExp(){

    // method 1

    // exp=result.value
    // output=eval(exp)
    // result.value=output

    // method 2

    result.value=eval(result.value)

}

function removelastitem(){
    result.value=result.value.slice(0,-1)
}