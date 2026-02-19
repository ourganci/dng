// city.config.ts
export interface CityData {
  name: string;
  region: string;
  localHook: string;
  solarHours: number; // Jährliche Sonnenstunden (Durchschnittswerte der Region)
}

export const CITY_CONFIG: Record<string, CityData> = {
  // --- Nahe-Glan Region (Kern-Gebiet) ---
  'bad-kreuznach': { 
    name: 'Bad Kreuznach', 
    region: 'Nahe-Glan', 
    localHook: 'Kurstadt an der Nahe', 
    solarHours: 1680 
  },
  'kirn': { 
    name: 'Kirn', 
    region: 'Nahe-Glan', 
    localHook: 'Lederstadt an der Nahe', 
    solarHours: 1625 
  },
  'idar-oberstein': { 
    name: 'Idar-Oberstein', 
    region: 'Nahe-Glan', 
    localHook: 'Edelsteinstadt', 
    solarHours: 1595 
  },
  'birkenfeld': { 
    name: 'Birkenfeld', 
    region: 'Nahe-Glan', 
    localHook: 'Kreisstadt im Oberen Nahegebiet', 
    solarHours: 1585 
  },
  'meisenheim': { 
    name: 'Meisenheim', 
    region: 'Nahe-Glan', 
    localHook: 'Historische Stadt am Glan', 
    solarHours: 1610 
  },
  'sobernheim': { 
    name: 'Bad Sobernheim', 
    region: 'Naheland', 
    localHook: 'Felkestadt an der Nahe', 
    solarHours: 1645 
  },

  // --- Rheinhessen / Rhein-Main ---
  'mainz': { 
    name: 'Mainz', 
    region: 'Rheinhessen', 
    localHook: 'Landeshauptstadt', 
    solarHours: 1715 
  },
  'wiesbaden': { 
    name: 'Wiesbaden', 
    region: 'Rhein-Main', 
    localHook: 'Hessische Landeshauptstadt', 
    solarHours: 1695 
  },
  'bingen': { 
    name: 'Bingen am Rhein', 
    region: 'Rhein-Nahe', 
    localHook: 'Stadt am UNESCO-Welterbe', 
    solarHours: 1675 
  },
  'ingelheim': { 
    name: 'Ingelheim am Rhein', 
    region: 'Rheinhessen', 
    localHook: 'Rotweinstadt im Rheinknie', 
    solarHours: 1705 
  },
  'alzey': { 
    name: 'Alzey', 
    region: 'Rheinhessen', 
    localHook: 'Heimliche Hauptstadt Rheinhessens', 
    solarHours: 1710 
  },
  'worms': { 
    name: 'Worms', 
    region: 'Rheinhessen', 
    localHook: 'Nibelungenstadt', 
    solarHours: 1720 
  },
  'woerrstadt': { 
    name: 'Wörrstadt', 
    region: 'Rheinhessen', 
    localHook: 'Herz von Rheinhessen', 
    solarHours: 1700 
  },

  // --- Westpfalz ---
  'kaiserslautern': { 
    name: 'Kaiserslautern', 
    region: 'Westpfalz', 
    localHook: 'Zentrum der Westpfalz', 
    solarHours: 1640 
  },
  'zweibruecken': { 
    name: 'Zweibrücken', 
    region: 'Westpfalz', 
    localHook: 'Rosenstadt', 
    solarHours: 1630 
  },
  'pirmasens': { 
    name: 'Pirmasens', 
    region: 'Westpfalz', 
    localHook: 'Siebenhügelstadt', 
    solarHours: 1625 
  },
  'kirchheimbolanden': { 
    name: 'Kirchheimbolanden', 
    region: 'Donnersbergkreis', 
    localHook: 'Residenzstadt am Donnersberg', 
    solarHours: 1615 
  },
  'rockenhausen': { 
    name: 'Rockenhausen', 
    region: 'Donnersbergkreis', 
    localHook: 'Stadt im Alsenztal', 
    solarHours: 1605 
  },

  // --- Vorderpfalz ---
  'ludwigshafen': { 
    name: 'Ludwigshafen', 
    region: 'Vorderpfalz', 
    localHook: 'Metropole am Rhein', 
    solarHours: 1715 
  },
  'neustadt': { 
    name: 'Neustadt an der Weinstraße', 
    region: 'Weinstraße', 
    localHook: 'Zentrum der Weinstraße', 
    solarHours: 1725 
  },
  'speyer': { 
    name: 'Speyer', 
    region: 'Vorderpfalz', 
    localHook: 'Domstadt am Rhein', 
    solarHours: 1710 
  },
  'landau': { 
    name: 'Landau in der Pfalz', 
    region: 'Südpfalz', 
    localHook: 'Gartenstadt der Südpfalz', 
    solarHours: 1720 
  },
  'bad-duerkheim': { 
    name: 'Bad Dürkheim', 
    region: 'Weinstraße', 
    localHook: 'Kurstadt an der Haardt', 
    solarHours: 1720 
  },

  // --- Hunsrück / Mittelrhein ---
  'simmern': { 
    name: 'Simmern', 
    region: 'Hunsrück', 
    localHook: 'Kreisstadt im Hunsrück', 
    solarHours: 1580 
  },
  'koblenz': { 
    name: 'Koblenz', 
    region: 'Mittelrhein', 
    localHook: 'Stadt am Deutschen Eck', 
    solarHours: 1635 
  },

  // --- Mosel / Saar ---
  'trier': { 
    name: 'Trier', 
    region: 'Moseltal', 
    localHook: 'Älteste Stadt Deutschlands', 
    solarHours: 1610 
  },
  'saarbruecken': { 
    name: 'Saarbrücken', 
    region: 'Saarland', 
    localHook: 'Landeshauptstadt an der Saar', 
    solarHours: 1650 
  },
  'homburg': { 
    name: 'Homburg', 
    region: 'Saarpfalz', 
    localHook: 'Universitätsstadt', 
    solarHours: 1645 
  }
};