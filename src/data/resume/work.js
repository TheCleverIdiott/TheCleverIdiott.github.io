/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'CareEdge Group',
    position: 'SDE Intern',
    url: 'https://www.careedge.in/',
    startDate: '2023-07-03',
    endDate: '2023-08-30',
    highlights: [
      'Implemented a flexible Virtual KYC framework with a scalable credit scoring model to categorize customers into risk buckets with an F1 Score of 92.8',
      'Accomplished 91% accuracy on real-time customer data set in predicting churn using stacked ML model of XGBoost, LightGBM and RandomForest.',
      'Delivered a conversational Intelligence AI chatbot product based on 10 KPIs using LLMs and NLTK to calculate the probability of default of customers.',
      'Modelling and Automation of ML model serving and performance tracking by creating scalable and robust APIs in Python.',
    ],
  },
  {
    name: 'Karmactive',
    position: 'Web Development Intern',
    url: 'https://karmactive.com',
    startDate: '2023-04-01',
    endDate: '2023-06-30',
    highlights: [
      'Increased traffic and enhanced page ranking by improving website structure performing Search Engine.',
      'Optimization(SEO) and Search Engine Management(SEM) for local improvements.',
      'Edited existing codebases to improve browser compatibility and mobile responsiveness.',
      'Designed and produced several webpages on the company\'s main website.',
    ],
  },
  {
    name: 'Web Developer',
    position: 'Freelance',
    startDate: '2022-07-01',
    endDate: '2022-12-01',
    highlights: [
      'Worked on web development projects using HTML, CSS, JavaScript, and PHP. Proficienct in React.js, developed and maintained websites for clients, including e-commerce websites and CMS-based websites.',
      'Used various web development frameworks and content management systems, such as WordPress, Drupal, and MERN.',
      'Oversaw the full lifecycle of development for 6 projects with 100% on-time delivery while within budget.',
    ],
  },
  {
    name: 'Open Source',
    position: '',
    startDate: '2020-07-01',
    endDate: '',
    highlights: [
      '𝐏𝐲-𝐂𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐭𝐨𝐫𝐬:   Maintained documentation for 6 Python-based projects, collaborating effectively with the team.',
      '𝐈𝐧𝐭𝐞𝐥 𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐀𝐦𝐛𝐚𝐬𝐬𝐚𝐝𝐨𝐫𝐬:   Deployed details of 2 new receivers to the community website, improving user experience.',
      '𝐀𝐥𝐩𝐡𝐚𝐬𝐚𝐢𝐚𝐧𝐬:   Updated 3 hyperlinks to the organizations contributing pages on the company website, improving accessibility',
      '𝐇𝐚𝐜𝐤𝐭𝐨𝐛𝐞𝐫𝐟𝐞𝐬𝐭 𝟐𝟎𝟐𝟐:   Worked on building ML Models, Datastructures (7 PRs Merged)',
      '𝐆𝐒𝐒𝐎𝐂 𝟐𝟎𝟐𝟑:   1. Developed a Debt Payoff planner model for a Fintech API. 2. Added endpoint to calculate bond valuation.',
      '𝐓𝐒𝐎𝐂 𝟐𝟎𝟐𝟑:   Worked on a Secure and efficient tokenisation solution for businesses on Bitcoin, equivalent to ERC1400 standard.',
    ],
  },

];

export default work;
