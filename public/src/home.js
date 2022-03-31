function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  books.forEach(book => book.borrows.forEach( borrow => {if(borrow.returned === false) count++}));
 return count;
}
_getTop5 = input =>{
return input.sort((sortA, sortB) => sortB.count -sortA.count).slice(0,5);
}

function getMostCommonGenres(books) {
  let commonGenres = [];
  const nameGenre = books.reduce((acc, book) =>{
    if(acc[book.genre]){
    acc[book.genre] += 1;
  }
  else{
    acc[book.genre] = 1;
  }
  return acc;
},{})
 for(let key in nameGenre){
   commonGenres.push({
     name:key, 
     count:nameGenre[key]
   })
 }
  return _getTop5(commonGenres);
}

function getMostPopularBooks(books) {
  let result =[];
  for( let items in books){
    const book = books[items];
    const borrow = book.borrows;
    const object = {name:book.title, count:borrow.length}
    result.push(object);
  }
  return _getTop5(result)
}

function getMostPopularAuthors(books, authors) {
let result = [];
authors.forEach((author) => {
  let count = 0;
  books.forEach((book)=>{
    if(author.id === book.authorId){
     count += book.borrows.length;
    }
  })
  result.push({
    name: `${author.name.first} ${author.name.last}`,
    count: count,
  })
})
return _getTop5(result);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
