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


function div(num1,num2){
    return num1/num2;}

    try{
        console.log(div(1,2))
        console.log(div(1,0))
    }catch (e){
    console.log('error'+e);}
    finally{
        console.log("finish")
    }
*/

/*var maVar ="ma valeur";
(function(){
    var maVar = "Valeur locale";
    console.log(maVar);
})();

(function(){
    var num1 = 3;
    var num2 = 4;
var machin = function(){
    sum = num1 + num2;
    return sum;
}
console.log(machin);
})();

(function(){
   var soldes = "Toyata";
   function carTypes(nom){
       return (nom === "Honda") ?
       nom : "Désolé, nous ne vendons pas de " + nom + ".";
   }
   var voiture = {
       marque: "Toyota",
       getVoiture: carTypes("Honda")
   };

   console.log(voiture.marque);
   console.log(voiture.getVoiture);
})();


(function(){
var arr = new Array();
arr[0] = "val 1"
arr[2] = "val 3"
arr[4] = "val 5"
for (var val of arr){
    console.log("valeur :" + val);
}
for (var val in arr){
    console.log("index :" + val);
}
console.log(arr.length)
})();
*/
/*
function documents(numEnreg,titre,livre,revue,Dictionnaire){
    this.numEnreg=numEnreg;
    this.titre=titre;
    this.livre=livre;
    this.revue=revue;
    this.Dictionnaire=Dictionnaire;
}

function livre(numEnreg,titre,livre,revue,Dictionnaire,auteur,nbrpage){
    documents.call(this,this,numEnreg,titre,livre,revue,Dictionnaire)
    this.auteur=auteur;
    this.nbrpage=nbrpage;
}

function revue(numEnreg,titre,livre,revue,Dictionnaire,mois,année){
    documents.call(this,this,numEnreg,titre,livre,revue,Dictionnaire)
    this.mois=mois;
    this.année=année;
}

function dictionnaire(numEnreg,titre,livre,revue,Dictionnaire,langue){
    documents.call(this,numEnreg,titre,livre,revue,Dictionnaire)
    this.langue=langue;
}

function nbpage_livre(livre_number) { 
    let nbr_de_page = livre_number.nbrpage;
    if(nbr_de_page<100){
        console.log("nombre de pages <100")
    }
    else if(nbr_de_page<200 && nbr_de_page>100){
        console.log("nombre de pages 100<page<200")
    }
    else if(nbr_de_page<300 && nbr_de_page>200){
        console.log("nombre de pages 200<page<300")
    }
    else {
        console.log("nombre de pages 300<page")
    }
    
  } 

  livre.prototype=Object.create(documents.prototype)
  revue.prototype=Object.create(documents.prototype)
  dictionnaire.prototype=Object.create(documents.prototype)
  
  let livre1=new livre(12,'titre','name','revue','dict','alain',205)
  console.log(livre1)
console.log(nbpage_livre(livre1))
*/

function travailleur(salaireBrut,allocation,bonus,genre,nbrPersCharge){
    this.salaireBrut=salaireBrut;
    this.genre=genre;
    this.nbrPersCharge=nbrPersCharge;
    this.allocation=allocation;
    this.bonus=bonus;
}


function calculer(){
    var Salaire = document.getElementById("grossSalary").value;
    var bonus_check = document.getElementById("additionBonus").checked;
    var allocation_check = document.getElementById("additionAllowance").checked;
    var type_gender = document.getElementById("gender").value;
    var dependents = document.getElementById("dependents").value;


    // Afficher la valeur
    /*
    console.log("salaire brut = "+Salaire);
    console.log("bonus = "+bonus_check);
    console.log("allocation = "+ allocation_check);
    console.log("gender = "+ type_gender);
    console.log("dependents = "+ dependents);
    */
   
    //affectations
    var travailleur1=new travailleur(Salaire,bonus_check,allocation_check,type_gender,dependents)
    console.log("salaire brut == "+travailleur1.salaireBrut)
    console.log("genre == "+travailleur1.genre)
    console.log("a chrage == "+travailleur1.nbrPersCharge)
    console.log("alloc == "+travailleur1.allocation)
    console.log("bonus == "+travailleur1.bonus)

    //console.log("test2 === "+allocation_check)
    let salaireBrut=travailleur1.salaireBrut;
    let impotRevenu=travailleur1.salaireBrut*0.18;
    let assurance=travailleur1.salaireBrut*0.07;
    let RevCanada=travailleur1.salaireBrut*0.05;
    let allocation=travailleur1.allocation;
    //console.log("allocnumber2 = "+allocation)
    let bonus=travailleur1.bonus;
    var salaireInter=salaireBrut-impotRevenu-assurance-RevCanada;
    if (allocation ==true ){
        salaireInter += 150;
        console.log("alloc true")
    }
    if (bonus==true){
        salaireInter+= 100;
        console.log("bonus true")
    }
    if(travailleur1.genre=="Femme" || travailleur1.genre=="F" ){
        salaireInter-=salaireInter*0.02;
    }
    if (travailleur1.nbrPersCharge==3){
        salaireInter-=salaireInter*0.01;
    }
    if (travailleur1.nbrPersCharge>=4){
        salaireInter-=salaireInter*0.02;
    }
    let salaireFinale=salaireInter;

    console.log("impot="+impotRevenu+"\t"+"\n");
    console.log("assurance="+assurance+"\t"+"\n");
    console.log("revcanada="+RevCanada+"\t"+"\n");
    console.log("salire inter="+salaireInter+"\t"+"\n");
    console.log("Salaire net = "+salaireFinale)+"\n";

    var impot = document.getElementById("ImpotRev");
    var assuranceb = document.getElementById("assurance");
    var canada = document.getElementById("canada");
    var bonusb = document.getElementById("bonus");
    var salairenet = document.getElementById("salairenet");

    impot.innerHTML="Impôt sur le revenu: "+impotRevenu;
    assuranceb.innerHTML="Assurance employé : "+assurance;
    canada.innerHTML="Régime de pensions du Canada: "+RevCanada;
    bonusb.innerHTML="Suppléments:  "+bonus;
    salairenet.innerHTML="Salaire net : "+salaireFinale;

}




