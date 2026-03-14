export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      legitimacy: 'Nos licences',
      projects: 'Nos projets',
      process: 'Notre processus',
      testimonials: 'Témoignages',
      quote: 'Soumission gratuite'
    },
    hero: {
      title: 'Peinture résidentielle à Montréal',
      subtitle: 'Tranquillité d\'esprit garantie',
      description: 'Licenciés RBQ, assurés et transparents. Nous prouvons notre légitimité, notre savoir-faire et nos prix clairs pour que votre projet de peinture se déroule en toute confiance.',
      cta: 'Demander une soumission',
      ctaSecondary: 'Vérifier nos licences'
    },
    legitimacy: {
      title: 'Légitimité prouvée',
      subtitle: 'Licenciés, assurés et membres APCHQ',
      description: 'Nous sommes un entrepreneur légitime avec toutes les certifications requises au Québec.',
      rbq: 'Licence RBQ',
      neq: 'NEQ (Registre des entreprises)',
      apchq: 'Membre APCHQ',
      insurance: 'Assurance responsabilité',
      cta: 'Voir tous nos documents'
    },
    neighbourhood: {
      title: 'Nos projets près de chez vous',
      subtitle: 'Quartiers de Montréal où nous avons travaillé',
      description: 'Des projets réels, avec dates et emplacements. Voyez où nous avons transformé des maisons comme la vôtre.',
      cta: 'Explorer la carte des projets',
      recent: 'Récent',
      viewProject: 'Voir le projet'
    },
    craft: {
      title: 'Qualité de finition exceptionnelle',
      subtitle: 'Chaque détail compte',
      description: 'Photos haute résolution de nos travaux réels. Pas de photos truquées, seulement notre savoir-faire authentique.',
      beforeAfter: 'Avant / Après',
      materials: 'Produits Sherwin-Williams premium',
      cta: 'Voir tous nos projets'
    },
    transparency: {
      title: 'Prix transparents, sans surprises',
      subtitle: 'Vous savez exactement ce que vous payez',
      description: 'Soumission détaillée avec portée claire. Aucun frais caché.',
      included: 'Ce qui est inclus',
      checklist: {
        prep: 'Préparation complète (masquage, ponçage, apprêt)',
        protection: 'Protection de vos meubles et planchers',
        coats: '2-3 couches de peinture premium',
        cleanup: 'Nettoyage final et inspection',
        warranty: 'Garantie de finition'
      },
      cta: 'Demander une soumission détaillée'
    },
    social: {
      title: 'Ce que disent nos clients',
      subtitle: 'Avis vérifiés de vrais projets',
      description: 'Témoignages authentiques de propriétaires de Montréal.',
      verified: 'Avis vérifié',
      cta: 'Écouter plus de témoignages'
    },
    footer: {
      tagline: 'Peinture résidentielle de confiance à Montréal',
      contact: 'Contact',
      legal: 'Licences',
      hours: 'Heures d\'ouverture',
      weekdays: 'Lun-Ven: 8h-18h',
      saturday: 'Sam: 9h-17h',
      copyright: 'Tous droits réservés.'
    },
    cta: {
      request_quote: 'Demander une soumission',
      verify_credentials: 'Vérifier nos licences',
      view_local_projects: 'Voir nos projets près de chez vous',
      watch_testimonials: 'Écouter des témoignages',
      schedule_booking: 'Planifier les travaux'
    }
  },
  en: {
    nav: {
      home: 'Home',
      legitimacy: 'Our licences',
      projects: 'Our projects',
      process: 'Our process',
      testimonials: 'Testimonials',
      quote: 'Free quote'
    },
    hero: {
      title: 'Residential Painting in Montreal',
      subtitle: 'Peace of mind guaranteed',
      description: 'RBQ licensed, insured, and transparent. We prove our legitimacy, craftsmanship, and clear pricing so your painting project proceeds with confidence.',
      cta: 'Request a quote',
      ctaSecondary: 'Verify our credentials'
    },
    legitimacy: {
      title: 'Proven legitimacy',
      subtitle: 'Licensed, insured, and APCHQ members',
      description: 'We are a legitimate contractor with all required certifications in Quebec.',
      rbq: 'RBQ Licence',
      neq: 'NEQ (Business Registry)',
      apchq: 'APCHQ Member',
      insurance: 'Liability Insurance',
      cta: 'View all our documents'
    },
    neighbourhood: {
      title: 'Our projects near you',
      subtitle: 'Montreal neighbourhoods where we\'ve worked',
      description: 'Real projects with dates and locations. See where we\'ve transformed homes like yours.',
      cta: 'Explore project map',
      recent: 'Recent',
      viewProject: 'View project'
    },
    craft: {
      title: 'Exceptional finish quality',
      subtitle: 'Every detail matters',
      description: 'High-resolution photos of our real work. No staged photos, just authentic craftsmanship.',
      beforeAfter: 'Before / After',
      materials: 'Premium Sherwin-Williams products',
      cta: 'View all our projects'
    },
    transparency: {
      title: 'Transparent pricing, no surprises',
      subtitle: 'You know exactly what you\'re paying for',
      description: 'Detailed quote with clear scope. No hidden fees.',
      included: 'What\'s included',
      checklist: {
        prep: 'Complete preparation (masking, sanding, primer)',
        protection: 'Protection of your furniture and floors',
        coats: '2-3 coats of premium paint',
        cleanup: 'Final cleanup and inspection',
        warranty: 'Finish warranty'
      },
      cta: 'Request a detailed quote'
    },
    social: {
      title: 'What our clients say',
      subtitle: 'Verified reviews from real projects',
      description: 'Authentic testimonials from Montreal homeowners.',
      verified: 'Verified review',
      cta: 'Watch more testimonials'
    },
    footer: {
      tagline: 'Trusted residential painting in Montreal',
      contact: 'Contact',
      legal: 'Licences',
      hours: 'Business hours',
      weekdays: 'Mon-Fri: 8am-6pm',
      saturday: 'Sat: 9am-5pm',
      copyright: 'All rights reserved.'
    },
    cta: {
      request_quote: 'Request a quote',
      verify_credentials: 'Verify our credentials',
      view_local_projects: 'View our local projects',
      watch_testimonials: 'Watch testimonials',
      schedule_booking: 'Schedule project'
    }
  }
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en' as const;
  return 'fr' as const;
}

export function useTranslations(lang: keyof typeof translations) {
  return translations[lang];
}
