var a=15;
var b=20;
if (a>b){
    console.log(a+" is grater");
}
else{
    console.log(b+" is grater");
}

var n=19;
if(n%2==0){
    console.log(`the number is even`);
}
else{
    console.log(`the number is odd`);
}
var elage=19;
if (elage<=18){
    console.log("Not allowed to voting");
}
else{
    console.log("allowed to voting");
}
var ag1=13;
var ag2=15;
var ag3=12;
if((ag1>ag2)&(ag1>ag3)){
    console.log(ag1+"is grater");
    if (ag2>ag3){
        console.log(ag2+" is grater");
            }}
    else{
        console.log(ag3+"is grater");
    }



var res=1;
function fact(num){
    
    for(let i=1;i<=num;i++)
    {
        res=res*i;
    }
    return res;
}

let f=fact(6)
console.log(f);

var arr=[10,20,30,50];
for(let i of arr){
    console.log(i);
}
arr.push(50);
console.log(arr);
arr.pop(arr);
console.log(arr);

var arr2=[5,10,4,8,9,12,16];
var total=0;
var arreven=[];
var arrodd=[];
for(let i of arr2){
    total=total=i;
    if (i%2==0){
        arreven.push(i);
        
    }
    else{
        arrodd.push(i);
        
    
        
    }
}
console.log("Total in array is "+total);
console.log(arrodd);
console.log(arreven);

var com=[]
var frtarr=[12,14,15,16,17];
var secarr=[12,13,14,15,16,27];
for(let i of frtarr){
    for(let j of secarr){
        if (i==j){
            com.push(i)
        }
    }
}
console.log(com);

