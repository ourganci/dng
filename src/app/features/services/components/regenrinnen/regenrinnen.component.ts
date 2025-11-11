import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-regenrinnen',
  imports: [CtaButtonComponent],
  templateUrl: './regenrinnen.component.html',
  styleUrl: './regenrinnen.component.scss'
})
export class RegenrinnenComponent {

  constructor(private titleService: Title, private metaService: Meta) { }

  faqs = [
    {
      question: 'Wie oft sollten Regenrinnen gereinigt werden?',
      answer: 'Mindestens zweimal jährlich – idealerweise im Frühjahr und Herbst. Bei vielen Bäumen in der Nähe empfehlen wir häufigere Kontrollen.',
      isOpen: false
    },
    {
      question: 'Was kostet eine Rinnenreinigung?',
      answer: 'Die Kosten hängen von der Länge und Zugänglichkeit der Rinnen ab. In der Regel liegen die Kosten bei 2-5€ pro laufendem Meter. Kontaktieren Sie uns für ein genaues Angebot.',
      isOpen: false
    },
    {
      question: 'Welches Material ist am besten für Regenrinnen?',
      answer: 'Kupfer ist sehr langlebig (50+ Jahre), aber teurer. Zink ist robust und preiswert. Aluminium ist leicht und korrosionsbeständig. Kunststoff ist kostengünstig, aber weniger langlebig. Wir beraten Sie gerne.',
      isOpen: false
    },
    {
      question: 'Lohnt sich ein Laubschutz?',
      answer: 'Ja, besonders bei vielen Bäumen in der Nähe. Ein Laubschutzgitter reduziert den Reinigungsaufwand erheblich und verhindert Verstopfungen.',
      isOpen: false
    }
  ];

ngOnInit(): void {
  this.titleService.setTitle('Regenrinnen Nahe Glan – Reinigung, Reparatur & Laubschutz | DNG');
  
  this.metaService.updateTag({ 
    name: 'description', 
    content: 'Regenrinnen reinigen, reparieren & austauschen vom Meisterbetrieb. Zink, Kupfer, Alu & Kunststoff. Inkl. Laubschutzsysteme & Fallrohre. Jetzt Service buchen!' 
  });
  
  this.metaService.updateTag({ 
    name: 'keywords', 
    content: 
      // Hauptdienstleistungen - Regenrinnen
      'Regenrinnen Nahe Glan, Dachrinnen Nahe Glan, Regenrinne installieren, Dachrinne montieren, Regenrinnen anbringen, Dachrinne einbauen, neue Regenrinne, neue Dachrinne, ' +
      
      // Reinigung
      'Rinnenreinigung, Dachrinnenreinigung, Regenrinne reinigen, Regenrinne reinigen lassen, verstopfte Regenrinne, Dachrinne säubern, Laub entfernen Dachrinne, Dachrinne verstopft, ' +
      
      // Reparatur
      'Regenrinne reparieren, Dachrinne reparieren, undichte Regenrinne, Regenrinne undicht, Dachrinne leckt, Regenrinne tropft, Dachrinne löten, Regenrinne abdichten, Rinne verbogen, ' +
      
      // Austausch & Erneuerung
      'Regenrinne austauschen, Dachrinne erneuern, alte Regenrinne ersetzen, Dachrinne wechseln, Komplettsanierung Regenrinne, Rinnensanierung, Dachrinne Erneuerung, ' +
      
      // Materialien
      'Zink Regenrinne, Kupfer Dachrinne, Aluminium Regenrinne, Kunststoff Dachrinne, verzinktes Blech Rinne, Titanzink Dachrinne, PVC Regenrinne, Metall Dachrinne, ' +
      
      // Laubschutz & Schutzgitter
      'Laubschutz Dachrinne, Laubschutzsystem, Laubfänger Regenrinne, Rinnenschutz, Laubgitter Dachrinne, Marderschutz Dachrinne, Laubschutzgitter montieren, Rinnensieb, Laubfangsieb, ' +
      
      // Fallrohre
      'Fallrohr, Fallrohr installieren, Fallrohr verstopft, Fallrohr reinigen, Regenfallrohr, Regenrohr, Abflussrohr Dach, Fallrohr reparieren, Fallrohr austauschen, ' +
      
      // Entwässerung
      'Dachentwässerung, Regenwasserableitung, Dachentwässerungssystem, Regenwasser ableiten, Entwässerung Dach, Regenablauf, Rinnenablauf, Dachablauf, ' +
      
      // Wartung & Inspektion
      'Dachrinne Wartung, Regenrinne überprüfen, Rinnenkontrolle, regelmäßige Rinnenreinigung, Dachrinne kontrollieren, Wartungsvertrag Dachrinne, präventive Reinigung, ' +
      
      // Problemstellungen & Schäden
      'Regenrinne überlaufen, Wasser läuft über Dachrinne, Regenrinne durchgerostet, Regenrinne korrodiert, Risse Dachrinne, Dachrinne lose, Rinnenhalter defekt, Rinne hängt durch, ' +
      
      // Schadensfolgen (Motivation)
      'Feuchteschaden durch Regenrinne, Wasserschaden Fassade, Fassade verschmutzt, Sockel durchfeuchtet, Schimmel durch undichte Rinne, Dachrinne Frostschaden, ' +
      
      // Installation & Montage
      'Rinnenhalter montieren, Dachrinne befestigen, Rinneneisen, Rinnenhaken, Dachrinne Gefälle, Rinne Montage, fachgerechte Installation Dachrinne, ' +
      
      // Zubehör & Komponenten
      'Rinnenwinkel, Rinnenstutzen, Rinnenendstück, Rinnenboden, Rinnenstopfen, Rinnenverbinder, Rinnenecke, Rinnenklappe, Ablaufsieb, ' +
      
      // Gebäudetypen
      'Regenrinne Einfamilienhaus, Dachrinne Mehrfamilienhaus, Regenrinne Gewerbe, Dachrinne Halle, Regenrinne Garage, Dachrinne Carport, Regenrinne Altbau, Dachrinne Neubau, ' +
      
      // Dachtypen
      'Regenrinne Steildach, Dachrinne Flachdach, Regenrinne Satteldach, Dachrinne Walmdach, Regenrinne Pultdach, kastenförmige Rinne, halbrunde Rinne, ' +
      
      // Zeitliche & saisonale Aspekte
      'Rinnenreinigung Herbst, Dachrinne vor Winter reinigen, Laub entfernen Herbst, Frühjahrskontrolle Dachrinne, regelmäßige Reinigung, Jahresreinigung Regenrinne, ' +
      
      // Kosten & Preise
      'Dachrinne reinigen Kosten, Regenrinne austauschen Preis, was kostet Rinnenreinigung, Dachrinne montieren Kosten, Kosten neue Regenrinne, Preis Laubschutz, ' +
      
      // Long-Tail Keywords (Kaufintention)
      'Regenrinne reinigen lassen, Dachrinne reparieren lassen, Rinnenreinigung beauftragen, Regenrinne in meiner Nähe, Dachdecker Regenrinne, Fachbetrieb Dachrinne, ' +
      
      // Notfall & Dringlichkeit
      'Regenrinne Notdienst, dringende Rinnenreparatur, Regenrinne schnell reparieren, Sofort-Service Dachrinne, Regenrinne am Wochenende, Notfall verstopfte Rinne, ' +
      
      // Zusatzleistungen
      'Dachrinne mit Heizkabel, Rinnenheizung, beheizte Dachrinne, Eisfrei Regenrinne, Schneefanggitter, Dachrinne Photovoltaik, Regenrinne bei Dachsanierung, ' +
      
      // Qualität & Fachbetrieb
      'Regenrinne Meisterbetrieb, Dachdecker Fachbetrieb, professionelle Rinnenreinigung, Qualität Dachrinne, fachgerechte Montage, zertifizierter Dachdecker, Fachmann Regenrinne, ' +
      
      // Umwelt & Nachhaltigkeit
      'Regenwasser sammeln, Regenwassernutzung, Zisterne Anschluss, Regenwassertank, Regentonne anschließen, Regenwasser Garten, ökologische Dachentwässerung, ' +
      
      // Regionale Keywords - Nahe Glan Region
      'Regenrinnen Bad Kreuznach, Dachrinnen Kirn, Rinnenreinigung Idar-Oberstein, Regenrinne Birkenfeld, Dachrinne Meisenheim, Regenrinne Sobernheim, Dachrinne Bingen, ' +
      
      // Regionale Keywords - Rheinland-Pfalz
      'Regenrinnen Mainz, Dachrinnen Wiesbaden, Rinnenreinigung Kaiserslautern, Regenrinne Koblenz, Dachrinne Trier, Regenrinne Ludwigshafen, Dachrinne Worms, ' +
      
      // Regionale Keywords - erweitert
      'Regenrinnen Rheinland-Pfalz, Dachrinnen Saarland, Rinnenreinigung Saarbrücken, Regenrinne Kirchheimbolanden, Dachrinne Alzey, Regenrinne Ingelheim'
  });

  // Open Graph und Twitter Card Tags für Social Sharing
  this.metaService.updateTag({ 
    property: 'og:title', 
    content: 'Regenrinnen-Service – Reinigung, Reparatur & Laubschutz | DNG GmbH' 
  });
  
  this.metaService.updateTag({ 
    property: 'og:description', 
    content: 'Regenrinnen reinigen, reparieren & austauschen vom Meisterbetrieb. Zink, Kupfer, Alu & Kunststoff. Inkl. Laubschutzsysteme & Fallrohre. Jetzt Service buchen!' 
  });
  
  this.metaService.updateTag({ 
    property: 'og:type', 
    content: 'website' 
  });
  
  // this.metaService.updateTag({ property: 'og:image', content: 'https://www.dng-nahe-glan.de/assets/images/services/regenrinnen-og.jpg' }); // Optional: Bild-URL hinzufügen
  
  this.metaService.updateTag({ 
    name: 'twitter:card', 
    content: 'summary_large_image' 
  });
}


  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
