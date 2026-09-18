import type { ArticleBody } from './types';

export const emergingMarketsCostArticle: ArticleBody = {
  introduction: [
    'An AI product budget is often introduced as a model-cost question. In practice, a product operating in an emerging market is shaped by a wider system: network conditions, device constraints, payment rails, support channels, localisation work, vendor dependencies and the cost of maintaining a reliable service.',
    'None of these conditions are unique to one country, and no market should be reduced to a list of constraints. The point is more practical: economic and operating context changes technical decisions. A product plan that ignores it can look efficient in a spreadsheet and become expensive in use.',
  ],
  takeaways: [
    'Inference is one cost inside a broader product and operating system.',
    'Device access, connectivity and payments affect product reach as well as conversion.',
    'Localisation includes workflows, support and evaluation—not simply interface strings.',
    'Architecture choices should preserve options when providers, prices or network conditions change.',
  ],
  sections: [
    {
      id: 'map-the-real-cost-stack',
      title: 'Map the real cost stack',
      paragraphs: [
        {
          text: 'A useful budget follows the path from a person’s device to a completed task. It includes data transfer, authentication, storage, model use, observability, support, payments and the staff time needed to resolve exceptions. Each layer has a different cost pattern and a different failure mode.',
        },
        {
          text: 'This does not mean every team needs a complex financial model before building. It means a prototype should identify its cost drivers early. Which actions call a model? Which media are transferred? Which tasks can be handled locally or asynchronously? Where will a human need to intervene? A simple map makes these questions discussable.',
        },
      ],
      diagram: {
        title: 'A product cost stack',
        steps: [
          'Access: device, data and connectivity',
          'Experience: localisation and usable flows',
          'Intelligence: retrieval, model calls and evaluation',
          'Operations: support, payments, monitoring and ownership',
        ],
        caption: 'A conceptual cost map. Costs vary by product, provider and operating context.',
      },
    },
    {
      id: 'access-is-a-product-decision',
      title: 'Access is a product decision, not a footnote',
      paragraphs: [
        {
          text: 'If a useful task assumes a current device, a large download and continuous data access, those assumptions define who can reliably use it. The World Bank identifies device affordability as a critical barrier to connectivity in many developing contexts. A product team should therefore test its actual device and data assumptions instead of treating a mobile network indicator as proof of access.',
          source: 1,
        },
        {
          text: 'The response is not a universal “low-bandwidth mode.” It is a specific design decision: reduce unnecessary transfers, preserve progress, make waiting states honest and decide which parts of a task must happen live. These choices can improve reliability for everyone while remaining grounded in a particular user journey.',
        },
      ],
    },
    {
      id: 'payments-and-support',
      title: 'Payments and support belong in the architecture',
      paragraphs: [
        {
          text: 'A payment flow is not complete when an API returns success. People need to understand price, currency, renewal, receipt, reversal and where to get help. Businesses and institutions may also have their own approval paths. If these conditions are discovered only after an AI workflow is ready, they can delay the product more than the model integration did.',
        },
        {
          text: 'Support is part of the same picture. A person with a problem may have limited time, data or comfort with a long written exchange. Clear product states and recoverable actions reduce support demand; the remaining support experience should fit the channels and language that users can realistically access. These are discovery questions, not assumptions to make from afar.',
        },
      ],
      table: {
        headers: ['Layer', 'Question to test before scale'],
        rows: [
          ['Device', 'What device and storage assumptions does the key task require?'],
          ['Network', 'What happens if the task is interrupted or slow?'],
          ['Payment', 'Can a person understand and complete the actual purchase path?'],
          ['Support', 'How will a person recover when self-service is not enough?'],
        ],
        caption:
          'A field checklist for product planning; it does not represent a SynapsAi deployment.',
      },
    },
    {
      id: 'localisation-is-operational',
      title: 'Localisation is operational, not only linguistic',
      paragraphs: [
        {
          text: 'Translated text can improve comprehension, but it does not resolve a workflow that assumes the wrong calendar, documentation practice, payment method or support norm. Useful localisation examines the full service: what users call the task, what proof they trust, who makes a decision and what happens when the system cannot help.',
        },
        {
          text: 'That work should include evaluation. An answer that is fluent in a language may still use the wrong terminology, reference unfamiliar examples or miss a local rule. Local review and documented feedback loops are not optional polish when the product makes consequential suggestions.',
        },
      ],
    },
    {
      id: 'avoid-single-provider-blindness',
      title: 'Avoid single-provider blindness',
      paragraphs: [
        {
          text: 'Generative AI systems often depend on several third-party components and data sources. NIST notes that this can make it difficult to attribute a problem to one source. That is a reason to document dependencies, set useful limits and avoid binding the whole product to an assumption that one provider will always be available at the same price and quality.',
          source: 2,
        },
        {
          text: 'Portability is not an abstract architectural virtue. It can mean keeping the task contract separate from a model call, recording enough evaluation cases to compare alternatives, and designing a graceful fallback when an external service changes. The right level of abstraction depends on the product; the decision should be deliberate.',
        },
      ],
    },
  ],
  closing:
    'The hidden cost of AI is not a reason to avoid building. It is a reason to design the whole service. Teams that see access, operations and dependency as product choices can make more credible technical trade-offs—and build something people can actually keep using.',
  note: 'A business and engineering perspective. It makes no claim about SynapsAi pricing, infrastructure, providers or market deployments.',
  sources: [
    {
      id: 1,
      organization: 'World Bank',
      title:
        'Affordable Devices for All: Innovative Financing Solutions and Policy Options to Bridge Global Digital Divides',
      year: '2025',
      url: 'https://www.worldbank.org/en/topic/digital/publication/affordable-devices-for-all-innovative-financing-solutions-and-policy-options-to-bridge-global-digital-divides',
    },
    {
      id: 2,
      organization: 'National Institute of Standards and Technology',
      title:
        'Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile',
      year: '2024',
      url: 'https://doi.org/10.6028/NIST.AI.600-1',
    },
  ],
};
