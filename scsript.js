function buttonclick(buttonvalue){
    document.getElementById("screen").value+=buttonvalue
}

function clearscreen(){
    document.getElementById("screen").value=""
}

function equalto(){
    var inp=document.getElementById("screen").value
    var result=eval(inp)
    document.getElementById("screen").value=result
}

function rootfn(){
    var i=document.getElementById('screen').value
    exp=parseInt(i)
    var result=Math.sqrt(exp)
    document.getElementById("screen").value=result
}