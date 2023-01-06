
# TP: Tests unitaires avec Jest

## Étape 1 : Prérequis  

- Créez un dossier ``TP-JEST`` contenant un fichier ``app.js``
- Dans votre terminal, placez-vous à la racine du dossier et installez [Jest](https://jestjs.io/fr/) en exécutant ``npm install jest``
- Ajoutez l'instruction suivante dans votre fichier ``package.json`` :
``` 
"scripts": {
	"test": "jest"
  },
"type": "module" 
```
L'exécution des tests unitaires Jest sera associée  à la commande ``npm test``


## Étape 2: Premier test

Nous allons tester la réponse reçue lors d'une requête sur la route ``/healthcheck``.

Pour cela, nous allons créer un fichier distinct, nommé ``xxxxxx.test.js``. Par convention, on nomme le fichier de la même façon que l'unité testée. Ici, on teste notre route healthcheck, on nomme donc le fichier ``healthcheck.test.js``.

Contenu du fichier ``healtcheck.test.js`` :


```javascript 
function testHealtcheck(url) {
	return fetch(url).then((response) => {
		expect(response.status).toBe(403);
	});
}
test("Status : Request fullfiled", () => {
	return testHealtcheck("https://api-test-jest.up.railway.app/healthcheck");
});
```
Lancez la commande ``npm test``. 

**EXERCICE 1 :** Le test semble avoir échoué, analysez le log console de Jest et modifiez la fonction afin que le test soit passé avec succès.

**EXERCICE 2 :** Ajoutez une condition au test précédent. Elle doit vérifier que le statut renvoyé par la requête ne soit jamais équivalent à un statut *400 ou plus*.
Ressource : [Comparateurs Jest](https://jestjs.io/fr/docs/using-matchers)

## Étape 3: Réalisez votre propre série de tests

Créez un nouveau fichier, qui vous servira pour les tests sur la route ``/test-get``
 
 **EXERCICE 3 :** 
 Dans le fichier nouvellement créé, réalisez un test sur la route test-get. Cette route renvoie l'objet JSON suivant : 
 ``
 {
    brand: 'Ford',
    model: 'Mustang',
    year: 1969
}``

Testez la réponse à la requête en vérifiant que chaque clé est associée à la bonne valeur. Utilisez 3 comparateurs Jest différents.

---

**EXERCICE 4 :**

La route ``test-user`` : 
- Utilise la méthode ``GET``
- Renvoi un objet JSON composé de ``id``, ``firstName``, ``lastName``, ``email``, ``registeredAt``

  Réalisez plusieurs séries de tests sur la route ``test-user``, sur un échantillon de **20 données user** : 

**PREMIERE SERIE**
- Les 100 premiers ID de la database sont réservés. Vérifiez que chaque ID soit supérieur à 100.
- Vérifiez que les champs ``firstName`` et ``lastName`` ne soient pas vides.

**DEUXIEME SERIE**
- Vérifiez que l'email est dans un format valide. Pour réaliser ceci, deux RegEx vous sont fournis : 


  1 : ``/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/``

  2 :  ``/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/``
	
  Dans un premier temps, vérifiez que les emails correspondent à la première RegEx. Si un des emails ne correspond pas à la RegEx, affichez le dans la console.
	
  Ensuite, refaites le test avec la seconde RegEx. 

**TROISIEME SERIE :** 

- Vérifiez que la date ``registeredAt`` est dans un format valide. Vous pouvez utiliser la solution de votre choix.

- Vérifiez que la date ``registeredAt`` est plus récente que le ``01 Janvier 2020``

**EXERCICE 5 :**

La route ``test-post`` : 

- Utilise la méthode ``POST``

- Renvoi une liste d'entiers

- Nécessite de confirmer une connexion. Pour cela, on passe un token dans le header de la requête vers l'API. 

  token : ``'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'``

**PREMIERE SERIE :**

- Vérifiez que l'envoi d'un mauvais token retourne un statut ``403``

- Vérifiez que l'envoi du bon token retourne un statut ``200``

**DEUXIEME SERIE :**

- Vérifiez que la liste renvoyée par la requête comporte bien 4 éléments au maximum. 

- Vérifiez que le dernier item de la liste soit toujours égal à 2008. Assurez vous d'écrire un test scalable qui ne sera pas rendu obsolète par une modification ultérieure de la requête (ex: plus de 4 éléments dans la liste).



---
 
# Ressources

[API de test ](https://api-test-jest.up.railway.app/)


Routes : 

/healthcheck : retourne status 200

/test-get : retourne un objet JSON

/test-user : retourne un objet JSON contenant les infos d'un utilisateur aléatoire (id, firstName, lastName, email, registeredAt)

/test-post : retourne une liste d'entiers après avoir prouvé la connexion