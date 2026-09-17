import type { ArticleSection, ArticleBody } from './types';

export const introduction = [
  'An AI assistant can speak fluent French and still be a poor fit for a classroom in Cameroon. A workflow tool can display the right language while expecting a connection, a document format, or an approval process that its users do not have.',
  'Translation matters. People should be able to understand the tools they use. But language is one layer of a product. Usefulness also depends on what people are trying to do, what information they can rely on, and what happens when the system gets something wrong.',
  'For teams building AI products for African markets, context belongs in the initial brief. It should shape the product, the data, the interface, and the way success is measured.',
];

export const sections: ArticleSection[] = [
  {
    id: 'start-with-a-specific-context',
    title: 'Start with a specific context, not a continent',
    paragraphs: [
      {
        text: '“Africa” is a useful frame for a conversation about opportunity. It is too broad to be a product specification. Countries, institutions, languages, professions, and individual circumstances create different requirements. Even two schools in the same city may organize teaching and learner support differently.',
      },
      {
        text: 'Start by naming the people and the task. A teacher preparing exercises, a learner revising after class, and an operations team reviewing documents need different information, interactions, and safeguards. An open-ended chat box may help one task while making another unnecessarily difficult.',
      },
      {
        text: 'Before selecting a model, observe the existing workflow. What starts the task? Where does the information come from? Who checks the result? What must happen next? The answers are more useful than a broad promise to bring AI to a market.',
      },
    ],
  },
  {
    id: 'language-is-more-than-a-setting',
    title: 'Language is more than a setting',
    paragraphs: [
      {
        text: 'A translated interface does not establish that a model understands the language used inside it. People may use local expressions, specialist vocabulary, abbreviations, or several languages in the same exchange. A system needs to be evaluated against the patterns its intended users actually use.',
      },
      {
        text: 'Research from the Masakhane community offers a relevant example. Its work on participatory machine translation treats limited language resources as a problem that extends beyond collecting more data. It involves the people needed to develop datasets and evaluate translations, including contributors outside conventional research roles.',
        source: 1,
      },
      {
        text: 'The product lesson is to involve speakers and domain practitioners early. Ask them whether an answer is understandable, appropriate, and useful for the task. Test names and terminology as carefully as complete sentences. When language support is uneven, make its boundaries visible instead of presenting every option as equally reliable.',
      },
    ],
  },
  {
    id: 'design-for-the-whole-session',
    title: 'Design for the whole session, including interruptions',
    diagram: {
      title: 'From words to working conditions',
      steps: [
        'Translation: understandable words',
        'Localization: familiar meaning',
        'Context: actual conditions',
        'Product: a useful outcome',
      ],
      caption:
        'A conceptual framework: each layer adds a design question, rather than replacing the previous one.',
    },
    paragraphs: [
      {
        text: 'Access is more than network coverage. In its 2025 research on digital inclusion in Africa, GSMA identifies device costs, digital literacy, and the availability of relevant content as barriers to adoption. That is a reason to investigate the conditions of use, rather than assuming that a connected user has an effortless digital experience.',
        source: 2,
      },
      {
        text: 'For a product team, the practical questions are concrete: how much data does a task consume? Does it remain usable on the devices people own? If an upload or request fails, can the person resume without repeating their work? Can they distinguish a saved response from one that still needs a connection?',
      },
      {
        text: 'Where research shows these needs, consider smaller payloads, explicit loading states, recoverable uploads, and locally saved progress with appropriate privacy controls. Offline access to saved material is different from offline AI generation; explain that distinction. A smaller model or an on-device feature can be worth evaluating, but neither is a universal answer to cost, accuracy, or device constraints.',
      },
    ],
  },
  {
    id: 'evaluate-against-the-real-task',
    title: 'Evaluate against the real task',
    paragraphs: [
      {
        text: 'Fluency is easy to notice. A mismatch with a curriculum, a document, or a procedure can be harder to spot. A convincing explanation may use an unfamiliar method or depend on information that the user cannot verify.',
      },
      {
        text: 'Consider an illustrative learning scenario: a student asks for help with a mathematics exercise. Translating a generic answer changes the language. Designing for the learning context also means checking the expected level, the method being taught, the wording of the exercise, and whether the explanation helps the student attempt the next step. This is a design example, not a claim about a deployed feature.',
      },
      {
        text: 'Build a test set from realistic tasks, with permission to use the underlying material. Include ambiguous inputs, missing information, and questions the system should not answer confidently. Ask relevant practitioners to assess correctness and usefulness. Keep that evaluation separate from the examples used to tune the system, and repeat it when the model or source material changes.',
      },
    ],
  },
  {
    id: 'make-trust-actionable',
    title: 'Make trust something the user can act on',
    paragraphs: [
      {
        text: 'Trust needs visible mechanisms. Users should be able to see which document supports an answer, correct a mistaken input, understand what will be shared, and reach a person when the task requires one. An explanation that sounds reassuring is not a substitute for those controls.',
      },
      {
        text: 'UNESCO’s AI for Africa initiative places local languages, skills, infrastructure, and governance within the same agenda. Its framing reinforces an important product question: who participates in shaping an AI system, and who remains responsible for how it is used?',
        source: 3,
      },
      {
        text: 'For an operational tool, design the review and correction steps alongside generation. Distinguish a suggestion from an approved decision. Collect only the information the task needs, and explain retention and access in language people can understand. When the consequences are significant, define a human review path before release.',
      },
    ],
  },
  {
    id: 'context-is-a-product-discipline',
    title: 'Context is a product discipline',
    paragraphs: [
      {
        text: 'At SynapsAi, our work includes ImaginAi: an education ecosystem with a mobile application for learners and a web platform for teachers. Those two audiences are a useful reminder that a shared purpose does not require an identical experience.',
        link: { label: 'Explore the ImaginAi ecosystem', href: '/products/imaginai' },
      },
      {
        text: 'A learner needs a way to make progress. A teacher needs tools to organize and support that learning. The value of the ecosystem depends on how well each experience fits its users, as well as how the two relate. A model is one part of that design.',
      },
      {
        text: 'We see the wider opportunity for AI in the same way: begin with a clear need, make the constraints explicit, and build a system that people can understand and use. The practices proposed here are design recommendations, not a claim that every capability is already implemented in our products.',
      },
    ],
  },
  {
    id: 'questions-before-you-build',
    title: 'Five questions to ask before you build',
    paragraphs: [
      {
        text: 'A useful first brief should make the following questions answerable. If the answers are still vague, spend more time with the people and the workflow before adding features.',
      },
    ],
    points: [
      'Who is completing which task, and what would a useful outcome look like to them?',
      'Which languages, references, and working practices must the system understand?',
      'What devices, connectivity conditions, and costs shape a normal session?',
      'Who will judge the output, and how can a user correct or challenge it?',
      'What should the product do when information is missing, the model is uncertain, or the connection fails?',
    ],
  },
];

export const closing =
  'Translation can make a product understandable. Designing for context makes it more likely to be useful. For AI intended to serve people across African markets, that work begins before the first prompt and continues long after launch.';

export const sources = [
  {
    id: 1,
    organization: 'Masakhane research community',
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
];

export const contextArticle: ArticleBody = {
  introduction,
  sections,
  closing,
  sources,
  takeaways: [
    'Define a specific user and task before treating a geography as a market.',
    'Language support needs participation and evaluation, not just translated interface strings.',
    'Connectivity, cost and recovery belong in the initial product brief.',
    'Judge usefulness against the real task and make correction possible.',
  ],
  note: 'An editorial perspective informed by external research. The learning scenario is illustrative; proposed practices do not imply that every capability is implemented in ImaginAi.',
};
