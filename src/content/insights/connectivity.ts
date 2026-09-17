import type { ArticleBody } from './types';

export const connectivityArticle: ArticleBody = {
  introduction: [
    'The request has left the phone. The screen still says “Working”. Then the connection drops. The user cannot tell whether to wait, try again or start over. A capable model may already have produced an answer, but the product has failed to make that work usable.',
    'This is an illustrative failure path, not a reported ImaginAi incident. It exposes a useful engineering question: what does the system promise between a person pressing a button and receiving a result they can trust?',
    'For AI products, reliability includes the whole journey: preparing input, transferring it, processing it, returning a result and preserving the next step. Imperfect connectivity should shape that journey from the beginning. The patterns below are design recommendations, not a disclosure of SynapsAi’s private architecture.',
  ],
  takeaways: [
    'Design explicit request states before polishing the ideal response.',
    'A timeout does not tell you whether an operation finished; recovery needs a contract.',
    'Reduce transfers and preserve work without confusing saved content with offline inference.',
    'Measure completed tasks and recovery, not just model response time.',
  ],
  sections: [
    {
      id: 'a-product-condition',
      title: 'Connectivity is a product condition',
      paragraphs: [
        {
          text: 'A product brief should say where a task is expected to work and what happens outside those conditions. “Requires internet” is too vague to guide a user through a connection that works intermittently. The interface still needs to distinguish a draft that exists on the device from a request accepted by a service and a result that has been saved.',
        },
        {
          text: 'Do not use a geography as a network profile. Measure the intended users’ conditions with their participation, then test a range of interruptions and device capabilities. A strong connection in an office and a variable connection during a commute can belong to the same person. Designing continuity around the task avoids reducing people to one assumed infrastructure category.',
        },
        {
          text: 'Even a browser’s online indicator is only a hint. MDN documents that navigator.onLine can report connectivity to a network without establishing reachability of the intended service. A user-facing state should therefore be informed by the actual operation, rather than rely on a single connectivity flag.',
          source: 1,
        },
      ],
    },
    {
      id: 'latency-budget',
      title: 'Latency is a sequence, not one number',
      paragraphs: [
        {
          text: 'Time to useful output includes work before and after generation. An image may need preparation and upload. A request may wait for processing. The response must reach the device, render and become usable. Instrument these stages separately so that a slow task does not automatically become a request for a faster model.',
        },
        {
          text: 'Streaming can make progress visible, but a partial answer should not be presented as complete. If the connection breaks halfway through a mathematical explanation or a procedure, the interface should mark it as interrupted. The ability to see some text is different from receiving a dependable result.',
        },
        {
          text: 'Choose a task-specific waiting policy. A short explanation and a large document operation may justify different expectations. Show actual stages when available, allow an appropriate cancellation path and avoid countdowns that the system cannot support. Useful feedback tells the person what is happening and what they can do next.',
        },
      ],
      diagram: {
        title: 'The complete request journey',
        steps: [
          'Prepare input',
          'Transfer and acknowledge',
          'Process the task',
          'Deliver the result',
          'Save and resume',
        ],
        caption:
          'Conceptual lifecycle, not measured timing. Failure and recovery need a definition at every boundary.',
      },
    },
    {
      id: 'failure-contract',
      title: 'Design the failure contract first',
      paragraphs: [
        {
          text: 'A timeout creates uncertainty. The client may have stopped waiting while the server continued working. Sending the same action again without a recovery strategy can duplicate work or side effects. This matters wherever a request triggers something beyond a read, including a paid operation or a change to a record.',
        },
        {
          text: 'AWS guidance on retry patterns recommends idempotent operations, controlled backoff and limits on retry attempts. The broader engineering principle is to make repetition safe and bounded. Retrying every error immediately can turn a recoverable problem into additional load.',
          source: 2,
        },
        {
          text: 'For a long-running AI task, consider an operation identifier that lets the client check an existing job rather than create a second one. Define how long the result is available and when a user must explicitly restart. An idempotency key needs server-side handling and a documented scope; adding a header to a request is not sufficient.',
        },
        {
          text: 'Treat cancellation with the same care. Leaving a screen may stop local rendering while remote work continues. A product should distinguish “stop waiting here” from “processing has stopped” unless the service confirms the latter. These details determine whether the interface’s promises match the system’s behavior.',
        },
      ],
    },
    {
      id: 'reduce-transfer',
      title: 'Reduce what must cross the network',
      paragraphs: [
        {
          text: 'Before considering a larger infrastructure change, inspect avoidable transfers. Do repeated visits download unchanged resources? Does a retry upload the entire input again? Can a person select the relevant page instead of sending a complete file? Smaller transfers should serve the task, not quietly remove information that affects answer quality.',
        },
        {
          text: 'Compression has a quality boundary. A reduced image can make small symbols unreadable. A shortened input can omit the instruction that changes a question’s meaning. Test these choices against representative content and show the user when an input is too unclear to process reliably.',
        },
        {
          text: 'Caching also needs a boundary. Reusing public reference material is different from retaining a private conversation on a shared device. Decide what may be stored, how freshness is communicated, how access is protected and how a person can remove it. A cache hit is only a success if it returns material that is still appropriate for that user and task.',
        },
      ],
    },
    {
      id: 'make-cost-visible',
      title: 'Make expensive interactions intentional',
      paragraphs: [
        {
          text: 'An interface can trigger unnecessary work without the user realizing it: automatic regeneration, repeated uploads or a retry loop that silently starts new operations. Separate deliberate user actions from background maintenance. Where an action consumes a limited allowance or sends a large input, explain that before commitment.',
        },
        {
          text: 'A shorter response or lighter input mode may be useful, but it should be offered with a clear trade-off. Do not imply that every reduced mode has equivalent quality. The appropriate default depends on the task, and users should be able to understand why the product requests more information when it needs it.',
        },
        {
          text: 'Measure cost at the level of a completed useful task. A cheap request repeated several times, followed by manual repair, may be a poor product outcome. Include failed attempts and recovery in the analysis. Set budgets for retries and background work so that resilience does not become uncontrolled consumption.',
        },
      ],
      table: {
        headers: ['Condition', 'User needs', 'Design response to evaluate'],
        rows: [
          [
            'Upload interrupted',
            'Keep the original work',
            'Preserve the draft; resume only where the protocol supports it',
          ],
          [
            'Response incomplete',
            'Know what is trustworthy',
            'Label the partial result and offer recovery',
          ],
          [
            'Saved material available',
            'Continue with clear limits',
            'Show saved status and freshness',
          ],
          [
            'Service unavailable',
            'A useful next action',
            'Bound retries; offer a later return or non-AI path',
          ],
        ],
        caption:
          'A proposed failure-response matrix. These are patterns to evaluate, not existing ImaginAi feature claims.',
      },
    },
    {
      id: 'preserve-continuity',
      title: 'Preserve continuity without overpromising offline AI',
      paragraphs: [
        {
          text: 'A saved answer, an editable draft and on-device generation are three different capabilities. A product might support the first without supporting the others. Label them separately. “Available offline” should refer to a concrete action the user can actually complete, not to an entire experience that still depends on remote inference.',
        },
        {
          text: 'Recovery should restore enough context to continue: the original input, the last confirmed state and the next safe action. Avoid making someone remember whether a task had been sent. If two versions of the work can exist, show how conflicts will be resolved instead of silently choosing one.',
        },
        {
          text: 'Test returning after an interruption, not just entering airplane mode. Include an expired session, a repeated button press, a process terminated by the operating system and a response arriving after the user navigates away. Verify that private material remains protected throughout the recovery path.',
        },
      ],
    },
    {
      id: 'measure-recovery',
      title: 'Make recovery part of the definition of quality',
      paragraphs: [
        {
          text: 'A useful engineering review should ask how often people complete the intended task, where they stop and whether they can resume without losing work. Break results down by relevant device and network conditions without collecting unnecessary personal data. Average response time alone will not explain a broken journey.',
        },
        {
          text: 'For a company building mobile and web experiences such as ImaginAi, these are product questions as much as infrastructure questions. They connect the interface, service contracts and the support experience. The appropriate architecture follows from the promises the product needs to make.',
          link: { label: 'Read about our ImaginAi work', href: '/work/imaginai' },
        },
        {
          text: 'Start with one important task and write its failure contract. Identify every place where the user could lose work or misunderstand the state. Then build and test the smallest set of recovery behaviors that makes the promise credible. Reliability becomes easier to discuss when it is attached to a specific action.',
        },
      ],
    },
  ],
  closing:
    'From the user’s perspective, intelligence includes being able to continue. A product that explains its state, protects their work and recovers predictably can make a capable model useful under far more conditions.',
  note: 'Engineering recommendations and illustrative flows. No latency benchmarks, availability figures, offline capabilities or private ImaginAi architecture are asserted.',
  sources: [
    {
      id: 1,
      organization: 'MDN Web Docs',
      title: 'Navigator: onLine property',
      year: 'Reviewed September 2026',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine',
    },
    {
      id: 2,
      organization: 'AWS Prescriptive Guidance',
      title: 'Retry with backoff pattern',
      year: 'Reviewed September 2026',
      url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/retry-backoff.html',
    },
  ],
};
