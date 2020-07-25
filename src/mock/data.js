import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Mandi Haase',
  subtitle: 'I love to code.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'mandi.jpg',
  paragraphOne: '"The secret of getting ahead is getting started." ~ Mark Twain',
  paragraphTwo:
    'I am a full stack developer determined to make a difference in the world through programming. With an extensive background in education, translation, and client services, I am equipped to take on all the exciting challenges programming has to offer!',
  paragraphThree:
    'I am committed to excellence, encouraging others, and finding new and exciting ways to be a catalyst for positive change.',
  resume: 'https://www.linkedin.com/in/mandihaase/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'allay.jpg',
    title: 'Allay',
    info: 'A company and interview review website for programming students',
    info2: '',
    url: 'https://labs21-allay-fe.herokuapp.com/',
    repo: 'https://github.com/Lambda-School-Labs/allay-fe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'developme.jpg',
    title: 'Develop Me',
    info: 'A social networking platform for programmers',
    info2: '',
    url: 'https://infinite-temple-50202.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'haase1020@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/mandi_haase',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mandihaase/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/haase1020',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
