
console.log("bonjour");

let nb1S = prompt("Veuillez saisir le nombre 1");
let signe = prompt ("veuillez saisir un signe");
let nb2S = prompt("Veuillez saisir le nombre 2");

let resultat = parseInt(nb1S) + parseInt(nb2S);
let resultat1 = parseInt(nb1S) * parseInt(nb2S);
let resultat2 = parseInt(nb1S) - parseInt(nb2S);
let resultat3 = parseInt(nb1S) / parseInt(nb2S);
let resultat4 = parseInt(nb1S)% parseInt(nb2S);




if (signe=="+") {
    console.log( resultat );


} else if (signe =="*") {
    console.log( resultat1 );


} else if (signe == "-") {
    console.log(resultat2  );


} else if (signe =="/" ) {
    console.log(resultat3 );


}

else if (signe =="%" ) {
    console.log(resultat4);

}
else prompt("veuillez saisir une valeur valide");