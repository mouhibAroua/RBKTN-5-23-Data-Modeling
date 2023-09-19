// your code goes here
//////////1///////////
function books(Title,Author,Genre,NumberOfPages){
   return {
        Title:Title,
        Author:Author,
        Genre:Genre,
        NumberOfPages:NumberOfPages
    };
}
var book3{Title:"Verity",
         Author:"Colleen",
         Genre:"Suspense",
         NumberOfPages:336}
////////2//////////
var book1={Title:"harry Potter",
          Author:"J.K.Rowling",
          Genre:"fantasy",
          NumberOfPages:223
        };
var book2{Title:"Romeo and Juliet",
        Author:"William",
        Genre:"remance",
        NumberOfPages:200}
////////3//////
function makeBook(Title,Author,Genre,NumberOfPages){
    return {
         Title:Title,
         Author:Author,
         Genre:Genre,
         NumberOfPages:NumberOfPages
     };
 }
var book1=makeBook("harry Potter","J.K.Rowling","fantasy",223);
var book2=makeBook("Romeo and Juliet","William","remance",200);
var book3=makeBook("Verity","Colleen","Suspense",336)
///////4////////
function displayBook(book){
    return book.Title+' '+book.Author
}
//////5/////////
var books=[book1,book2,book3]
//////6///////
function  displaybook(book){
    var arr=[book1,book2,book3]
    
    return arr

}
///////7/////////
