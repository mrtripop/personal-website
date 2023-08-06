import {
  GitLogoImage,
  GithubLogo,
  GmailLogo,
  LinkedInLogo,
  MediumLogo,
  NextLogoImage,
  PostgresLogoImage,
  ReactLogoImage,
  SmartDoorDesign,
  SpringBootLogoImage,
  WorkflowDesign,
} from '@assets'

export const programmingSkillLogo = [
  NextLogoImage,
  ReactLogoImage,
  GitLogoImage,
  SpringBootLogoImage,
  PostgresLogoImage,
]

export const experiences = [
  {
    title: 'Software Engineer',
    subtitle: 'at Qualint Co.Ltd',
    description:
      'Create website with parallax concept, then  optimize SEO for search engine web crawler and create backend service with microservice architecture, then deploy with DevOps team for high availability and best user experience.',
    onClick: () => {
      console.log('Software Engineer Click!')
    },
    src: WorkflowDesign.src,
    alt: 'Mrtripop experience with Software Engineer',
  },

  {
    title: 'Computer Engineering',
    subtitle: 'at Naresuan University',
    description:
      'Modify door lock using IoT technology and control it two way. First, control by key card(default by door lock). Second, control by application which I use Firebase to connect between application and Iot.',
    onClick: () => {
      console.log('Computer Engineering Click!')
    },
    src: SmartDoorDesign.src,
    alt: 'Mrtripop experience with Computer Engineering',
  },
]

export const contacts = [
  {
    contact: 'tripop.chai12@gmail.com',
    textButton: 'Send Email',
    src: GmailLogo.src,
    onClick: () => {},
  },
  {
    contact: 'Tripop Torcheep',
    textButton: 'View Profile',
    src: LinkedInLogo.src,
    onClick: () => {},
  },
]

export const follows = [
  {
    src: GithubLogo.src,
    alt: 'mrtripop gmail contact',
    onClick: () => {},
  },
  {
    src: MediumLogo.src,
    alt: 'mrtripop github contact',
    onClick: () => {},
  },
]
