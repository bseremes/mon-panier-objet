/* Abonne btn à l'événement click */
document.getElementById('btn-1').addEventListener("click", clickButton);
document.getElementById('btn-2').addEventListener("click", clickButton);
document.getElementById('btn-3').addEventListener("click", clickButton);
document.getElementById('btn-clean').addEventListener("click", btnClean);

/* Déclaration de notre tableau d'articles */
var panier = [];

/* Définition de l'article 1 */
var art1 = {
	img: "http://download.foodshot.co/Foodshot_2016_04_4.jpg",
	label: "Steak",
	cat: "déjeuner",
	prix: 8
};
var art2 = {
	img: "http://download.foodshot.co/Foodshot_2016_09_7.jpg",
	label: "Pancake",
	cat: "petit-déjeuner",
	prix: 10
};
var art3 = {
	img: "http://download.foodshot.co/Foodshot_2016_18_7.jpg",
	label: "Cupcake",
	cat: "goûter",
	prix: 2
};

/* Fonction qui est appelée lors du click sur un bouton */
function clickButton() {
	if(this.id == "btn-1") {
		ajouterArticle(art1);
	}
	if(this.id == "btn-2") {
		ajouterArticle(art2);
	}
	if(this.id == "btn-3") {
		ajouterArticle(art3);
	}
	calculerTotal();
}

function btnClean() {
	//alert("Clean");
	/*var tblPanier = document.getElementById("details-panier");
	console.log(tblPanier.childNodes);*/
	var lignesASupprimer = document.getElementsByClassName("ligne-custom");
	tableau = document.getElementById("details-panier");
	for(var i = lignesASupprimer.length - 1; i >= 0; i--) {
		tableau.removeChild(lignesASupprimer[i]);
	}
	/* Vider le panier */
	panier.length = 0;
	calculerTotal();
}

function ajouterArticle(article) {
	panier.push(article);
	var tr = document.createElement("tr");
	tr.className = "ligne-custom";

	var tdImg = document.createElement("td");
	tdImg.className = "img-article";
	tdImg.style.backgroundImage = "url(" + article.img + ")";

	tr.appendChild(tdImg);

	var tdLabel = document.createElement("td");
	tdLabel.textContent = article.label;
	tr.appendChild(tdLabel);
	
	var tdCat = document.createElement("td");
	tdCat.textContent = article.cat;
	tr.appendChild(tdCat);

	var tdPrix = document.createElement("td");
	tdPrix.textContent = article.prix;
	tr.appendChild(tdPrix);

	document.getElementById("details-panier").appendChild(tr);
}

function calculerTotal() {
	var total = 0;
	if(panier.length == 0) {
		document.getElementById('texte-panier').textContent = "Votre panier est vide";
	}
	else {
		for(var i = panier.length - 1; i >= 0; i--) {
			/* Cela correspond à total = total + panier[i].prix */
			total += panier[i].prix;
		}
		document.getElementById('texte-panier').textContent = "J'ai pris " + panier.length + " article(s) pour un total de " + total + "€";
	}
}