let scoreUtilisateur = 0;
let scoreOrdinateur = 0;
const scoreUtilisateur_span = document.getElementById("score-joueur");
const scoreOrdinateur_span = document.getElementById("score-ordinateur");
const score_div = document.querySelector(".score");
const resultat_div = document.querySelector(".resultat > p");
const pierre_div = document.getElementById("pierre");
const feuille_div = document.getElementById("feuille");
const ciseaux_div = document.getElementById("ciseaux");


function game(choixJoueur) {
	partie = choixJoueur + choixOrdinateur();
	console.log(partie);
	switch(partie) {
		case "fc" :
		resultat_div.innerHTML = "Les ciseaux coupent ta feuille. Tu as perdu !";
		defaite();
		break;
		case "pf" :
		resultat_div.innerHTML = "La feuille couvre ta pierre. Tu as perdu !";
		defaite();
		break;
		case "cp" :
		resultat_div.innerHTML = "La pierre casse tes ciseaux. Tu as perdu !";
		defaite();
		break;

		case "fp" :
		resultat_div.innerHTML = "Ta feuille couvre la pierre. Tu as gagné !";
		victoire();
		break;
		case "pc" :
		resultat_div.innerHTML = "Ta pierre casse les ciseaux. Tu as gagné !";
		victoire();
		break;
		case "cf" :
		resultat_div.innerHTML = "Tes ciseaux coupent la feuille. Tu as gagné !";
		victoire();
		break;


		case "pp" :
		case "cc" :
		case "ff" :
		resultat_div.innerHTML = "Egalité";
		break;
	}

function victoire() {
	console.log("victoire");
	scoreUtilisateur++;
	scoreUtilisateur_span.innerHTML = scoreUtilisateur;
}

function defaite() {
	console.log("defaite");
	scoreOrdinateur++;
	scoreOrdinateur_span.innerHTML = scoreOrdinateur;
}


}

function choixOrdinateur() {
	valeurAleatoire = Math.random();
	switch(true) {
		case valeurAleatoire < 0.37:
		return("f");

		case (valeurAleatoire > 0.37) && (valeurAleatoire < 0.7):
		return("p");

		case valeurAleatoire > 0.7:
		return("c");
	}
	

}

pierre_div.addEventListener('click', function(){
	game("p");
})

feuille_div.addEventListener('click', function(){
	game("f");
})

ciseaux_div.addEventListener('click', function(){
	game("c");
})

