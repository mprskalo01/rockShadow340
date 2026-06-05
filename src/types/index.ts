export interface SkillItem {
  name: string
  iconKey: string
}

export interface SkillCategory {
  title: string
  skills: SkillItem[]
}

export interface Project {
  imageUrl: string
  title: string
  description: string
  stack: string[]
  githubUrl: string
  liveUrl?: string
}
