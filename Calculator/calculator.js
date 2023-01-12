function DeleteMe(){
    document.getElementById("MyResult").value="";

}

function Calculate(NewValue){
    document.getElementById("MyResult").value +=NewValue;

}

function Answer(){
    var a = document.getElementById("MyResult").value;
    var b = eval(a);
    document.getElementById("MyResult").value=b;
}

function Delete(){
    MyResult.value = MyResult.value.slice(0,-1);
}