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
Die Login Seite befindet sich im Unterpfad ``/login``.

## Angemeldet als Kunde
Der Nutzer hat sich auf der Login Seite erfolgreich mit einem Kunden Benutzer Account über das Login Formular angemeldet und befindet sich jetzt aus der Übersicht seiner eigenen Ziele.

## Angemeldet als Trainer
Der Nutzer hat sich auf der Login Seite erfolgreich mit einem Trainer Benutzer Account über das Login Formular angemeldet und befindet sich jetzt aus der Übersicht seiner eigenen Ziele.

# Tests
## Allgemeine-Tests
### Freies Testen der Ziele Übersicht
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob die Benutzer intuitive dazu in der Lage sind Ziele anzulegen, zu bearbeiten und abzuhaken sowie zu löschen.  
``Ausgangssituation``: Angemeldet als Kunde  
``Schritt für Schritt``:  
1. Tester frei Testen lassen.

### Freies Testen der User Übersicht
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob die Benutzer intuitive dazu in der Lage sind User anzulegen, zu bearbeiten und abzuhaken sowie zu löschen.  
``Ausgangssituation``: Angemeldet als Trainer  
``Vorbedingung``: Die User Übersicht muss geöffnet sein.  
``Schritt für Schritt``:  
1. Tester frei Testen lassen.
## Anmeldungs-Tests
### Kunden-Anmeldung
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob die Anmeldung eines Kunden Benutzer Accounts über das Login Formular für ein auf der Login Seite funktioniert.  
``Ausgangssituation``: Unangemeldet  
``Schritt für Schritt``:  
1. Prüfen ob Anmelde Formular vorhanden. Benötigt wird jeweils 1 Eingabefeld für einen Usernamen und für ein Password. Desweiten muss ein Anmeldeknopf unten den beiden Eingabefeldern sichtbar sein.
2. Usernamen und Passwort des Test Kunden Benutzer Accounts eingeben
3. Auf Login drücken
4. Prüfen ob die Anmeldung erfolgreich war.

### Trainer-Anmeldung
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob die Anmeldung eines Trainer Benutzer Accounts über das Login Formular für ein auf der Login Seite funktioniert.  
``Ausgangssituation``: Unangemeldet  
``Schritt für Schritt``:  
1. Prüfen ob Anmelde Formular vorhanden. Benötigt wird jeweils 1 Eingabefeld für einen Usernamen und für ein Password. Desweiten muss ein Anmeldeknopf unten den beiden Eingabefeldern sichtbar sein.  
2. Usernamen und Passwort des Test Trainer Benutzer Accounts eingeben
3. Auf Login drücken
4. Prüfen ob die Anmeldung erfolgreich war.

### Fehlgeschlage-Anmeldung mit Fehlermeldung
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob bei der Anmeldung über das Login Formular mit fehlerhaften Anmeldedaten ein Fehler beim Password Feld angezeigt wird und ob der Fehler nach einer Änderung wieder verschwindet.  
``Ausgangssituation``: Unangemeldet  
``Schritt für Schritt``:  
1. Fehlerhafte Anmelde Daten in das Username und Password Eingabefeld eingeben.
2. Auf Login drücken.
3. Prüfen ob die Anmeldung fehlgeschlagen ist.
4. Prüfen ob das Password Eingabefehld rot umranded ist und eine Fehler Nachricht untendrunter angezeigt wird.
5. Auf Login drücken.
6. Prüfen ob das Password Eingabefehld immernoch rot umranded ist und eine Fehler Nachricht untendrunter angezeigt wird.
7. Das Password Feld auswählen.
8. Außerhalb des Password Feldes drücken.
9. Prüfen ob das Password Eingabefehld immernoch rot umranded ist und eine Fehler Nachricht untendrunter angezeigt wird.
10. Den Wert im Password Eingabefeld verändern.
11. Prüfen ob der Fehler beim Password Eingabefeld verschwunden ist.

## Navigationsleiste-Tests
### Ausgeblendete Navigationsleiste
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob die Navigationsleiste ausgeblendet wird, wenn der Nutzer nicht angemeldet ist.  
``Ausgangssituation``: Unangemeldet  
``Schritt für Schritt``:  
1. Prüfen ob die Navigationsleiste nicht angezeigt wird.

### Ausblenden der Navigationsleiste bei Abmeldung
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob die Navigationsleiste ausgeblendet wird, wenn der Nutzer sich abmeldet.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schritt für Schritt``:  
1. Rechts oben innerhalb der Navigationsleiste aus den Usernamen zum abmelden klicken.
2. Prüfen ob die Navigationsleiste nicht mehr sichtbar ist.

### Abmelden Menü
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob der Abmeldeknopf mit dem richtigen Namen angezeigt wird.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schritt für Schritt``:  
1. Prüfen ob rechts oben in der Navigationsleiste der angemeldete Username steht.
2. Auf den angemeldeten Usernamen klicken.
3. Prüfen ob der Nutzer abgemeldet ist.

### Passwort ändern Menü
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob der „Passwort ändern“ Knopf angezeigt wird und eine Funktion besitzt.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schritt für Schritt``:  
1. Prüfen ob rechts oben in der Navigationsleiste ein "Passwort ändern" Knopf vorhanden ist.
2. Auf den "Passwort ändern" Knopf drücken.
3. Prüfen ob der Passwort ändern Dialog sich öffnet.

### Angezeigte Menü Punkte als Kunde
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob alle nötigen linken Menü Punkte angezeigt werden, wenn ein Kunde angemeldet ist.  
``Ausgangssituation``: Angemeldet als Kunde  
``Schritt für Schritt``:  
1. Prüfen ob der Menü Punkt "Ziele" angezeigt wird.
2. Prüfen ob der Menü Punkt "Ziele" klickbar ist.

### Angezeigte Menü Punkte als Trainer
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob alle nötigen linken Menü Punkte angezeigt werden, wenn ein Trainer angemeldet ist.  
``Ausgangssituation``: Angemeldet als Trainer  
``Schritt für Schritt``:  
1. Prüfen ob der Menü Punkt "Ziele" angezeigt wird.
2. Prüfen ob der Menü Punkt "Ziele" klickbar ist.
3. Prüfen ob der Menü Punkt "Nutzerübersicht" angezeigt wird.
4. Prüfen ob der Menü Punkt "Nutzerübersicht" klickbar ist.

### Angezeigte Menü Punkte Funktionsprüfung
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob alle angezeigten linken Menü Punkte eine Funktion haben  
``Ausgangssituation``: Angemeldet als Trainer  
``Schritt für Schritt``:  
1. Auf den Menü Punkt "Nutzerübersicht" klicken.
2. Prüfen ob die Nutzerübersicht angezeigt wird.
3. Auf den Menü Punkt "Ziele" klicken.
4. Prüfen ob die eigenen Ziele angezeigt werden.

## Ziele-Tests
### Anlegen von Zielen
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob es möglich ist ein Ziel anzulegen.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schritt für Schritt``:  
1. Prüfen ob "Oberziel hinzufügen" Knopf vorhanden ist
2. Auf den "Oberziel hinzufügen" Knopf drücken
3. Prüfen ob sich der "Ziele hinzufügen" Dialog öffnet.
4. Prüfen ob in dem Dialog ein Einfagebfeld für den Ziel Namen vorhanden ist und 1 Knopf zum Abbrechen sowie 1 Knopf zum Speichern.
5. Auf Speichern drücken.
6. Prüfen ob Dialog noch offen ist.
7. Namenseingabefeld mit einem Ziel Namen füllen.
8. Auf Speichern drücken.
9. Prüfen ob Dialog sich geschlossen hat.
10. Prüfen ob Ziel nun angezeigt wird.

### Aus und Einklappen von Zielen
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob es möglich ist ein Ziel aus und einzuklappen.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Vorbedingung``: Es muss bereits mindestens 1 Ziel hinzugefügt worden sein.  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schritt für Schritt``:  
1. Auf das Ziel klicken
2. Prüfen ob sich das Ziel ausgeklappt hat und mögliche Unterziele sowie ein "Unterziele hinzufügen" Knopf erscheint.
3. Auf das Ziel klicken
4. Prüfen ob sich das Ziel eingeklappt hat und mögliche Unterziele sowie ein "Unterziele hinzufügen" Knopf verschwinden.

### Anlegen von Unterzielen
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob es möglich ist ein Unterziel anzulegen.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Vorbedingung``: Es muss bereits mindestens 1 Ziel hinzugefügt und ausgeklappt worden sein.  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schritt für Schritt``:  
1. Prüfen ob "Unterziel hinzufügen" Knopf vorhanden ist
2. Auf den "Unterziel hinzufügen" Knopf drücken
3. Prüfen ob sich der "Ziele hinzufügen" Dialog öffnet.
4. Prüfen ob in dem Dialog ein Einfagebfeld für den Ziel Namen vorhanden ist und 1 Knopf zum Abbrechen sowie 1 Knopf zum Speichern.
5. Auf Speichern drücken.
6. Prüfen ob Dialog noch offen ist.
7. Namenseingabefeld mit einem Ziel Namen füllen.
8. Auf Speichern drücken.
9. Prüfen ob Dialog sich geschlossen hat.
10. Prüfen ob Unterziel nun angezeigt wird.

### Abhaken von Unterzielen
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob es möglich ist ein Unterziel abzuhaken und sich daraus folgend die Prozentleiste anpasst.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Vorbedingung``: Es muss bereits mindestens 1 Ziel hinzugefügt und ausgeklappt worden sein. Und es muss 1 Unterziel bereits hinzugefügt worden sein.  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schritt für Schritt``:  
1. Auf Checkbox Feld vom Unterziel drücken.
2. Prüfen ob auf dem nun ein Haken ist.
3. Prüfen ob sich die Prozentleiste vom Ziel angepasst hat.
4. Auf Checkbox Feld vom Unterziel drücken.
5. Prüfen ob der Haken auf dem Checkbox Feld verschwunden ist.
6. Prüfen ob sich die Prozentleiste vom Ziel angepasst hat.

### Bearbeiten von Zielen
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob es möglich ist ein Ziel Name zu bearbeiten.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Vorbedingung``: Es muss bereits mindestens 1 Ziel hinzugefügt worden sein.  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schritt für Schritt``:  
1. Prüfen ob ein Editierungsknopf neben dem Ziel zu sehen ist.
2. Auf den Editierungsknopf drücken.
3. Prüfen ob sich ein Ziel Editieren Dialog geöffnet hat.
4. Prüfen ob in dem Dialog ein Einfagebfeld für den Ziel Namen vorhanden ist und 1 Knopf zum Abbrechen sowie 1 Knopf zum Speichern.
5. Auf Speichern drücken.
6. Prüfen ob Dialog noch offen ist.
7. Namenseingabefeld mit einem Ziel Namen füllen.
8. Auf Speichern drücken.
9. Prüfen ob Dialog sich geschlossen hat.
10. Prüfen ob neuer Ziel Name nun angezeigt wird.

### Bearbeiten von Unterzielen
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob es möglich ist ein Unterziel Name zu bearbeiten.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Vorbedingung``: Es muss bereits mindestens 1 Ziel hinzugefügt und ausgeklappt worden sein. Und es muss 1 Unterziel bereits hinzugefügt worden sein.  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schritt für Schritt``:  
1. Prüfen ob ein Editierungsknopf neben dem Unterziel zu sehen ist.
2. Auf den Editierungsknopf drücken.
3. Prüfen ob sich ein Ziel Editieren Dialog geöffnet hat.
4. Prüfen ob in dem Dialog ein Einfagebfeld für den Ziel Namen vorhanden ist und 1 Knopf zum Abbrechen sowie 1 Knopf zum Speichern.
5. Auf Speichern drücken.
6. Prüfen ob Dialog noch offen ist.
7. Namenseingabefeld mit einem Ziel Namen füllen.
8. Auf Speichern drücken.
9. Prüfen ob Dialog sich geschlossen hat.
10. Prüfen ob neuer Unterziel Name nun angezeigt wird.

### Löschen von Zielen
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob es möglich ist ein Ziel mit allen Unterzielen zu löschen.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Vorbedingung``: Es muss bereits mindestens 1 Ziel hinzugefügt worden sein.  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schritt für Schritt``:  
1. Prüfen ob ein Löschknopf neben dem Ziel zu sehen ist.
2. Auf den Löschknopf drücken.
3. Prüfen ob sich ein Ziel Löschen Dialog geöffnet hat.
4. Prüfen ob in dem Dialog 1 Knopf zum Abbrechen sowie 1 Knopf zum Löschen vorhanden ist.
5. Auf Löschen drücken.
6. Prüfen ob Dialog sich geschlossen hat.
7. Prüfen ob das Ziel nun nicht mehr sichtbar ist.

### Löschen von Unterzielen
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob es möglich ist ein Unterziel zu löschen.  
``Ausgangssituation``: Angemeldet als Kunde oder Angemeldet als Trainer  
``Vorbedingung``: Es muss bereits mindestens 1 Ziel hinzugefügt und ausgeklappt worden sein. Und es muss 1 Unterziel bereits hinzugefügt worden sein.  
``Weiter Bemerkung``: Dieser Test muss 2 Mal ausgeführt werden. 1 Mal mit einem Kunden Benutzer Konto und 1 Mal mit einem Trainer Benutzer Konto.  
``Schritt für Schritt``:  
1. Prüfen ob ein Löschknopf neben dem Unterziel zu sehen ist.
2. Auf den Löschknopf drücken.
3. Prüfen ob sich ein Ziel Löschen Dialog geöffnet hat.
4. Prüfen ob in dem Dialog 1 Knopf zum Abbrechen sowie 1 Knopf zum Löschen vorhanden ist.
5. Auf Löschen drücken.
6. Prüfen ob Dialog sich geschlossen hat.
7. Prüfen ob das Unterziel nun nicht mehr sichtbar ist.
8. Prüfen ob sich die Prozentleiste angepasst hat.

## User-Tests
### Anlegen von Usern
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob es möglich ist ein User anzulegen   
``Ausgangssituation``: Angemeldet als Trainer  
``Vorbedingung``: Die User Übersicht muss geöffnet sein.  
``Schritt für Schritt``:  
1. Prüfen ob ein "Benutzer hinzufügen" Knopf sichtbar ist.
2. Auf den "Benutzer hinzufügen" Knopf drücken.
3. Prüfen ob der Benutzer hinzufügen Dialog sich geöffnet hat.
4. Prüfen ob jeweils ein Eingabefeld für Vorname, Nachname, Username und Passwort vorhanden ist.
5. Prüfen ob ein Slider zum auswählen des Ranges vorhanden ist.
6. Auf Speichern drücken.
7. Prüfen ob der Dialog noch geöffnet ist.
8. Fülle alle Eingabefelder aus.
9. Auf Speichern drücken.
10. Prüfen ob sicher der Dialog geschlossen hat.
11. Prüfen ob der neu angelegte Benutzer in der Tabelle erscheint.

### Bearbeiten von Usern
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob es möglich ist ein User zu bearbeiten   
``Ausgangssituation``: Angemeldet als Trainer  
``Vorbedingung``: Die User Übersicht muss geöffnet sein. Es muss mindestens 1 User im System hinterlegt sein  
``Schritt für Schritt``:  
1. Prüfen ob ein Bearbeitunsknopf neben den Benutzern sichtbar ist.
2. Auf den Bearbeitungsknopf drücken.
3. Prüfen ob der Benutzer bearbeiten Dialog sich geöffnet hat.
4. Prüfen ob jeweils ein Eingabefeld für Vorname, Nachname, Username und Passwort vorhanden ist.
5. Prüfen ob ein Slider zum auswählen des Ranges vorhanden ist.
6. Verändern der Eingabefelder 
7. Auf Speichern drücken.
8.  Prüfen ob sicher der Dialog geschlossen hat.
9.  Prüfen ob der neu bearbeitete Benutzer in der Tabelle erscheint.

### Löschen von Usern
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob es möglich ist ein User zu löschen   
``Ausgangssituation``: Angemeldet als Trainer  
``Vorbedingung``: Die User Übersicht muss geöffnet sein. Es muss mindestens 1 User im System hinterlegt sein  
``Schritt für Schritt``:  
1. Prüfen ob ein Löschen Knopf neben den Benutzern sichtbar ist.
2. Auf den Löschen Knopf drücken.
3. Prüfen ob der Benutzer löschen Dialog sich geöffnet hat.
4. Prüfen ob in dem Dialog 1 Knopf zum Abbrechen sowie 1 Knopf zum Löschen vorhanden ist.
5. Auf Löschen drücken.
6. Prüfen ob Dialog sich geschlossen hat.
6. Prüfe ob der Benutzer nicht mehr in der Tabelle ist.

### Öffnen von User Zielen
``Kurzbeschreibung``: Bei diesem Test wird geprüft ob es möglich ist die Ziele von anderen Benutzern anzuzeigen  
``Ausgangssituation``: Angemeldet als Trainer  
``Vorbedingung``: Die User Übersicht muss geöffnet sein. Es muss mindestens 1 User im System hinterlegt sein  
``Schritt für Schritt``:  
1. Prüfen ob ein Flaggenknopf neben den Benutzern sichtbar ist.
2. Auf den Flaggenknopf drücken.
3. Prüfen ob sich die Zeiel Übersicht von dem ausgewählten Benutzer öffnet.
4. Prüfen ob der oben angezeigte Name dem vom ausgewählten Benutzer entspricht.