# Entwurfsmuster
In diesem Dokument wird erklärt welche Entwurfsmuster wir in welchen Typescript Klassen verwendet haben.

# Services als Fassade
In diesem Projekt gibt es mehrere Services.  
Jeder dieser Services hat einen spezifischen Nutzern. Dabei stellen diese vereinfachte Methoden zur Verfügung und die Services kümmern sich dann um die entsprechende Weiterverarbeitung.

## ID Service
Der ID Service stellt Methoden zur Verfügung welche sich um das berechen, erstellen oder auslesen von möglichst eindeutigen IDs kümmert.  
Die Methoden welche IDs generieren bilden damit die Grundlage für ein Entwurfsmuster einer Fassade. Daher ist die ganze Klasse als Fassade anzusehen.
  
## User Service
Der User Service kümmert sich um das erstellen oder abspeichern von Usern sowie dem Bereitsstellen von User Informationen.  
Dieser Service bildet damit auch ein vereinfachtes Modell einer Fassade ab.

## Goal Service
Der Goal Service kümmert sich um das erstellen oder abspeichern von Zielen sowie um die Bearbeitung der User Entitäten.  
Dieser Service bildet damit auch ein vereinfachtes Modell einer Fassade ab.

# Services als Singelton
In Angular kümmert sich der Dependency Injektor automatisch darum das alle Services nur 1 mal erstellt werden. Deswegen ist in den Servive Klassen auch kein seperater Coder für das Entwurfsmusters eines Singeltons vorhanden. Der Dependency Injektor instanziert diese Klassen selbstständig und verwaltet diese Objekte auch.

# Observable für angemeldeten Benutzer
Im AuthorizationService wird immer gespeichert ob und welcher Benutzer gerade angemeldet ist. Da ein Logout und ein Login folgen auf viele Componenten in diesem Projekt hat sind beide Eigenschaften ``BehaviorSubject``s welche ebenfalls als Observable verwendet werden können. ``BehaviorSubject`` stellen noch ein paar mehr Methoden zur Verfügung welche das verändern des Inhaltes erlauben. Das direkte Verändern des Inhaltes wird ausserhalb der Klasse nicht gestattet und daher stehen die beiden Eigenschaften ausserhalb der Klasse nur als Observable zur Verfügung.

# Userbuilder als Builder
Um ein Userobjekt zu erzeugen gibt es den UserBuilder. Dieser kümmert sich um das erstellen von Userobjekten und verwaltet auch gleichzeit das fehlen von Informationen.  
Dabei verfolgt diese Klasse streng dem Entwurfsmuster eines Builders.