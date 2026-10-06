import type { TResumeData } from './src/common/typings/resume'

export const meta: () => TResumeData = () => ({
  contact: {
    title: 'contact',
    content: [
      ['phone', { label: 'Phone: ', value: '12345678910' }],
      [
        'email',
        {
          label: 'Email: ',
          value: 'example@mail.com',
        },
      ],
      [
        'site',
        {
          label: 'Github: ',
          value: 'github.com/example',
        },
      ],
    ], // A content can be an array of string, entry and an object.
  },
  info: {
    title: 'info',
    content: [
      ['name', { label: 'Name: ', value: 'example' }],
      [
        'degree',
        {
          label: 'Degree: ',
          value: 'Bachelor',
        },
      ],
      [
        'college',
        {
          label: 'College: ',
          value: 'Example College',
        },
      ],
      [
        'major',
        {
          label: 'Major: ',
          value: 'Computer Science',
        },
      ],
    ],
  },
  skills: {
    title: 'skills',
    content: ['Good at TypeScript', 'Good at JavaScript'],
  },
  projects: {
    title: 'projects',
    content: [
      {
        projectTitle: 'project title',
        projectTechnology: ['TypeScript', 'React'], // Each technology matches an svg icon.
        projectIntro: 'project intro',
        projectContent: ['project content1'],
      },
    ],
  },
  evaluation: {
    title: 'evaluation',
    content: ['I like surffing in StackOverflow / Github.'],
  },
})
