import type { ArticleBody } from './types';

export const contextArticleFr: ArticleBody = {
  introduction: [
    'Un assistant IA peut parler couramment français et rester mal adapté à une salle de classe au Cameroun. Un outil de travail peut afficher la bonne langue tout en supposant une connexion, un format de document ou un processus de validation auxquels ses utilisateurs n’ont pas accès.',
    'La traduction compte. Les personnes doivent pouvoir comprendre les outils qu’elles utilisent. Mais la langue n’est qu’une couche du produit : son utilité dépend aussi de la tâche, des informations disponibles et de ce qui se passe lorsque le système se trompe.',
    'Pour les équipes qui conçoivent des produits d’IA pour les marchés africains, le contexte doit figurer dans le brief initial. Il doit guider le produit, les données, l’interface et la manière de mesurer la réussite.',
  ],
  sections: [
    {
      id: 'start-with-a-specific-context',
      title: 'Commencer par un contexte précis, pas par un continent',
      paragraphs: [
        {
          text: '« L’Afrique » est un cadre utile pour parler d’opportunités. Ce n’est pas une spécification produit. Les pays, les institutions, les langues, les métiers et les situations individuelles créent des besoins différents.',
        },
        {
          text: 'Nommez d’abord les personnes et la tâche. Un enseignant qui prépare des exercices, un apprenant qui révise après un cours et une équipe qui vérifie des documents ont besoin d’informations, d’interactions et de garde-fous différents.',
        },
        {
          text: 'Avant de choisir un modèle, observez le processus existant : qu’est-ce qui déclenche la tâche, d’où vient l’information, qui vérifie le résultat et que faut-il faire ensuite ?',
        },
      ],
    },
    {
      id: 'language-is-more-than-a-setting',
      title: 'La langue est plus qu’un réglage',
      paragraphs: [
        {
          text: 'Une interface traduite ne prouve pas qu’un modèle comprend la langue réellement utilisée. Les personnes peuvent employer des expressions locales, du vocabulaire spécialisé, des abréviations ou plusieurs langues dans un même échange.',
        },
        {
          text: 'Les travaux de la communauté Masakhane offrent un exemple pertinent : la traduction automatique participative implique les personnes qui développent les jeux de données et évaluent les traductions, y compris au-delà des rôles de recherche habituels.',
          source: 1,
        },
        {
          text: 'La leçon produit est simple : faire participer tôt les locuteurs et les praticiens du domaine. Vérifier si une réponse est compréhensible, appropriée et utile pour la tâche.',
        },
      ],
    },
    {
      id: 'design-for-the-whole-session',
      title: 'Concevoir toute la session, interruptions comprises',
      diagram: {
        title: 'Des mots aux conditions d’usage',
        steps: [
          'Traduction : des mots compréhensibles',
          'Localisation : un sens familier',
          'Contexte : les conditions réelles',
          'Produit : un résultat utile',
        ],
        caption:
          'Un cadre conceptuel : chaque couche ajoute une question de conception sans remplacer la précédente.',
      },
      paragraphs: [
        {
          text: 'L’accès ne se résume pas à la couverture réseau. Dans ses recherches de 2025 sur l’inclusion numérique en Afrique, la GSMA identifie le coût des appareils, la culture numérique et la disponibilité de contenus pertinents comme des obstacles à l’adoption.',
          source: 2,
        },
        {
          text: 'Pour une équipe produit, les questions sont concrètes : combien de données une tâche consomme-t-elle ? Reste-t-elle utilisable sur les appareils disponibles ? En cas d’échec, peut-on reprendre sans recommencer ?',
        },
        {
          text: 'Lorsque ces besoins sont établis, envisager des transferts plus légers, des états de chargement explicites, des téléversements récupérables et une progression sauvegardée avec des contrôles de confidentialité adaptés.',
        },
      ],
    },
    {
      id: 'evaluate-against-the-real-task',
      title: 'Évaluer par rapport à la tâche réelle',
      paragraphs: [
        {
          text: 'La fluidité se remarque facilement. Une incompatibilité avec un programme, un document ou une procédure est plus difficile à repérer. Une explication convaincante peut utiliser une méthode inconnue ou des informations impossibles à vérifier.',
        },
        {
          text: 'Prenons un scénario d’apprentissage : un élève demande de l’aide pour un exercice de mathématiques. Concevoir pour ce contexte implique de vérifier le niveau attendu, la méthode enseignée, la formulation de l’exercice et la capacité de l’explication à aider l’élève à franchir l’étape suivante.',
        },
        {
          text: 'Construire un jeu de tests à partir de tâches réalistes. Inclure des demandes ambiguës, des informations manquantes et des questions auxquelles le système ne devrait pas répondre avec assurance. Faire évaluer la justesse et l’utilité par des praticiens.',
        },
      ],
    },
    {
      id: 'make-trust-actionable',
      title: 'Rendre la confiance concrète et actionnable',
      paragraphs: [
        {
          text: 'La confiance a besoin de mécanismes visibles. Les utilisateurs doivent pouvoir voir quel document soutient une réponse, corriger une donnée, comprendre ce qui sera partagé et joindre une personne lorsque la tâche l’exige.',
        },
        {
          text: 'L’initiative AI for Africa de l’UNESCO place les langues locales, les compétences, les infrastructures et la gouvernance dans une même réflexion. Cela pose une question produit essentielle : qui participe à la conception du système et qui reste responsable de son usage ?',
          source: 3,
        },
        {
          text: 'Pour un outil opérationnel, concevoir les étapes de vérification et de correction avec la génération. Distinguer une suggestion d’une décision approuvée, collecter seulement les informations nécessaires et définir un recours humain avant la mise en production.',
        },
      ],
    },
    {
      id: 'context-is-a-product-discipline',
      title: 'Le contexte est une discipline produit',
      paragraphs: [
        {
          text: 'Chez SynapsAi, notre travail comprend ImaginAi : un écosystème éducatif avec une application mobile pour les apprenants et une plateforme web pour les enseignants.',
          link: { label: 'Explorer l’écosystème ImaginAi', href: '/fr/products/imaginai' },
        },
        {
          text: 'Un apprenant a besoin de progresser. Un enseignant a besoin d’outils pour organiser et accompagner cet apprentissage. La valeur de l’écosystème dépend de l’adéquation de chaque expérience à ses utilisateurs et de la manière dont elles se relient.',
        },
        {
          text: 'Nous voyons l’opportunité plus large de l’IA de la même façon : partir d’un besoin clair, rendre les contraintes explicites et construire un système que les personnes peuvent comprendre et utiliser. Ces pratiques sont des recommandations, pas une affirmation que chaque capacité est déjà déployée dans nos produits.',
        },
      ],
    },
    {
      id: 'questions-before-you-build',
      title: 'Cinq questions à poser avant de construire',
      paragraphs: [
        {
          text: 'Un premier brief utile doit permettre de répondre aux questions suivantes. Si les réponses restent vagues, passer plus de temps avec les personnes et le processus avant d’ajouter des fonctionnalités.',
        },
      ],
      points: [
        'Qui réalise quelle tâche et à quoi ressemble un résultat utile pour cette personne ?',
        'Quelles langues, références et pratiques de travail le système doit-il comprendre ?',
        'Quels appareils, conditions de connexion et coûts façonnent une session normale ?',
        'Qui évaluera le résultat et comment l’utilisateur pourra-t-il le corriger ou le contester ?',
        'Que doit faire le produit lorsque l’information manque, que le modèle hésite ou que la connexion échoue ?',
      ],
    },
  ],
  closing:
    'La traduction peut rendre un produit compréhensible. Concevoir pour le contexte augmente ses chances d’être utile. Pour une IA destinée à servir des personnes sur les marchés africains, ce travail commence avant le premier prompt et continue bien après le lancement.',
  sources: [
    {
      id: 1,
      organization: 'Communauté de recherche Masakhane',
      title:
        'Participatory Research for Low-resourced Machine Translation: A Case Study in African Languages',
      year: '2020',
      url: 'https://arxiv.org/abs/2010.02353',
    },
    {
      id: 2,
      organization: 'GSMA',
      title: 'GSMA Research Charts a More Inclusive Digital Future for Africa',
      year: '2025',
      url: 'https://www.gsma.com/newsroom/press-release/gsma-research-charts-a-more-inclusive-digital-future-for-africa/',
    },
    {
      id: 3,
      organization: 'UNESCO',
      title: 'AI for Africa, by Africa',
      year: '2025',
      url: 'https://articles.unesco.org/sites/default/files/medias/fichiers/2025/10/AI_for_Africa_by_Africa_EN.pdf',
    },
  ],
  takeaways: [
    'Définir un utilisateur et une tâche précis avant de traiter une géographie comme un marché.',
    'Le support linguistique demande participation et évaluation, pas seulement des chaînes traduites.',
    'Connectivité, coût et reprise doivent figurer dans le brief produit initial.',
    'Évaluer l’utilité par rapport à la tâche réelle et rendre la correction possible.',
  ],
  note: 'Une perspective éditoriale nourrie par des recherches externes. Le scénario d’apprentissage est illustratif ; les pratiques proposées ne signifient pas que chaque capacité est implémentée dans ImaginAi.',
};
