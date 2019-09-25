function get_num1() {
    let _num = parseInt(document.getElementById("idNum1").value);
    return _num;
}
function get_num2() {
    let _num = parseInt(document.getElementById("idNum2").value);
    return _num;
}
function get_id() {

}
function displayResult(result) {
    document.getElementById("idResult").innerHTML ="Result:" + result;
}
/*
function caculator() {
    let num1 = get_num1();
    let num2 = get_num2();
    let result;
    let _addition = document.getElementById("idAddition");
    let _sutraction = document.getElementById("idSubtraction");
    let _mutiplication = document.getElementById("idMutiplication");
    let _division = document.getElementById("idDivision");
    }
*/


function addition() {
    //let _num1 = parseInt(document.getElementById("idNum1").value);
    //let _num2 =parseInt(document.getElementById("idNum2").value);
    let _num1 = get_num1();
    let _num2 = get_num2();
    let _result = _num1 + _num2;
    document.getElementById("idResult").innerHTML ="Result:" + _result;
}
function subtraction() {
 /* let _num1 = parseInt(document.getElementById("idNum1").value);
    let _num2 =parseInt(document.getElementById("idNum2").value);
 */
    let _num1 = get_num1();
    let _num2 = get_num2();
    let _result = _num1 - _num2;
    document.getElementById("idResult").innerHTML ="Result:" + _result;
}
function mutiplication() {
    /*let _num1 = parseInt(document.getElementById("idNum1").value);
    let _num2 =parseInt(document.getElementById("idNum2").value);
    */
    let _num1 = get_num1();
    let _num2 = get_num2();
    let _result = _num1 * _num2;
    document.getElementById("idResult").innerHTML ="Result:" + _result;
}
function divition() {
    /*let _num1 = parseInt(document.getElementById("idNum1").value);
    let _num2 =parseInt(document.getElementById("idNum2").value);
    */
    let _num1 = get_num1();
    let _num2 = get_num2();
    let _result = _num1 / _num2;
    document.getElementById("idResult").innerHTML ="Result:" + _result;
}