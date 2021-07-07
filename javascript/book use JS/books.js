function display(books){
    let html_data=""
    html_data=`<tr>
    <td>${books.bname}</td>
    <td>${books.bid}</td>
    <td>${books.author}</td>
    <td>${books.price}</td>
    </tr>`
    document.querySelector(".result").innerHTML=html_data
}
function update(){
    let bname=document.querySelector(".bkname").value
    let bid=document.querySelector(".id").value
    let author=document.querySelector(".athr").value
    let price=document.querySelector(".prz").value
    let books={
        bname:bname,
        bid:bid,
        author:author,
        price:price
    }
    display(books)
}