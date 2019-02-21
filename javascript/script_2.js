let number = prompt("De quel nombre veut tu calculer la factorielle ?");
let factorielle = 1;
for (let i = 1; i <= number; i++) {
  factorielle = factorielle * i;
}
console.log(`Le résultat est: ${factorielle}`);