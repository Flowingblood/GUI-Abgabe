##Git
[Git Link](https://github.com/Flowingblood/GUI-Abgabe)

# GUI-Abgabe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.  
Um dieses Projekt zu starten reicht ein ``ng serve -o`` mit installierter Angualar CLI

# Bekannte Probleme
Das Backend lässt einige Properties einfach verschwinden. Daher sind Admins nach einer Usernamen änderung wieder normale User.  
Desweiteren unterstützt das Backend derzeit keine USername und Password Authentifizierung. Daher simuliert der AuthorizationService so einen Login. Dieser Servide prüft aber keine Passwörter ab. Passwörter werden vom Backend ebenfalls regelmässig gelöscht.

# Ausführung
1. Backend starten
2. ``npm install``
3. ``ng serve -o`` - Öffnet einen Webbrowser mit der Webseite.

## User Accounts
Username: ``ttrain`` Passwort: ``test`` - Trainer  
Username: ``nnormal`` Passwort: ``test`` - Kunde  

# Ausführung
1. ``npm install``
2. ``ng serve -o`` - Öffnet einen Webbrowser mit der Webseite.

## Tests
3. ``ng test`` - Startet den Chrom Webbrowser um die Tests durchzuführen. 

Die einzelnen Unit Tests sind immer in den jeweiligen ``.spec.ts`` zu finden.  
[IdService Unit Tests](src/app/services/id.service.spec.ts)
# Dokumentation
Die gesamte weitere Dokumentation für dieses Projekt ist in den Typescript Klassen selbst und in dem [docs](docs/) Ordner zu finden.

# ID Convention
```
1|000|000|000
           ^ ----- Id Version, konstant 1  
       ^ --------- User Id Teil
   ^ ------------- Goal Id Teil
^ ---------------- Sub Goal Id Teil
```

## Informationsarchitektur
![](docs/Informationsarchitektur.jpg)

## Wireframes
![](docs/Wireframes.jpg)

## Gestaltgesetze und Menschlichen Wahrnehmung
![](docs/Gestaltgesetze%20und%20Menschlichen%20Wahrnehmung.jpg)

## Miro Link
[MIRO LINK](https://miro.com/app/board/o9J_laV5_68=/)

