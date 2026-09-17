import type { ArticleBody } from './types';

export const imaginaiArticle: ArticleBody = {
  introduction: [
    'A student opens a lesson, gets stuck on an exercise, looks for an explanation and then returns to the page. Later, a correction reveals a different gap. The next useful action may be another attempt, a question for a teacher or a short revision session.',
    'This is a plausible study journey, not a measured sequence from ImaginAi analytics. It is useful because it exposes a design problem: the learning task continues even as the mode of interaction changes. A single conversation is only one possible part of that task.',
    'ImaginAi brings together a mobile learner experience and a teacher web platform. The product question is how those experiences can support continuity: from a question to an attempt, from feedback to practice, and from an isolated session to a meaningful next step. This article separates the public product scope from the design principles we want to examine.',
  ],
  takeaways: [
    'Design around the study session and its next useful action.',
    'Connect explanation, practice and review without forcing one interaction mode.',
    'Treat progress indicators as evidence with limits, not a complete measure of understanding.',
    'Keep teachers within the learning system and validate new workflows before claiming them.',
  ],
  sections: [
    {
      id: 'study-session',
      title: 'Start from the study session',
      paragraphs: [
        {
          text: 'A feature list can describe what a product contains while leaving the learner’s journey unclear. The more useful unit for design is a bounded session: what brought the learner here, what they are trying to understand and what would allow them to stop with a useful result. That result may be small: identifying the missing step is already different from staring at an unfamiliar solution.',
        },
        {
          text: 'The public ImaginAi overview describes guided learning, exercises, quizzes, corrections and progress tracking for learners. For teachers, it describes class management, reporting, resources and activities. These are the confirmed product areas used in this article; they should not be read as evidence that every possible connection between them already exists.',
          source: 1,
        },
        {
          text: 'From that starting point, a design review can ask where a learner changes mode and whether the context survives. Does an explanation lead to an appropriate attempt? Does a correction help identify what to revisit? Each transition needs a purpose. Adding another screen without clarifying that purpose can increase the amount of navigation without improving the study session.',
        },
      ],
      image: {
        src: '/media/products/imaginai-mobile.png',
        alt: 'Official ImaginAi mobile product composition showing the real application screens.',
        caption:
          'Official ImaginAi mobile imagery from SynapsAi. This is existing product artwork, not a generated interface or a promise of additional features.',
        width: 1500,
        height: 1125,
      },
    },
    {
      id: 'learning-modes',
      title: 'Different questions need different learning modes',
      paragraphs: [
        {
          text: 'Explaining a concept, attempting an exercise and reviewing a correction place different demands on the learner. An explanation needs a clear structure. Practice needs room to try. Review needs a way to compare the attempt with what was expected. A conversation can support these activities, but it should not dictate every interaction.',
        },
        {
          text: 'A useful design hypothesis is to make the next step easier to recognize. After an explanation, that might mean a related exercise. After a correction, it might mean revisiting one concept. These are proposed transitions to evaluate, not an assertion that a particular automated recommendation system is deployed in ImaginAi.',
        },
        {
          text: 'Consistency matters across modes. The wording of a topic, the level of the material and the purpose of the task should remain understandable as the interface changes. A learner should not need to restate their entire problem simply because they moved from reading an explanation to attempting a question.',
        },
      ],
    },
    {
      id: 'material-context',
      title: 'Learning material changes the meaning of an answer',
      paragraphs: [
        {
          text: 'An exercise belongs to a context: a lesson, an instruction, a method or an expected level. An answer that ignores that context can be technically plausible while failing to help the learner follow the work in front of them. Product design should make it possible to establish the relevant material before interpreting the question.',
        },
        {
          text: 'If a future workflow accepts a document or an image, that would introduce additional questions: was the content read correctly, is a diagram missing, which page supports the explanation and is the material appropriate to use? Those checks belong in the design of such a workflow. This article does not claim that document analysis or a particular upload experience is currently available.',
        },
        {
          text: 'Even without adding a new input mode, the principle is useful. Make the subject, activity and instruction clear. Ask for clarification when the task is ambiguous. Avoid presenting an unsupported interpretation as if it came from the learner’s course material. Good context reduces the distance between an answer and the work it is meant to support.',
        },
      ],
      diagram: {
        title: 'A learning loop to design for',
        steps: [
          'Understand the question',
          'Attempt the work',
          'Review the feedback',
          'Choose what to revisit',
        ],
        caption:
          'A conceptual study loop. It describes a design objective, not a measured journey or automated product pipeline.',
      },
    },
    {
      id: 'practice-feedback',
      title: 'Practice needs a path back from the answer',
      paragraphs: [
        {
          text: 'A correction should do more than mark an endpoint. It should help the learner locate the difference between their reasoning and the expected approach. That can mean comparing one step, clarifying a definition or returning to a simpler example. The interface should make that return possible without treating every mistake as a request for a longer explanation.',
        },
        {
          text: 'In a proposed evaluation, we would distinguish seeing a correction from using it. Can the learner explain what changed? Can they attempt a related task with less help? Such questions would require a proper study design before supporting claims about learning. They are more informative product questions than counting how many generated answers were displayed.',
        },
        {
          text: 'There is also a pacing decision. Too much explanation can overwhelm the immediate task; too little can leave the learner guessing. A useful review should examine the minimum support that enables the next meaningful attempt, with a clear way to ask for more. That balance should be evaluated across subjects and levels rather than fixed by one universal response length.',
        },
      ],
    },
    {
      id: 'teacher-place',
      title: 'Teachers remain part of the system',
      paragraphs: [
        {
          text: 'A learning product does not need to replace the teacher’s judgment to be useful between lessons. It can help organize practice and make questions easier to identify. The teacher experience should support interpretation: what activity took place, what information is available and what still needs a conversation with the learner.',
        },
        {
          text: 'UNESCO’s guidance places human agency and pedagogical suitability at the centre of educational AI. For our product thinking, the implication is to evaluate support in relation to teaching and learning, rather than assume that more automated output is inherently better.',
          source: 2,
        },
        {
          text: 'Connecting learner and teacher experiences also requires decisions about visibility. A private question, an assigned activity and a progress report may need different sharing rules. Explain those rules and avoid collecting information simply because it could fill a dashboard. The value of a teacher view depends on whether its information is appropriate, understandable and actionable.',
        },
      ],
    },
    {
      id: 'progress-continuity',
      title: 'Progress should help someone continue',
      paragraphs: [
        {
          text: 'Progress tracking is part of the public product scope. The design challenge is what a learner can reasonably infer from it. Completed activities can describe participation, but they should not automatically be presented as mastery. A useful indicator states what it measures and supports a decision about what to do next.',
        },
        {
          text: 'For a future iteration, one question is whether the product can help someone return to a specific unfinished task without reconstructing the whole session. Another is whether review can connect a recurring difficulty to an appropriate next activity. These are directions for investigation; their usefulness and feasibility need to be established rather than assumed.',
        },
        {
          text: 'Continuity does not require keeping everything forever. Retention, shared-device use and the ability to remove personal material belong in the same design conversation. A learning history is useful only if people understand it and can rely on the boundaries around its use.',
        },
      ],
      points: [
        'Does the learner understand the purpose of the current activity?',
        'Is the next step clear after an explanation or correction?',
        'Does a progress indicator say what it actually measures?',
        'Can the teacher interpret the available information without overreading it?',
        'Are proposed capabilities clearly separated from the current product?',
      ],
    },
    {
      id: 'product-learning',
      title: 'The next product lesson needs evidence',
      paragraphs: [
        {
          text: 'The ecosystem gives us a coherent place to ask these questions, but it does not answer them automatically. A responsible product story should distinguish what exists, why a design choice is worth exploring and what evidence would justify the next decision. It should also be willing to describe a trade-off without presenting it as a solved problem.',
        },
        {
          text: 'Future accounts of changes in ImaginAi should be grounded in documented user feedback, permission to share the context and a clear description of what was observed. We have not introduced those claims here. The purpose of this article is to make the product logic visible and to define the questions that deserve investigation.',
          link: { label: 'See the ImaginAi product overview', href: '/products/imaginai' },
        },
      ],
    },
  ],
  closing:
    'The goal is a more coherent path through learning: a question that leads to an attempt, feedback that informs the next step, and a product that helps someone return with purpose. More AI interaction is useful only when it serves that continuity.',
  note: 'Product scope checked against the official ImaginAi overview and approved project sources. The study journey and proposed transitions are illustrative. Voice, document analysis, offline inference and automated recommendations are not asserted as live features. No learning-outcome data is claimed.',
  sources: [
    {
      id: 1,
      organization: 'ImaginAi',
      title: 'Official learner and teacher product overview',
      year: 'Reviewed September 2026',
      url: 'https://imaginai.io/',
    },
    {
      id: 2,
      organization: 'UNESCO',
      title: 'Guidance for generative AI in education and research',
      year: '2023',
      url: 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research',
    },
  ],
};
