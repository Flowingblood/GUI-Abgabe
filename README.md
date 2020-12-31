# GUI-Abgabe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.  
Um dieses Projekt zu starten reicht ein ``ng serve -o`` mit installierter Angualar CLI

# Ausführung
1. ``npm install``
2. ``ng serve -o`` - Öffnet einen Webbrowser mit der Webseite.

## Tests
3. ``ng test`` - Startet den Chrom Webbrowser um die Tests durchzuführen. 

Die einzelnen Unit Tests sind immer in den jeweiligen ``.spec.ts`` zu finden.  
[IdService Unit Tests](src\app\services\id.service.spec.ts)
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