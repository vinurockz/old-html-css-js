// function printNum(){
//  let num=document.querySelector("#txt").value
//  alert(num)
// }

function printNum(){
    let age=document.querySelector("#txt").value
    var html_content="";
    if(age>=18){
        html_content="elgible"
    }
    else{
        html_content="Not elgible"
    }
    document.querySelector(".result").innerHTML=`<h1>${html_content}</h1>`
   }