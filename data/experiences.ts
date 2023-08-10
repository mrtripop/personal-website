import { BackendImage, FrontendImage, InternetOfThingImage } from '@assets'
import { JobCardProps } from '@components/Card/Job/JobCard'

export const experiences: JobCardProps[] = [
  {
    role: 'Software Engineer',
    location: 'At Qualint Co,.Ltd | 2022 - current',
    jobs: [
      {
        title: 'Backend Development',
        image: BackendImage.src,
        alt: 'Backend development image',
        contents: [
          'Utilized Java Spring Boot to build efficient and scalable RESTful APIs.',
          'Designed and developed database schemas and optimized queries for improved performance.',
          'Collaborated with operation team to maintain and monitor service smoothly.',
        ],
      },
      {
        title: 'Frontend Development',
        image: FrontendImage.src,
        alt: 'Frontend development image',
        contents: [
          'Developed interactive and responsive user interfaces using React framework.',
          'Implemented state management and utilized Redux toolkit for managing application state.',
          'Worked closely with UX/UI designers to deliver visually appealing and user-friendly interfaces.',
        ],
      },
    ],
  },
  {
    role: 'Computer Engineering',
    location: 'At Naresuan University | 2017 - 2021',
    jobs: [
      {
        title: 'Enhance the Smart Door Lock using IoT Technology',
        image: InternetOfThingImage.src,
        alt: 'Internet of thing development image',
        contents: [
          'Access control through key cards (default door lock method), key cards must still work well when modify Smart Door Lock.',
          'Remote control through a user-friendly mobile application, leveraging seamless connection between the app and IoT device.',
          'Easy to use, home member need to control the Smart Door Lock same as master.',
          'Security, prevent attacker to control the door like man-in-middle attack.',
        ],
      },
    ],
  },
]
