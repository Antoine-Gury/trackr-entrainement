import type { Colis } from '../types'

/** Normalise une saisie : espaces autour retirés, majuscules (« fr123 » -> « FR123 »). */
export function normaliserNumero(saisie: string): string {
  return saisie.trim().toUpperCase()
}

/** Colis dont le numéro de suivi contient la saisie. Saisie vide : tous les colis. */
export function rechercherColis(colis: Colis[], saisie: string): Colis[] {
  const requete = normaliserNumero(saisie)
  if (requete === '') return colis
  return colis.filter((c) => c.numeroSuivi.includes(requete))
}
