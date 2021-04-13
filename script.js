/*var maVar ="ma valeur";
(function(){
    var maVar = "Valeur locale";
    console.log(maVar);
})();*/
/*
var mavar=parseInt("105");
console.log(mavar);

function Calcul(num1,num2){
    if (num2!=0){
        return num1 ^ num2
    }
    else{
        console.log("pas divise par 0");
    }
    
}
console.log(Calcul(1,10));
*/
//exo1
/*
function carre(b) {

    return b*b;

}

// Afficher la sortie

console.log(carre(2));

console.log(carre(4));
*/
//exo2
/*
function ajout(a,b){
    return a+b<100;
}

console.log(ajout(4,5));

console.log(ajout(40,70));*/
//exo 3
/*
function equals(a,b){
    return a===b;
}

console.log(equals(4,5));

console.log(equals(1,'1'));
console.log(equals(1,1));

*/

//exo 4
/*
function reverseTab(tab) { 
    let res = []; 
    for (let i = tab.length -1; i > -1; i--) { 
      res.push(tab[i]); 
    } 
    return res;
  } 
  
  // Afficher la sortie 
  
  console.log(reverseTab([1, 2, 3])); 
  
  console.log(reverseTab([1, 1, 2, 2, 3])); 
  //exo 5

  function lasteleTab(tab) { 
    return tab[tab.length -1] 
  } 
  
  // Afficher la sortie 
  
  console.log(lasteleTab([1, 2, 3])); 
  
  console.log(lasteleTab([1, 1, 2, 2, 3,12])); 
  console.log(lasteleTab([1, 2, "test"])); 

  */
 /*
 let count=[];
 function add_nom(){
     var nom =prompt("saisir un nom")
     count.push(nom)
     console.log("tab="+count)
 }
 function tirage(){
    let resultat =Math.floor(Math.random()*count.length)
    let gagnant=count[resultat]
    if(count!=0)
    {
        for(let i =0 ;i<count.length;i++){
            if (gagnant===count[i]){
                console.log("le gagnant est = "+count[resultat])
            }
        }
    }
    else{
        console.log("liste vide, ajouter des noms")
    }


 }

*/

let tableau=Array()
for(let j=0;j<10;j++){
    tableau.push(j)
}
for (let i of tableau){
    console.log(i)
}
var couleurs=["rouge","vert","jaune"]
couleurs.forEach(function(couleur){
    console.log(couleur);
});