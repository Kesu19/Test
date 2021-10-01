var plateau=[[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
var navires=[0,2,3,4,5,5];
var touches=0;
var finPartie=false;
var nbCoups=0;
var message=[];
message[0]="A l'eau !";
message[1]="Croiseur touché !";
message[2]="Torpilleur touché !";
message[3]="Contre-torpilleur touché !";
message[4]="Sous-marin touché !";
message[5]="Porte-avion touché !";
message[6]="Case déjà jouée !";
message[11]="Croiseur coulé !";
message[12]="Torpilleur coulé !";
message[13]="Contre-torpilleur coulé !";
message[14]="Sous-marin coulé !";
message[15]="Porte-avion coulé !";

var jouer=document.querySelectorAll(".caseBataille").forEach(cell => cell.addEventListener("click", gestionClicCase));

function gestionClicCase(){	
    const indexCase = this.dataset.index;
	jouerCoup(indexCase);
}

function attenteCoup(){
	coup.value="";
	coup.focus();
}
function conversion(position){ 
	var colonne=position.charCodeAt(0)-65;
	var ligne=parseInt(position.slice(1))-1;
	return {colonne:colonne, ligne:ligne};	
}
function getCodeCase(position){
	var c=conversion(position);
	return plateau[c.ligne][c.colonne];
}
function setCodeCase(position,valeur){
	var c=conversion(position);
	plateau[c.ligne][c.colonne]=valeur;
}
function majVueJeu(position,situation){
	if(finPartie){
		alert(message[situation]+"\nVous avez coulé tous les navires en "+nbCoups+" coups");
		location.reload();
	}else{	
		alert(message[situation]);
	}
	var couleur="#FF0000";
	if (getCodeCase(position)==-6){couleur="#BBBBFF";}
	document.getElementById(position).style.backgroundColor=couleur;	
}
function jouerCoup(position){
	nbCoups++;
	var codeCase=getCodeCase(position);
	var situation=codeCase;
	switch(codeCase){
		case 0:
			setCodeCase(position,-6);
		break;
		case 1: case 2: case 3: case 4: case 5:
			navires[codeCase]--;
			if(navires[codeCase]==0){situation+=10;}
			setCodeCase(position,-codeCase);

			touches++;
			if(touches==17){finPartie=true;}			
		break;
		default:
			situation=6;
	}
	majVueJeu(position,situation);
}