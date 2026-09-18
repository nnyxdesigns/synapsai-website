import type { ArticleBody } from './types';

export const dailyUseArticle: ArticleBody = {
  introduction: [
    'The first use of an AI product is often generous. A person is curious, the prompt is carefully chosen and a useful response can feel remarkable. The everyday test is less forgiving: the request is rushed, the context is incomplete and the person has a real task to finish.',
    'That is why novelty is a poor proxy for adoption. An AI product earns a place in someone’s day when it repeatedly helps them make progress without asking them to rebuild context, verify everything from scratch or accept a new risk each time.',
  ],
  takeaways: [
    'Daily usefulness starts with a recurring job, not a memorable output.',
    'Reducing wasteful friction matters as much as improving the model response.',
    'Trust is built through legible boundaries, recovery and appropriate human control.',
    'The total cost includes time, attention, review and operational ownership—not only inference.',
  ],
  sections: [
    {
      id: 'start-with-the-returning-job',
      title: 'Start with the job that comes back tomorrow',
      paragraphs: [
        {
          text: 'A product becomes habitual when it fits a task that keeps returning: preparing a brief, finding the right information, checking a document, planning an activity or moving a case to the next person. The relevant question is not “Can the model do this once?” but “At which repeated moment would a person choose this over their current workaround?”',
        },
        {
          text: 'That distinction changes product discovery. Rather than collect impressive prompts, observe the handoffs, missing information and small delays around a real task. A strong starting point is narrow enough that a team can name the input, the intended outcome and the person who decides whether the result is usable.',
        },
      ],
      diagram: {
        title: 'The daily-use loop',
        steps: [
          'A recurring task creates a need',
          'Context is available without needless re-entry',
          'The person can act on a useful result',
          'The outcome improves the next use',
        ],
        caption:
          'A conceptual loop for product discovery, not a claim about a deployed SynapsAi workflow.',
      },
    },
    {
      id: 'make-context-available',
      title: 'Context is part of the experience',
      paragraphs: [
        {
          text: 'A capable answer can still be inconvenient if a person has to repeat the project, audience, constraints and previous decision every time. Useful memory is not simply storing more data. It is making the relevant context available at the moment it helps, making it easy to correct, and being clear about what is retained.',
        },
        {
          text: 'The useful design question is selective: what should the system know for this task, what should it ask, and what should stay under the user’s control? A visible summary of the working context can be more valuable than an invisible promise of personalisation. It lets the person notice a wrong assumption before it becomes a wrong result.',
        },
      ],
    },
    {
      id: 'remove-the-right-friction',
      title: 'Remove waste, not judgment',
      paragraphs: [
        {
          text: 'The right AI interaction can remove repetitive drafting, searching or formatting. It should not quietly remove the judgment that makes the work accountable. If a result will affect a learner, customer, colleague or business decision, the person using it needs enough evidence to decide whether it fits.',
        },
        {
          text: 'This makes speed a design property rather than a race for the shortest response time. A fast answer that needs a long fact-check may be slower overall. A brief, structured response that identifies its uncertainty, sources or assumptions can make the next human step faster and safer.',
        },
        {
          text: 'NIST frames reliability, accountability, transparency and explainability as interrelated characteristics of trustworthy AI. The practical implication is that a product team should decide which of these qualities matter for a specific use—not treat trust as a generic label applied after launch.',
          source: 1,
        },
      ],
      table: {
        headers: ['Question', 'A daily-use test'],
        rows: [
          ['Speed', 'Does this reduce total time to a dependable decision?'],
          ['Clarity', 'Can a person see what the result is based on?'],
          ['Control', 'Can they revise, reject or recover without starting over?'],
        ],
        caption:
          'A review prompt for an AI interaction. These are product questions, not performance measures.',
      },
    },
    {
      id: 'design-for-recovery',
      title: 'Trust includes the moments when the system fails',
      paragraphs: [
        {
          text: 'People rarely judge a product only by its best response. They remember a lost draft, an unexplained refusal, a confidently wrong answer or a task that could not be resumed. A product worthy of daily use makes these moments legible: it distinguishes a delay from a completed action, preserves work where appropriate and offers a path forward.',
        },
        {
          text: 'That does not require pretending that every answer is certain. It requires honest states and meaningful options. “Try again” is not a recovery strategy if it can duplicate an action or discard the work already done. The failure contract should be designed as deliberately as the ideal flow.',
        },
      ],
    },
    {
      id: 'count-the-whole-cost',
      title: 'Price the whole system',
      paragraphs: [
        {
          text: 'Inference cost matters, but it is only one part of the economics. There is also the cost of preparing data, reviewing outputs, supporting users, monitoring quality, integrating a workflow and changing a provider. A low-cost interaction that creates expensive manual checking is not necessarily economical.',
        },
        {
          text: 'A useful operating view connects cost to the job being done. What level of response quality is needed? When is a smaller or deterministic step enough? Where must a person review? Which context is worth retrieving? These choices make the product more deliberate and make trade-offs visible before scale makes them expensive.',
        },
      ],
    },
  ],
  closing:
    'The AI products people keep are rarely the ones that ask for the most attention. They make a recurring task feel more possible while leaving people able to understand, steer and own the result. That is a higher bar than a memorable demo—and a more useful one.',
  note: 'An editorial perspective on product adoption. The examples are general design prompts, not claims about SynapsAi products, customers or measured usage.',
  sources: [
    {
      id: 1,
      organization: 'National Institute of Standards and Technology',
      title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
      year: '2023',
      url: 'https://doi.org/10.6028/NIST.AI.100-1',
    },
  ],
};
