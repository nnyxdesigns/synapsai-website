import type { ArticleBody } from './types';

export const peopleNotEngineersArticle: ArticleBody = {
  introduction: [
    'Most people do not arrive at a product thinking about models, retrieval or prompt engineering. They arrive with a job, a deadline and an existing way of making sense of the work. If the product asks them to adopt the team’s technical vocabulary first, the interface has shifted effort in the wrong direction.',
    'Designing AI for non-engineers is not about simplifying people. It is about respecting the knowledge they already bring: the language of their work, the risks they carry and the decisions they are responsible for.',
  ],
  takeaways: [
    'People should be able to start from their work, not from the model’s mechanics.',
    'Plain language and clear choices reduce cognitive load without hiding meaningful control.',
    'Onboarding should help someone achieve an early real outcome, then reveal depth when it is useful.',
    'Conversation is one interface pattern—not a substitute for task design.',
  ],
  sections: [
    {
      id: 'begin-with-their-language',
      title: 'Begin with the language of the work',
      paragraphs: [
        {
          text: 'A teacher may think about an exercise and a learner’s attempt. An operations lead may think about an exception, approval or handoff. A product can use those concepts directly instead of asking each person to translate a real task into abstract commands. Labels, examples and defaults should make the intended action recognizable.',
        },
        {
          text: 'GOV.UK’s interface-writing guidance makes a useful general point: clear, consistent language lowers cognitive load and supports inclusion, including for people with limited English. The lesson for AI products is not to copy one government service’s wording; it is to test whether the product speaks in the language its users already use.',
          source: 1,
        },
      ],
      diagram: {
        title: 'From task to assistance',
        steps: [
          'Name the real task',
          'Offer a recognizable starting point',
          'Let the person inspect or adjust the context',
          'Return to the work with a clear next action',
        ],
        caption:
          'A conceptual onboarding path. It is not a prescribed interface or a claim about a live SynapsAi feature.',
      },
    },
    {
      id: 'make-the-first-step-safe',
      title: 'Make the first step safe enough to try',
      paragraphs: [
        {
          text: 'People do not need a tour of every capability before they can begin. They need a credible first action with a clear boundary. A helpful starting state can show what the product can do, what information it needs and what will happen next—without forcing a person to learn hidden conventions.',
        },
        {
          text: 'Examples should be close to the intended task, but they should not pretend to be evidence from real customers. A generic sample is useful when it makes the interaction concrete and is visibly a sample. It becomes misleading when it implies a deployment, a result or a person that does not exist.',
        },
      ],
    },
    {
      id: 'show-control-without-configuration',
      title: 'Show control without making everyone configure a model',
      paragraphs: [
        {
          text: 'Control does not always mean an advanced settings panel. It can mean choosing a goal, correcting a context summary, selecting a source, deciding whether to save a draft or seeing why the system asked a follow-up question. These are controls expressed in the task, not in model parameters.',
        },
        {
          text: 'The aim is progressive disclosure. Keep routine decisions close to the action; offer deeper options when a person has a reason to use them. This avoids the false choice between a black box and a cockpit. A good product can be approachable on the first day and precise on the fiftieth.',
        },
      ],
      table: {
        headers: ['Instead of asking for…', 'Design around…'],
        rows: [
          ['A perfect prompt', 'A clear intent, example or document'],
          ['A model setting', 'The outcome and level of control needed'],
          ['Blind acceptance', 'Review, edit and an understandable next action'],
        ],
        caption: 'Ways to translate technical choices into user-facing decisions.',
      },
    },
    {
      id: 'conversation-is-not-the-whole-product',
      title: 'Conversation is not the whole product',
      paragraphs: [
        {
          text: 'A chat interface is flexible because it accepts many requests. It can also make the task ambiguous: the person must decide how to ask, remember what happened and infer what the system can do. For repeated work, a structured flow can reduce that burden through meaningful fields, status, history and clear handoffs.',
        },
        {
          text: 'The better question is not whether conversational AI is intuitive. It is whether conversation is the most useful form for this part of the task. A short exchange may clarify a problem; a review screen may be better for checking a document; a checklist may be better for completing a process.',
        },
      ],
    },
    {
      id: 'include-people-in-the-design',
      title: 'Design with the people who will carry the consequences',
      paragraphs: [
        {
          text: 'A team cannot infer a person’s mental model from a job title alone. Different device access, language confidence, workarounds and authority levels can change what an interface needs to explain. Research should include people who are likely to struggle as well as early enthusiasts.',
        },
        {
          text: 'Inclusive service guidance recommends identifying where people may be excluded and testing continually with representative users. For AI work, this is also a reliability practice: it reveals the assumptions a technically fluent team is least likely to notice.',
          source: 2,
        },
      ],
    },
  ],
  closing:
    'The best AI interface does not ask someone to think like an engineer. It helps them apply their own judgment to a familiar task, with enough clarity to know what the system did and enough control to decide what happens next.',
  note: 'An editorial product-design perspective. It does not claim that any described interaction is live in a SynapsAi product.',
  sources: [
    {
      id: 1,
      organization: 'GOV.UK Service Manual',
      title: 'Writing for user interfaces',
      year: 'Reviewed September 2026',
      url: 'https://www.gov.uk/service-manual/design/writing-for-user-interfaces',
    },
    {
      id: 2,
      organization: 'GOV.UK Service Manual',
      title: 'Making your service more inclusive',
      year: 'Reviewed September 2026',
      url: 'https://www.gov.uk/service-manual/design/making-your-service-more-inclusive',
    },
  ],
};
