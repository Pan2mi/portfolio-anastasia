export const competenceCouleurs = {
  pedagogique: '#F5C4B3',
  dev:         '#9FE1CB',
  immersif:    '#B5D4F4',
  gestion:     '#C0DD97',
  ia:          '#CECBF6',
};

export function couleurPrincipale(competences) {
  return competenceCouleurs[competences?.[0]] ?? '#CECBF6';
}
