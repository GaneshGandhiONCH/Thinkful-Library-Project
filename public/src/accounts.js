function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) =>
  (nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1));
  
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
const accId = account.id
books.forEach( book => book.borrows.forEach(borrow =>{ if(accId === borrow.id) total++}));
return total;
}

function getBooksPossessedByAccount(account, books, authors) {
const accId = account.id
return books.filter( book => book.borrows.some(borrow => !borrow.returned && borrow.id === accId)).map( book => {
  const author = authors.find( writer => writer.id === book.authorId);
  
return {author, ...book};
})
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
