# Aufbau einer Angular Anwendung
Jede Angular Anwendung folgt einer Architektur. Einer der wichtigsten Strukturen sind die Komponenten. Diese bauen aufeinander in einer Baumstruktur auf. Die Root-Komponente, welche den Start der Anwendung abbildet, kann weitere Sub-Komponenten aufrufen, welche dann weitere Komponenten aufrufen können.  

Der erste Teil besteht aus der Auszeichnungssprache HTML. Der zweite Teil ist der Stylesheet-Sprachen Teil, welcher in der Sprache SCSS geschrieben ist. Der dritte Teil ist die Skriptsprache TypeScript. Der letzte Teil ist der Unit-Test Teil mit der Dateiendung .spec.ts.
Die wichtigste Eigenschaft einer Komponente ist, dass diese sehr unabhängig von anderen Komponenten ist.  
    
Ein weiteres wichtiges Konzept von Angular sind Services. Diese bieten die Quelle der Daten für die Komponenten an. Der Service greift auf die Daten zu und alle Komponenten können nun auf diesen Service zugreifen. Somit bleiben alle Daten konsistent.  
  
Routing: Der Router teilt jeder Ansicht in Angular eine logische URL zu. Der Router kann dazu noch, wenn eine nicht vorhandene Route eingegeben wird, dem Nutzer automatisch eine bestimmte Ansicht zeigen. Darüber hinaus kann der Router unberechtigte Zugriffe auf Ansichten sperren, und den Nutzer dann auf eine andere Ansicht weiterleiten.
Eine weitere Eigenschaft von Angular sind die Bindings, welche die Kommunikation der Logik und der grafischen Oberfläche darstellt. Angular stellt hier drei Binding Arten und eine Interpolation zur Verfügung.  
  
String Interpolation: Hierbei können Variablen des Logik-Teils in TypeScript in der grafischen Oberfläche dargestellt werden. Hier muss im HTML-Teil der Variablenname mit zwei geschweiften Klammern eingeklammert werden.  
  
Property Binding: Hier wird wieder eine Variable von TypeScript in HTML eingebunden, jedoch diesmal mit einer DOM Property. Die DOM Property ist eine Variable, welche während der Laufzeit angepasst werden kann.  
  
Event Binding: Hierbei reagiert, anders als bei den zuvor gezeigten Kommunikationsarten, der logische TypeScript-Teil auf das HTML-Element. Hierbei wird mit dem Schlüsselwort $event auf die Daten zugegriffen. Dies wird verwendet im z.B. Button drücken wahrzunehmen.  
  
Two-Way Binding: Hierbei kann sowohl die Logik auf die Grafische Oberfläche zugreifen als auch die grafische Oberfläche auf die Logik. Diese Art der Kommunikation wird oft bei Eingaben in Textfelder oder Formulare benötigt.  

# Was im Projekt verwendet wird
In diesem Projekt werden die Components welche auf bestimmte URL Routen reagieren über den Angular Router verwaltet.  

Guards werden verwendet um die Components vor "unberechtigen" Aufrufen zu schützen und um automatische Weiterleitungen zu realsieren.  

In diesem Projekt werden die Services stark von Componenten getrennt. Mehr dazu in den [Entwurfmuster](Entwurfsmuster.md).

Property Binding, Event Binding und Two-Way Binding wird verwendet um den Logic Code mit den DOM interagieren zu lassen.
