let floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let str = '#'
for (let i = 0; i < floor; i++) {
  console.log(str);
  str = str + `#`;
}