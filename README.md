# ADDAX
[![Image](https://i.goopics.net/4Pk4l.jpg)](https://goopics.net/i/4Pk4l)

ADDAX est une plateforme de paiement cross border basé sur une blockchain privé dont les noeuds sont déployés au niveau des banques, les régulateurs et des transitaires permettant aux PMEs d’échanger des actifs digitaux.

Ce projet comporte un client qui expose un réseau blockchain à travers une REST API.

  1-  Structure Code

  2-  Installation

  3-  Exécution des tests

## Structure Code
Le projet comporte deux dossiers:
  - **/web-client**: Application Web développée en Angular 2  et qui communique avec une REST API.
  - **/hack Network**: Le framework de Hyperledger Composer, il sert à développer  sur Hyperledger Fabric et à deployer une REST API et comporte:
    - **/models/org.acme.hacknetwork** : définit le modèle   
    - **/lib/logic.js** : définit la modélisation du chain code "Smart Contract"  

## Installation
- **Pour le client**:
  - Pour une exécution sur votre machine :

1-  Cloner ADDAX repo à partir de https://github.com/21naza/ADDAX
```sh
$ git clone https://github.com/21naza/ADDAX
```
2- ADDAX nécessite [Node.js](https://nodejs.org/) v8.9+ et Angular CLI
```sh
$ cd web-client
$ npm install
$ npm install -g @angular/cli
$ ng serve
```
3- Accédez à http://localhost:4200/ dans votre navigateur pour voir l'application
- Egalement, il est déployé et accessible à partir de l'addresse
```sh
54.246.136.60:4200
```
* **Pour le hack Network REST API**:
Accédez à l'adresse
```sh
54.200.124.43:3000
```
### Exécution des tests :
On mène le test à partir de l'application web client
L'application, **dans sa  version beta**, rassemble les fonctionnalités principales de notre système que peuvent mener les différentes parties prenantes.
Dans une version ultérieure plus developpée, chaque partie (Banque, PME et régulateur) bénéficie d'une interface personnalisée.
* Alors, le régulateur dispose d'un dashboard pour les banques qui intègrent notre solution, un pour les PME clientes de ses banques  et un autre pour les transactions effectuées.

[![Image](https://i.goopics.net/ybLGv.png)](https://goopics.net/i/ybLGv)
[![Image](https://i.goopics.net/JY5Kx.png)](https://goopics.net/i/JY5Kx)
[![Image](https://i.goopics.net/pEZ8P.png)](https://goopics.net/i/pEZ8P)
* **On simule une transaction** : une PME, cliente chez une banque du réseau,  transfère une somme à une autre PME localisée dans un autre pays de manière rapide, transparente et sécurisée.
[![Image](https://i.goopics.net/723lN.png)](https://goopics.net/i/723lN)
La transaction est bien effectuée!
[![Image](https://i.goopics.net/Ldkxd.png)](https://goopics.net/i/Ldkxd)

 # Copyright  &copy;

 ##### RoyalFlush
