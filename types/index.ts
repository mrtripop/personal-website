export type AboutType = {
  title: string
  description: string
  imgUrl: string
}

export type WorkType = {
  _id: string
  title: string
  description: string
  projectLink: string
  codeLink: string
  imgUrl: string
  tags: Array<string>
}

export type SkillType = {
  _id: string
  name: string
  bgColor: string
  iconUrl: string
}

export type WorkExperienceType = {
  name: string
  company: string
  desc: string
}

export type ExperienceType = {
  _id: string
  year: string
  works: Array<WorkExperienceType>
}

export type FormDataType = {
  name: string
  email: string
  message: string
}
