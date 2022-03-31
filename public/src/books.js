function findAuthorById(authors, id) {
  return authors.find((result) => result.id === id);
}

function findBookById(books, id) {
  return books.find((result) => result.id === id);
}

function partitionBooksByBorrowedStatus(books) {
let result= [[],[]];
books.forEach(book => {
  if(book.borrows[0].returned){
    result[1].push(book)
  }
  else{
    result[0].push(book)
  }
});
return result;
}

function getBorrowersForBook(book, accounts) {
  const borrowedBooks = accounts.filter(account => {
    const borrow = book.borrows.find(borrow => borrow.id === account.id);
    if(borrow){
      account.returned = borrow.returned;
      return true;
    } 
    else{
      return false;
    }
  })
  return borrowedBooks.slice(0,10);

  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
