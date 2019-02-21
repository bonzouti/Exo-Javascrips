const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Entrepreneur nés dans les années 1970");
let nb = 0;
entrepreneurs.forEach(entrepreneur => {
  if (entrepreneur["year"] >= 1970 && entrepreneur["year"] <= 1979)
  nb ++;
})
console.log(nb);

console.log("Prénoms et noms des entrepreneurs");
let MyArray = [];
entrepreneurs.forEach(entrepreneur => {
  MyArray.push(`${entrepreneur["first"]} ${entrepreneur["last"]}`);
})
console.log(MyArray);

let date = 2019
entrepreneurs.forEach(entrepreneur => {
  console.log("Aujourd'hui, " + entrepreneur["first"] + " " + entrepreneur["last"] + " aurait eu " + (2019 - entrepreneur["year"]) + " ans")
});

console.log("Tri par ordre alphabétique du nom de famille");
console.log(entrepreneurs.sort(function (a, b) {
  return a.last.localeCompare(b.last);
}));