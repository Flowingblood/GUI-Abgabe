# Usability-Test Konzept
# Wichtige Zustände
## Unangemeldet
TODO
## Angemeldet
TODO
# Ausgangssituationen
## Ohne Interaktion
Der Nutzer öffnet die Webseite über den direkten Hauptlink ohne weiter Unterpfade und führt keine weitere Interaktionen mit der Webseite durch.

## Unangemeldet
Der Nutzer befindet sich ungemeldet auf der Login Seite.  
Die Login Seite befinder sich im Unterpfad ``/login``.

## Angmeldet als Kunde
Der Nutzer hat sich auf der Login Seite erfolgreich mit einem Kunden Benutzer Account über das Login Formular angemeldet und befindet sich jetzt aus der Übersicht seiner eigenen Ziele.

## Angemeldet als Trainer
Der Nutzer hat sich auf der Login Seite erfolgreich mit einem Trainer Benutzer Account über das Login Formular angemeldet und befindet sich jetzt aus der Übersicht seiner eigenen Ziele.

# Tests
## Anmeldungs-Tests
### Kunden-Anmeldung
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob die Anmeldung eines Kunden Benutzer Accounts über das Login Formular für ein auf der Login Seite funktioniert.  
``Ausgangssituation``: Unangemeldet  
``Schrit für Schritt``:  
1. Prüfen ob Anmelde Formular vorhanden. Benötigt wird jeweils 1 Eingabefeld für einen Usernamen und für ein Password. Desweiten muss ein Anmeldeknopf unten den beiden Eingabefeldern sichtbar sein.
2. Usernamen und Passwort des Test Kunden Benutzer Accounts eingeben
3. Auf Login drücken
4. Prüfen ob die Anmeldung erfolgreich war.

### Trainer-Anmeldung
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob die Anmeldung eines Trainer Benutzer Accounts über das Login Formular für ein auf der Login Seite funktioniert.  
``Ausgangssituation``: Unangemeldet  
``Schrit für Schritt``:  
1. Prüfen ob Anmelde Formular vorhanden. Benötigt wird jeweils 1 Eingabefeld für einen Usernamen und für ein Password. Desweiten muss ein Anmeldeknopf unten den beiden Eingabefeldern sichtbar sein.  
2. Usernamen und Passwort des Test Trainer Benutzer Accounts eingeben
3. Auf Login drücken
4. Prüfen ob die Anmeldung erfolgreich war.

### Fehlgeschlage-Anmeldung mit Fehlermeldung
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob bei der Anmeldung über das Login Formular mit fehlerhaften Anmeldedaten ein Fehler beim Password Feld angezeigt wird und ob der Fehler nach einer Änderung wieder verschwindet.  
``Ausgangssituation``: Unangemeldet  
``Schrit für Schritt``:  
1. Fehlerhafte Anmelde Daten in das Username und Password Eingabefeld eingeben.
2. Auf Login drücken.
3. Prüfen ob die Anmeldung fehlgeschlagen ist.
4. Prüfen ob das Password Eingabefehld rot umranded ist und eine Fehler Nachricht untendrunter angezeigt wird.
5. Auf Login drücken.
6. Prüfen ob das Password Eingabefehld immernoch rot umranded ist und eine Fehler Nachricht untendrunter angezeigt wird.
7. Das Password Feld auswählen.
8. Ausserhalb des Password Feldes drücken.
9. Prüfen ob das Password Eingabefehld immernoch rot umranded ist und eine Fehler Nachricht untendrunter angezeigt wird.
10. Den Wert im Password Eingabefeld verändern.
11. Prüfen ob der Fehler beim Password Eingabefeld verschwunden ist.

## Navigationsleiste-Tests
### Ausgeblendete Navigationsleiste
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob die Navigationsleiste ausgeblendet wird wenn der Nutzer nicht angemeldet ist.  
``Ausgangssituation``: Unangemeldet  
``Schrit für Schritt``:  
1. Prüfen ob die Navigationsleiste nicht angezeigt wird.

### Ausblenden der Navigationsleiste bei Abmeldung
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob die Navigationsleiste ausgeblendet wird wenn der Nutzer sich abmeldet.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schrit für Schritt``:  
1. Rechts oben innerhalb der Navigationsleiste aus den Usernamen zum abmelden klicken.
2. Prüfen ob die Navigationsleiste nicht mehr sichtbar ist.

### Abmelden Menü
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob der Abmeldeknopf mit dem richtigen Namen angezeigt wird.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schrit für Schritt``:  
1. Prüfen ob rechts oben in der Navigationsleiste der angemeldete Username steht.
2. Auf den angemeldeten Usernamen klicken.
3. Prüfen ob der Nutzer abgemeldet ist.

### Angezeigte Menü Punkte als Kunde
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob alle nötigen linken Menü Punkte angezeigt werden wenn ein Kunde angemeldet ist.  
``Ausgangssituation``: Angmeldet als Kunde  
``Schrit für Schritt``:  
1. Prüfen ob der Menü Punkt "Ziele" angezeigt wird.
2. Prüfen ob der Menü Punkt "Ziele" klickbar ist.

### Angezeigte Menü Punkte als Trainer
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob alle nötigen linken Menü Punkte angezeigt werden wenn ein Trainer angemeldet ist.  
``Ausgangssituation``: Angmeldet als Trainer  
``Schrit für Schritt``:  
1. Prüfen ob der Menü Punkt "Ziele" angezeigt wird.
2. Prüfen ob der Menü Punkt "Ziele" klickbar ist.
3. Prüfen ob der Menü Punkt "Nutzerübersicht" angezeigt wird.
4. Prüfen ob der Menü Punkt "Nutzerübersicht" klickbar ist.

### Angezeigte Menü Punkte Funktionsprüfung
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob alle angezeigten linken Menü Punkte eine Funktion haben  
``Ausgangssituation``: Angmeldet als Trainer  
``Schrit für Schritt``:  
1. Auf den Menü Punkt "Nutzerübersicht" klicken.
2. Prüfen ob die Nutzerübersicht angezeigt wird.
3. Auf den Menü Punkt "Ziele" klicken.
4. Prüfen ob die eigenen Ziele angezeigt werden.