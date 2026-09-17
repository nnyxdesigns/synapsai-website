import type { ArticleBody } from './types';

export const beyondDemoArticle: ArticleBody = {
  introduction: [
    'A demonstration ends when the audience sees the answer. A product has to keep going: someone must check it, use it, correct it, pay for the process and return tomorrow. The distance between those two moments is where much of the real work sits.',
    'A demo is useful. It can establish that a capability is worth investigating and give a team something concrete to discuss. The mistake is to treat a successful example as evidence that the surrounding workflow is ready.',
    'Our thesis is straightforward: useful AI is a system of decisions around a model. Seven questions help make those decisions visible before a prototype acquires responsibilities it was never designed to carry.',
  ],
  takeaways: [
    'Define the user’s completed task before selecting the AI interaction.',
    'Data, evaluation, recovery and ownership are part of the product scope.',
    'Measure the cost of a useful outcome, including review and repair.',
    'A release needs evidence and an operating owner, not just a convincing example.',
  ],
  sections: [
    {
      id: 'problem-definition',
      title: '1. What problem becomes easier to finish?',
      paragraphs: [
        {
          text: '“We need an AI assistant” describes a possible interface, not a problem. A more useful starting point names the person, the task, the information they need and what a completed result allows them to do. It also records the current process, including the parts that already work well.',
        },
        {
          text: 'Consider an illustrative document-review tool. Extracting a paragraph may be technically impressive, but the operational task could be checking a request against an approved policy and preparing it for human review. That larger task introduces source freshness, exceptions and accountability. It changes both the interface and the evaluation.',
        },
        {
          text: 'Write a short acceptance statement before building: which input is allowed, what output is useful, who checks it and what happens next. Include a baseline that does not use generative AI. If a simpler form, search tool or rule solves the task more dependably, the product should be free to use it.',
        },
      ],
    },
    {
      id: 'data-context',
      title: '2. What information makes an answer valid?',
      paragraphs: [
        {
          text: 'A fluent answer may still rely on the wrong document or an outdated instruction. Decide which sources the system may use, who maintains them and how access permissions are enforced. Context is not simply more text inserted into a prompt; it is a controlled selection of information appropriate to the user’s task.',
        },
        {
          text: 'The research paper Hidden Technical Debt in Machine Learning Systems describes risks that arise around data dependencies, system interactions and maintenance. Although published before today’s generative AI products, its system-level warning remains a useful lens: a working model does not remove the obligations around it.',
          source: 1,
        },
        {
          text: 'For a document workflow, keep enough provenance for a reviewer to inspect the relevant source. Decide what the system does when a source is missing or contradictory. Asking a clarifying question, returning a partial result or declining to conclude can be more useful than filling a gap with plausible prose.',
        },
      ],
      diagram: {
        title: 'From capability to an operating system',
        steps: [
          'Demo: can it work once?',
          'Product: can someone finish a task?',
          'System: can we operate it responsibly?',
        ],
        caption:
          'A conceptual maturity model. Each stage adds obligations; this is not a ranking of model quality.',
      },
    },
    {
      id: 'interaction-design',
      title: '3. What should the person control?',
      paragraphs: [
        {
          text: 'An open chat box gives flexibility but can also transfer the burden of instruction to the user. Some tasks benefit from a structured input, a selection of source material or a review screen. Choose an interaction that makes the next decision understandable, rather than using conversation as a default for every workflow.',
        },
        {
          text: 'Distinguish generating a suggestion from taking an action. A proposed reply, an approved reply and a sent reply have different consequences. The interface should make those states explicit and offer the right review step. A smooth animation cannot compensate for ambiguity about what the system has done.',
        },
        {
          text: 'Control also includes correction. Can a person fix an input without restarting? Can they reject an answer without losing their own work? Can they return to the underlying material? Those small decisions determine whether the product supports judgment or merely produces output that someone must repair elsewhere.',
        },
      ],
    },
    {
      id: 'reliability',
      title: '4. What happens when it fails?',
      paragraphs: [
        {
          text: 'A system needs a useful response to missing data, inconsistent output, an unavailable dependency and an interrupted session. These are different failure classes. Treating all of them as “Something went wrong” prevents the user from choosing a sensible next step and makes support harder.',
        },
        {
          text: 'Set boundaries around what the product promises. A result may be incomplete, provisional or awaiting review. It should not appear final merely because generation stopped. When the system cannot support the task, offer a defined fallback such as a manual path or access to the original material.',
        },
        {
          text: 'Reliability work is not finished when an error is logged. It is finished enough for release when someone owns the failure path, the user can recover and the team can investigate without exposing unnecessary sensitive data. Test those conditions before widening access.',
        },
      ],
    },
    {
      id: 'economics',
      title: '5. What does a useful outcome cost?',
      paragraphs: [
        {
          text: 'The price of a model call is only one input. A task may require several calls, retrieval, file handling, repeated attempts and human review. Support and maintenance also consume resources. Estimate the whole workflow so that a successful prototype does not hide an unsustainable operating pattern.',
        },
        {
          text: 'Use scenarios rather than a single optimistic average. What happens with unusually long inputs, repeated corrections or a service failure? Which costs are predictable, which grow with usage and which depend on quality? A smaller model is not automatically cheaper if it creates more repair work.',
        },
        {
          text: 'The product can help manage these costs through clear limits, appropriate defaults and deliberate expensive actions. The point is not to ration every interaction. It is to understand where computation adds value and where a better workflow avoids unnecessary work for both the system and the person.',
        },
      ],
      table: {
        headers: ['Demo question', 'Product question'],
        rows: [
          ['Does this answer look good?', 'Can the user verify and use it?'],
          ['How fast is generation?', 'How long until the task is complete?'],
          ['How much does one call cost?', 'What does a useful, reviewed result cost?'],
          ['Can we reproduce the example?', 'Can we detect regressions and recover?'],
        ],
        caption: 'A review framework proposed by SynapsAi; no benchmark data is implied.',
      },
    },
    {
      id: 'trust-ownership',
      title: '6. Who is responsible for the result?',
      paragraphs: [
        {
          text: 'Trust is easier to discuss when it is attached to responsibilities. Someone owns the source material, someone decides what the tool may do, someone handles errors and someone approves changes. If those roles are unclear, a polished experience can obscure an operational gap.',
        },
        {
          text: 'NIST’s AI Risk Management Framework offers a voluntary structure for addressing AI risks through governance, context, measurement and management. We use that general framing here as a prompt to make responsibility explicit, not as a claim of certification or compliance.',
          source: 2,
        },
        {
          text: 'For a practical release review, record intended use, excluded use, escalation and correction. Explain the relevant limits in the interface at the moment a user needs them. A long policy page is not a substitute for making the status of a consequential action understandable.',
        },
      ],
    },
    {
      id: 'measurement',
      title: '7. What evidence earns the next release?',
      paragraphs: [
        {
          text: 'Build an evaluation around representative tasks and meaningful failure cases. Include ambiguous inputs, missing information and requests outside scope. Keep a set of examples separate from the ones used to tune the system so that a good result is not merely familiarity with the demonstration.',
        },
        {
          text: 'Define what is being judged. Correctness, completeness, usefulness and the effort of review may point in different directions. Have relevant practitioners assess the output and record disagreements. A single score can be useful for tracking, but it should not erase the failure modes that determine whether the product is appropriate.',
        },
        {
          text: 'Repeat the relevant checks when the model, prompt, source material or workflow changes. Pair offline evaluation with limited, observable releases and an option to roll back. A release decision should name the evidence that improved, the risks that remain and the person responsible for monitoring them.',
        },
      ],
    },
    {
      id: 'synapsai-perspective',
      title: 'The work around the model is the product work',
      paragraphs: [
        {
          text: 'SynapsAi’s scope spans software, AI and digital products. The connection between those disciplines matters: an AI capability has to fit an interface, a workflow and an operating environment. Treating them as separate projects can leave the most important assumptions between teams.',
          link: { label: 'Explore our AI & Automation approach', href: '/solutions/ai-automation' },
        },
        {
          text: 'For an early project, answering all seven questions does not require an elaborate platform. It requires a bounded task and explicit decisions. A narrow tool with a clear owner and a dependable recovery path can be a stronger beginning than a broad assistant whose responsibilities remain undefined.',
        },
      ],
    },
  ],
  closing:
    'Use the demo to discover what is possible. Use the product process to establish what is useful, repeatable and worth operating. The model matters; the system around it is what lets people depend on it.',
  note: 'An original product framework informed by the sources below. The document-review scenario is illustrative; no client project, return on investment or certification is claimed.',
  sources: [
    {
      id: 1,
      organization: 'Sculley et al. · NeurIPS',
      title: 'Hidden Technical Debt in Machine Learning Systems',
      year: '2015',
      url: 'https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems.pdf',
    },
    {
      id: 2,
      organization: 'NIST',
      title: 'AI Risk Management Framework',
      year: '2023',
      url: 'https://www.nist.gov/itl/ai-risk-management-framework',
    },
  ],
};
