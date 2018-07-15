
export class Photos {
  url: string;
  urlMobile: string;
}

export class Medikamente {
  id: string;
  title: string;
  menge: string;
  form: string;
  start: string;
  ende: string;
  erstellungsdatum: string;
  modifierungsdatum: string;
  erstellerkuerzel: string;
}

export class Team {
  id: string;
  patientenId: string;
  title: string;
  beschreibung: string;
  name: string;
  role: string;
}

export class Patient {
  id: string;
  fallnr: string;
  url: string;
  name: string;
  gebDatum: string;
  geschlecht: string;
  aufnahmeDatum: string;
  entlassungDatum: string;
  krankenkasse: string;
  beschreibung: string;
  vitalparameter: Vitalzeichen[];
  medikamente: Medikamente[];
  careTeam: Team[];
  diagnose: Diagnose;
  zugriffsprotokoll: Zugriffsprotokoll[];
}

export class Diagnose {
  patientenId: string;
  title: string;
  hauptdiagnose: string;
  nebendiagnose: string;
  besonderheiten: string;

}
export class Zugriffsprotokoll {
  patientenId: string;
  zeitpunkt: string;
  zugriffvon: string;
  geaenderteDaten: Daten[];
}

export class Vitalzeichen {
  id: string;
  patientenId: string;
  datum: string;
  systolisch: string;
  diastolisch: string;
  puls: string;
  temperatur: string;
  zucker: string;
}
export class Daten {
  title: string;
  beschreibung: string;
}
export class Epd {
  id: string;
  title: string;
  beschreibung: string;
  patienten: Patient[];
  logoUrl: string;
  hintergrundbilder: Photos[];
}
