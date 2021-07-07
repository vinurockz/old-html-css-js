var books={
    harrypotter:{name:"harrypotter",author:"john haldin",price:300},
    godzila:{name:"godzila",author:"Mathew poul",price:500},
    twlight:{name:"twlight",author:"rose merry",price:200}
}
function printBook(){
    let book_name=document.querySelector("#wrd").value
    var html_content="";
    if(book_name in books){
        let bookname=books[book_name].name
        let author=books[book_name].author
        let price=books[book_name].price
        html_content=`<tr>
        <td>${bookname}</td>
        <td>${author}</td>
        <td>${price}</td>
        </tr>`

    }
    else{
        html_content="cannot find"
    }
    document.querySelector(".result").innerHTML=html_content
}