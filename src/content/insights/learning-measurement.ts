import type { ArticleBody } from './types';

export const learningMeasurementArticle: ArticleBody = {
  introduction: [
    'A busy learning product can produce a reassuring dashboard: sessions, messages, completions and returning users. Those signals matter, but they answer only part of the question. A team building AI for learning also needs to know whether the support is understandable, whether it changes the next attempt and whether an educator can use the information responsibly.',
    'Measurement is not a hunt for one perfect number. It is a practice of making the product’s assumptions testable—and of being precise about what the available evidence does and does not show.',
  ],
  takeaways: [
    'Engagement describes activity; it does not by itself demonstrate learning.',
    'Measures should connect to a defined task, learner decision and intended use.',
    'Qualitative feedback and error review explain patterns that a dashboard cannot.',
    'Privacy, fairness and interpretation belong in the measurement plan from the beginning.',
  ],
  sections: [
    {
      id: 'measure-the-right-question',
      title: 'Measure the question the product is trying to answer',
      paragraphs: [
        {
          text: 'Before choosing a metric, name the decision it should support. A product team may need to know whether a learner can start an exercise, whether a hint helps them continue, whether a response is safe to use or whether a teacher can interpret a progress signal. Each requires different evidence.',
        },
        {
          text: 'A metric becomes misleading when it stands in for a different question. High completion can mean that a task was clear, that it was too easy, that answers were copied or that only confident learners stayed. The right interpretation depends on the task design and the people represented in the data.',
        },
      ],
      diagram: {
        title: 'A measurement loop',
        steps: [
          'State the learning or product question',
          'Collect the minimum relevant evidence',
          'Review patterns with learners and educators',
          'Change the experience and test again',
        ],
        caption:
          'A conceptual evaluation loop. It does not show SynapsAi data or a deployed analytics process.',
      },
    },
    {
      id: 'separate-activity-from-learning',
      title: 'Separate activity from learning evidence',
      paragraphs: [
        {
          text: 'Activity measures can be useful operationally: did an exercise load, was a session resumed, did someone request help? They can reveal friction and guide investigation. They should not be presented as learning outcomes without a clear bridge to an independent capability or assessment.',
        },
        {
          text: 'A stronger learning question looks for an attempt and a next opportunity to apply the idea. Can a learner explain a step, solve a related problem or identify an error without the same assistance? The method must fit the subject, age, setting and purpose. It also needs educator involvement and an honest account of limitations.',
        },
        {
          text: 'UNESCO recommends that generative AI in education be assessed against educational and human-centred considerations. This supports a broader approach to evaluation than simply counting responses produced by a system.',
          source: 1,
        },
      ],
      table: {
        headers: ['Signal', 'What it can indicate', 'What it cannot establish alone'],
        rows: [
          ['Completion', 'Whether a task reached an end state', 'Independent understanding'],
          ['Return use', 'Whether a product may be fitting a routine', 'Learning progress'],
          [
            'Response rating',
            'A person’s immediate perception of usefulness',
            'Accuracy across contexts',
          ],
          [
            'Error review',
            'Where the system or task needs investigation',
            'A complete account of impact',
          ],
        ],
        caption:
          'Interpretation prompts for future measurement. This table contains no ImaginAi analytics.',
      },
    },
    {
      id: 'review-response-quality',
      title: 'Review response quality in context',
      paragraphs: [
        {
          text: 'An AI response should not be judged only by fluency. Depending on the task, reviewers may need to consider factual accuracy, relevance to the learner’s attempt, clarity, appropriate uncertainty, safety and whether the response advances the learning purpose. A concise rubric can make those judgments comparable while leaving room for expert review.',
        },
        {
          text: 'NIST’s AI Risk Management Framework describes trustworthy AI as a set of context-dependent characteristics rather than a single score. That is a useful restraint: the threshold for a hint in a low-stakes practice task may differ from the threshold for information that shapes an educator’s decision.',
          source: 2,
        },
      ],
    },
    {
      id: 'keep-the-human-feedback',
      title: 'Keep the feedback that numbers cannot provide',
      paragraphs: [
        {
          text: 'A learner’s short explanation of where they got stuck can reveal a design issue hidden by aggregate counts. An educator can explain why a seemingly successful task was pedagogically weak. Support requests can show where the product’s language or recovery path failed. Qualitative evidence is not a decorative quote layer; it is how a team tests its interpretation of the data.',
        },
        {
          text: 'This feedback should be collected and handled responsibly. Participants should understand the purpose, teams should minimise what they collect and reporting should avoid exposing an individual learner. When an observation is not representative, say so rather than promoting it as a general result.',
        },
      ],
    },
    {
      id: 'build-a-measurement-backlog',
      title: 'Build a measurement backlog, not a vanity dashboard',
      paragraphs: [
        {
          text: 'The most useful measurement plan is usually small at first. Choose one product uncertainty, the evidence needed to examine it, the decision that will follow and the person accountable for reviewing it. Record what was observed, what changed and what remains unknown.',
        },
        {
          text: 'Over time, this creates a more credible field-note practice. Future charts can belong here when they are based on approved, documented ImaginAi data and include their definitions, time period, population and limitations. Until then, an honest empty space is better than an invented trend line.',
        },
      ],
    },
  ],
  closing:
    'What we measure shapes what we build. For AI and learning, the goal is not to make every human question legible in a dashboard. It is to gather enough trustworthy evidence to improve the next product decision—and to state plainly where the evidence stops.',
  note: 'A field-notes framework, not a report of internal metrics. No ImaginAi engagement, retention, completion, learning or response-quality data is claimed in this article.',
  sources: [
    {
      id: 1,
      organization: 'UNESCO',
      title: 'Guidance for generative AI in education and research',
      year: '2023',
      url: 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research',
    },
    {
      id: 2,
      organization: 'National Institute of Standards and Technology',
      title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
      year: '2023',
      url: 'https://doi.org/10.6028/NIST.AI.100-1',
    },
  ],
};
