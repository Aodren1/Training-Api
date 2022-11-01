# Training-Api

<!--Github : utilité des branches : l'un peut travailler sur le front et l'autre sur le back et cela permet de merge ensuite sans écraser les données de l'autre si on travaillait sur une même branche-->





Côté js : Exemple général actuel on souhaite recuperer des informations lorqu'on click sur un button<!-- ${rand} pour utiliser la variable rand -->

- let var1 = document.getElementById("Id1") <!--on créer une ou plusieurs variables par rapport aux id de nos balises--> 

- const NomDeLaFonction = async () -> {      <!-- on céer une fonction & On utilise async car fetch est du code asynchrone, on ne sais pas quand la requete se termine-->

    - let var2 = ...;  <!-- on creer des variables selon nos besoin dans notre fonction ect..-->

    - let requestString = `https://exemple.com`; <!--on créer un variable connecte a l'url de l'apien question-->

    - let data = await fetch(requestString) ; <!--fetch démarre le chargement d'une ressource sur le réseau et retourne une promesse & on utilise await pour attendre que la requete se finisse pour passer à la suite-->

    - let response = await data.json();  <!--on converti en json-->
}

var1.addListenerEvent("click", NomDeLAFonction);