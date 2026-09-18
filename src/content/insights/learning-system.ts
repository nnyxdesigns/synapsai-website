import type { ArticleBody } from './types';

export const learningSystemArticle: ArticleBody = {
  introduction: [
    'A chatbot can answer a learner’s question. Learning asks for more: an appropriate task, an attempt, feedback that arrives at the right moment, a chance to revisit an idea and an educator who can interpret what happened. Treating these needs as one open-ended conversation leaves too much of the learning system undesigned.',
    'The opportunity is not to make an assistant sound more like a teacher. It is to connect assistance to progression—while preserving the learner’s effort and the teacher’s judgment.',
  ],
  takeaways: [
    'A learning product should organise support around tasks and progression, not only responses.',
    'Feedback is useful when it relates to an attempt and a next step.',
    'Teachers need interpretable signals, not a false claim of complete visibility.',
    'Learning outcomes require careful evaluation; engagement alone is insufficient evidence.',
  ],
  sections: [
    {
      id: 'the-unit-is-the-learning-task',
      title: 'The unit of design is the learning task',
      paragraphs: [
        {
          text: 'A learning task has a purpose beyond getting an answer. A learner may be trying to understand a concept, practise a method, prepare for assessment or correct a misconception. The same question deserves different help depending on that purpose and on what the learner has already tried.',
        },
        {
          text: 'A product can make the task visible through a small number of meaningful choices: explain, attempt, review or revisit. Those modes are hypotheses to validate with learners and educators, not a replacement for pedagogy. Their value is that they give feedback a place in a sequence rather than treating every message as independent.',
        },
      ],
      diagram: {
        title: 'From assistant to learning system',
        steps: [
          'Set or recognise the task',
          'Invite an attempt',
          'Give feedback connected to the attempt',
          'Revisit with a related task and teacher guidance',
        ],
        caption:
          'A conceptual learning sequence. It is not a claim of measured learning impact or a live product flow.',
      },
    },
    {
      id: 'protect-meaningful-effort',
      title: 'Protect meaningful effort',
      paragraphs: [
        {
          text: 'Not every obstacle is useful. A confusing interface, a lost response and a failed upload create waste. But a pause to make an attempt, explain a method or compare two answers can be part of learning. The design challenge is to remove accidental friction without removing the work through which understanding develops.',
        },
        {
          text: 'This is why an immediate polished answer is not always the best educational response. A hint may be enough for one moment; a worked example may be appropriate for another. The product should make its assistance adjustable and should test whether the chosen intervention helps the learner take a meaningful next step.',
        },
        {
          text: 'UNESCO’s guidance on generative AI in education and research emphasises human agency and pedagogical validation. It is a useful reminder that educational fit cannot be inferred from a model’s general capability alone.',
          source: 1,
        },
      ],
    },
    {
      id: 'feedback-needs-a-memory',
      title: 'Feedback needs a memory of the attempt',
      paragraphs: [
        {
          text: '“Try again” is thin feedback when it does not connect to what happened. More useful feedback can identify the next operation, ask a learner to explain a choice, point to a relevant resource or offer a related practice question. The appropriate form depends on the subject and learner—not just on the answer’s correctness.',
        },
        {
          text: 'This does not require storing every interaction indefinitely. It requires a clear, limited model of the learning context: the current task, the learner’s visible attempt and any progress information that is useful for the next action. People should be able to understand what is being used and correct it when it is wrong.',
        },
      ],
      table: {
        headers: ['Weak signal', 'More useful product question'],
        rows: [
          ['A message was sent', 'Did the learner make or revise an attempt?'],
          ['An exercise was opened', 'What support was needed to continue?'],
          ['A task was completed', 'Can the learner apply the idea in a related task?'],
        ],
        caption:
          'Questions for designing evidence, not a measurement framework or reported result.',
      },
    },
    {
      id: 'teachers-interpret-the-signal',
      title: 'Teachers interpret the signal',
      paragraphs: [
        {
          text: 'Teacher-facing information should support a next decision: who may need help, which task deserves review or where a class is getting stuck. It should not imply that a digital trace is a complete account of understanding. A missed task can reflect access, time, instruction outside the platform or many other conditions.',
        },
        {
          text: 'That is why a learning system needs teacher judgment in the loop. Educators can validate whether a signal is meaningful, correct a misleading interpretation and place digital work within the rest of the lesson. Designing for that judgment is more responsible than making an automated claim about ability.',
        },
      ],
    },
    {
      id: 'evaluate-more-than-activity',
      title: 'Evaluate more than activity',
      paragraphs: [
        {
          text: 'Completion, messages and session length can tell a team whether people are using a product. They do not establish that learning improved. A responsible evaluation separates usability, engagement and learning questions, defines what is being compared and involves educators in interpreting the result.',
        },
        {
          text: 'A first study need not promise sweeping conclusions. It can test whether learners understand the task, whether feedback is usable and whether teachers find a signal interpretable. Claims about learning outcomes should wait for appropriately designed evidence, with the setting and limitations clearly described.',
        },
      ],
    },
  ],
  closing:
    'The move from assistant to learning system is a move from answers to progression. It asks whether a learner can attempt, understand, revisit and continue—and whether the people responsible for teaching can use the product with confidence.',
  note: 'An educational product perspective, not a report of a SynapsAi classroom study or an assertion of learning gains. Examples are design hypotheses to test with learners and educators.',
  sources: [
    {
      id: 1,
      organization: 'UNESCO',
      title: 'Guidance for generative AI in education and research',
      year: '2023',
      url: 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research',
    },
  ],
};
