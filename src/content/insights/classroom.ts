import type { ArticleBody } from './types';

export const classroomArticle: ArticleBody = {
  introduction: [
    'An answer can be correct and still arrive at the wrong moment. If a learner needs to attempt a problem, a complete solution may remove the very work the lesson was meant to create. If a teacher needs to understand a misconception, a polished final response may hide it.',
    'This is the tension behind educational AI: producing an answer and supporting learning are different jobs. A classroom makes that difference harder to ignore. There is a lesson in progress, an expected method, a teacher responsible for the sequence, and a learner whose understanding is still developing.',
    'Our starting point is the learner-and-teacher ecosystem of ImaginAi. This article sets out the product questions that follow from that structure and from external educational guidance. It is not a report of a classroom trial, interviews or measured learning gains. “The African classroom” in the title names a field of inquiry, not a single, uniform environment.',
  ],
  takeaways: [
    'The useful unit of design is a learning task, not a chat message.',
    'A moment of effort can be educationally valuable even when it reduces immediate convenience.',
    'Teachers need interpretable evidence of learning, with clear limits on what is shared.',
    'Local validation must precede claims about improved learning outcomes.',
  ],
  sections: [
    {
      id: 'a-learning-task',
      title: 'A learner is not simply a chatbot user',
      paragraphs: [
        {
          text: 'A general assistant can treat a request as something to satisfy. An educational product also needs to ask why the request exists. Is the learner discovering an idea, checking an attempt, revising a familiar topic or preparing for assessment? The same sentence can belong to each of those situations, with a different useful response.',
        },
        {
          text: 'Consider a hypothetical student asking for help with an equation. A worked solution may suit revision. During a first attempt, a hint about the next operation may be more appropriate. For a teacher reviewing the work, the important information may be the step at which the student became uncertain. These are design alternatives to test, not findings from an ImaginAi experiment.',
        },
        {
          text: 'The product should make the learning purpose available without turning every session into a questionnaire. A clear choice between explaining, practising and reviewing can be a starting hypothesis. Whether that choice is useful depends on age, subject, language and teaching practice. It should be tested with the people expected to use it.',
        },
      ],
    },
    {
      id: 'convenience-and-learning',
      title: 'Convenience is not the same as learning',
      paragraphs: [
        {
          text: 'A completed exercise is easy to count. Understanding is more difficult to establish. If we reward only fast completion, we risk designing an experience that helps a student submit work while leaving the underlying difficulty untouched. Product analytics should therefore distinguish activity from evidence that a learner can do something independently.',
        },
        {
          text: 'UNESCO’s guidance on generative AI in education argues for human agency and pedagogical validation. It provides a reason to assess an AI tool against educational purposes, rather than treating technical availability as evidence of suitability.',
          source: 1,
        },
        {
          text: 'A practical evaluation might ask learners to explain a step or attempt a related question without assistance. It would need an appropriate design, educator involvement and a clear account of who participated. Until such evidence exists, a team should describe the support it provides and the questions it is investigating, rather than claim that engagement proves learning.',
        },
      ],
      diagram: {
        title: 'Three perspectives on one exercise',
        steps: [
          'Learner: attempt and explain',
          'AI support: hint and clarify',
          'Teacher: interpret and guide',
        ],
        caption:
          'Conceptual roles for educational design. This is not a diagram of a deployed data-sharing workflow.',
      },
    },
    {
      id: 'teacher-visibility',
      title: 'Teachers need visibility they can use',
      paragraphs: [
        {
          text: 'Visibility should help a teacher decide what to do next. A long transcript can contain detail without providing a clear signal. A more useful question is whether the teacher can distinguish an unattempted task, a repeated difficulty and work completed with substantial assistance. Each distinction needs careful interpretation rather than an automatic judgment about ability.',
        },
        {
          text: 'ImaginAi’s public product information describes class management, reporting, resources and activities for teachers, alongside guided learning, exercises and progress tracking for learners. That separation of audiences gives the ecosystem a concrete foundation. It does not, by itself, establish which learning signals are valid or how they should be interpreted.',
          source: 2,
        },
        {
          text: 'A teacher-facing design should explain what a signal contains and what it cannot establish. It should also give the teacher room to correct the interpretation. A missed activity might indicate confusion, but it might also reflect access, time or an instruction given outside the product. The system should avoid converting a partial digital record into a complete story about a student.',
        },
      ],
    },
    {
      id: 'useful-friction',
      title: 'Educational UX needs a more careful definition of friction',
      paragraphs: [
        {
          text: 'Some friction is simply waste: repeated logins, lost work, unclear controls or an upload that fails without explanation. Other pauses can serve the task: asking a learner to make an attempt, compare two methods or identify the part they do not understand. Removing both kinds indiscriminately is a poor design principle.',
        },
        {
          text: 'The distinction should be visible in a product review. For each extra step, ask what learning purpose it serves and whether a less demanding alternative would serve that purpose. A prompt to explain a method is not automatically useful; it can become repetitive or inaccessible if it is poorly timed or assumes more language fluency than the exercise requires.',
        },
        {
          text: 'Support should remain available when a learner is stuck. The aim is not to make help deliberately frustrating. It is to let someone do the meaningful part of the work while reducing the obstacles around it. That balance is best explored through specific tasks with educators, rather than through a universal rule that every answer must be delayed.',
        },
      ],
    },
    {
      id: 'conditions-of-use',
      title: 'Conditions of use influence the lesson',
      paragraphs: [
        {
          text: 'An activity designed for a continuous session may need a different structure when time or connectivity is interrupted. As a design hypothesis, shorter resumable tasks could make it easier to return without reconstructing the entire context. Saved instructions could help preserve the purpose of an exercise even when live assistance is unavailable.',
        },
        {
          text: 'These choices require local investigation. Schools differ in curricula, assessment conventions, language use, equipment and purchasing arrangements. Urban and rural labels are not substitutes for observing the actual conditions of a particular school or learner group. The right design may also vary within one institution.',
        },
        {
          text: 'A useful pilot brief would record the intended task, available devices, who can access the product, what happens outside the application and how interruptions are handled. It would include learners who struggle to use the tool, not only those who complete the activity. Otherwise, the evaluation could mistake a selection effect for product quality.',
        },
      ],
      points: [
        'Name the curriculum, level and task being evaluated.',
        'Separate usability questions from learning-outcome questions.',
        'Record the assistance available during each activity.',
        'Include teachers in interpreting the result.',
        'State what the evidence cannot yet support.',
      ],
    },
    {
      id: 'implications-for-imaginai',
      title: 'What this asks of ImaginAi',
      paragraphs: [
        {
          text: 'The learner-and-teacher structure changes the questions we should ask of the product. Instead of asking only whether an explanation is available, ask whether it connects to a useful attempt. Instead of asking only whether progress is displayed, ask whether the information supports the learner’s next decision and the teacher’s judgment.',
        },
        {
          text: 'That is a direction for product inquiry, not a retrospective claim that every question has been resolved. More precise field notes would require documented observations, permission to describe the setting and a clear account of what changed. Publishing those details responsibly is more valuable than presenting a general conviction as a measured result.',
        },
        {
          text: 'For now, the defensible lesson is a standard of evaluation: educational usefulness must be established within a learning process. A compelling demonstration can begin the conversation. The work that follows belongs with learners, teachers and the conditions in which they study.',
          link: { label: 'Explore the ImaginAi ecosystem', href: '/products/imaginai' },
        },
      ],
    },
  ],
  closing:
    'The classroom gives AI a stricter test. The question is not only whether a system can answer, but whether the learner becomes better able to think, attempt and continue. That is the question worth taking into the field.',
  note: 'A field-oriented editorial perspective, not a primary field study. Scenarios are hypothetical. No interviews, classroom results or learning gains are claimed. Product scope was checked against approved project content and the official ImaginAi site.',
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
      organization: 'ImaginAi',
      title: 'Official learner and teacher product overview',
      year: 'Reviewed September 2026',
      url: 'https://imaginai.io/',
    },
  ],
};
