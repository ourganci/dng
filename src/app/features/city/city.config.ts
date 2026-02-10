// city.config.ts
export const CITY_CONFIG: Record<string, {
  name: string;
  region: string;
}> = {
  // Nahe-Glan Region (Kern-Gebiet)
  'bad-kreuznach': {
    name: 'Bad Kreuznach',
    region: 'Nahe-Glan'
  },
  'kirn': {
    name: 'Kirn',
    region: 'Nahe-Glan'
  },
  'idar-oberstein': {
    name: 'Idar-Oberstein',
    region: 'Nahe-Glan'
  },
  'birkenfeld': {
    name: 'Birkenfeld',
    region: 'Nahe-Glan'
  },
  'meisenheim': {
    name: 'Meisenheim',
    region: 'Nahe-Glan'
  },
  'sobernheim': {
    name: 'Sobernheim',
    region: 'Naheland'
  },

  // Rhein-Main / Rheinhessen
  'mainz': {
    name: 'Mainz',
    region: 'Rheinhessen'
  },
  'wiesbaden': {
    name: 'Wiesbaden',
    region: 'Rhein-Main'
  },
  'bingen': {
    name: 'Bingen am Rhein',
    region: 'Rhein-Nahe'
  },
  'ingelheim': {
    name: 'Ingelheim am Rhein',
    region: 'Rheinhessen'
  },
  'alzey': {
    name: 'Alzey',
    region: 'Rheinhessen'
  },
  'worms': {
    name: 'Worms',
    region: 'Rheinhessen'
  },
  'woerrstadt': {
    name: 'Wörrstadt',
    region: 'Rheinhessen'
  },

  // Westpfalz
  'kaiserslautern': {
    name: 'Kaiserslautern',
    region: 'Westpfalz'
  },
  'zweibruecken': {
    name: 'Zweibrücken',
    region: 'Westpfalz'
  },
  'pirmasens': {
    name: 'Pirmasens',
    region: 'Westpfalz'
  },
  'kirchheimbolanden': {
    name: 'Kirchheimbolanden',
    region: 'Donnersbergkreis'
  },
  'rockenhausen': {
    name: 'Rockenhausen',
    region: 'Donnersbergkreis'
  },

  // Vorderpfalz
  'ludwigshafen': {
    name: 'Ludwigshafen',
    region: 'Vorderpfalz'
  },
  'neustadt': {
    name: 'Neustadt an der Weinstraße',
    region: 'Weinstraße'
  },
  'speyer': {
    name: 'Speyer',
    region: 'Vorderpfalz'
  },
  'landau': {
    name: 'Landau in der Pfalz',
    region: 'Südpfalz'
  },
  'bad-duerkheim': {
    name: 'Bad Dürkheim',
    region: 'Weinstraße'
  },

  // Hunsrück / Mittelrhein
  'simmern': {
    name: 'Simmern',
    region: 'Hunsrück'
  },
  'koblenz': {
    name: 'Koblenz',
    region: 'Mittelrhein'
  },

  // Mosel
  'trier': {
    name: 'Trier',
    region: 'Moseltal'
  },

  // Saarland (Grenzregion)
  'saarbruecken': {
    name: 'Saarbrücken',
    region: 'Saarland'
  },
  'homburg': {
    name: 'Homburg',
    region: 'Saarpfalz'
  }
};
