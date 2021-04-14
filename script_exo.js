function ajout(){
    /*
    var elemliste = document.getElementById("course").value;
    var liste = document.getElementById("listecommissions");
    var li = document.createElement("li")
    li.textContent=elemliste;
    liste.append(li);
    */
    function style(couleur,back){
        this.couleur=couleur;
        this.back=back;
    }
    
    this.couleur = document.getElementById("style").value;
    this.back = document.getElementById("back").value;
    //ajout de select

    var texte = document.getElementById("zone"); 
    texte.setAttribute("style", "color:"+this.couleur); 
    texte.style['background']  = this.back;
}
function supprime(){
    var texte = document.getElementById("zone"); 
    texte.setAttribute("style", "color:red"); 
    texte.style['background']  = 'white';
}