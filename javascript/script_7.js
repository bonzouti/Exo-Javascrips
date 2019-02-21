const books = [{
    title: 'Gatsby le magnifique',
    id: 133712,
    rented: 9
  },
  {
    title: 'A la recherche du temps perdu',
    id: 237634,
    rented: 2
  },
  {
    title: 'Orgueil & Préjugés',
    id: 873495,
    rented: 6
  },
  {
    title: 'Les frères Karamazov',
    id: 450911,
    rented: 5
  },
  {
    title: 'Guerre et Paix',
    id: 748147,
    rented: 19
  }
];

let count = 0
books.forEach(book => {
  if (book["rented"] !== 0)
    count++;

});
console.log(`Au moins ${count} livres ont été empruntés.`);

let maxBorrow = 0;
let maxTitle;
books.forEach(book => {
  if (book["rented"] > maxBorrow) {
    maxBorrow = book["rented"]
    maxTitle = book["title"]
  }
})
console.log(`Normalement ${maxTitle} a été emprunté ${maxBorrow} fois, ce qui correspond au plus grand nombre.`);


let minBorrow = 100000;
let minTitle;
books.forEach(book => {
  if (book["rented"] < minBorrow) {
    minBorrow = book["rented"]
    minTitle = book["title"]
  }
})
console.log(`Normalement ${minTitle} a été emprunté ${minBorrow} fois, ce qui correspond au plus petit nombre.`);




books.forEach(book => {
  if (book["id"] == 873495)
    console.log("Le livre correspondant à cet id est " + book["title"] + " !")

});



console.log(books.sort(function (a, b) {
  return a.title.localeCompare(b.title);
}));








books.forEach(book => {
  if (book["id"] == 133712)


    delete book.title;
  delete book.id;
  delete book.index;
  delete book.rented;



});
console.log(books)
