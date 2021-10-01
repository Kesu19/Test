
const statut = document.querySelector("h2")
let jeuActif = true
let joueurActif = "X"
let etatJeu = ["", "", "", "", "", "", "", "", ""]
let MyMorpionXO = document.querySelector('.MyMorpionXO');


const conditionsVictoire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const gagne = () => `Le joueur ${joueurActif} a gagné`
const egalite = () => "Egalité"
const tourJoueur = () => `C'est au tour du joueur ${joueurActif}`

statut.innerHTML = tourJoueur()

document.querySelectorAll(".case").forEach(cell => cell.addEventListener("click", gestionClicCase))
document.querySelector("#recommencer").addEventListener("click", recommencer)

function gestionClicCase(){
    const indexCase = parseInt(this.dataset.index)
    if(etatJeu[indexCase] !== "" || !jeuActif){
        return
    }
    etatJeu[indexCase] = joueurActif
    this.innerHTML = joueurActif
    verifGagne()
}

function verifGagne(){
    let tourGagnant = false
    for(let conditionVictoire of conditionsVictoire){
        let val1 = etatJeu[conditionVictoire[0]]
        let val2 = etatJeu[conditionVictoire[1]]
        let val3 = etatJeu[conditionVictoire[2]]
        if(val1 === "" || val2 === "" || val3 === ""){
            continue
        }
        if(val1 === val2 && val2 === val3){
            tourGagnant = true
            break
        }
    }

    if(tourGagnant){
        statut.innerHTML = gagne()
        jeuActif = false
		if(joueurActif === "X"){
			nbrVictoireX = nbrVictoireX+1;
			console.log(nbrVictoireX)
		  }
		if(joueurActif === "O"){
			nbrVictoireO = nbrVictoireO+1;
			console.log(nbrVictoireO)
		}
		if(victoireTotale(nbrVictoireO,nbrVictoireX) === true){
			MyMorpionXO.textContent = ''+joueurActif+' a gagné 3 partie fin du jeu !';
			nbrVictoireO = 0;
			nbrVictoireX = 0
		}
        return
    }
    if(!etatJeu.includes("")){
        statut.innerHTML = egalite()
        jeuActif = false
        return
    }
    joueurActif = joueurActif === "X" ? "O" : "X"
    statut.innerHTML = tourJoueur()
}

function recommencer(){
    joueurActif = "X"
    jeuActif = true
    etatJeu = ["", "", "", "", "", "", "", "", ""]
    statut.innerHTML = tourJoueur()
    document.querySelectorAll(".case").forEach(cell => cell.innerHTML = "")
}

var nbrVictoireX = 0;
var nbrVictoireO = 0;
var GrandVictorieux = ""
function victoireTotale(nbrVictoireX,nbrVictoireO){
	if (nbrVictoireO >= 3){
		GrandVictorieux = "O";
		return true;
	}
	else if (nbrVictoireX >= 3){
		GrandVictorieux = "X"
		return true;
	}
} 