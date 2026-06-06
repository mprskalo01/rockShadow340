export type Theme = 'dark' | 'light'
export type Language = 'en' | 'de' | 'hr'

/** Domain-relevant background line-art rendered behind each project card. */
export type ProjectVisual = 'finance' | 'cars'

export interface Project {
  title: string
  tagline: string // short case-study label, English only (not translated)
  description: string
  role: string
  year: string
  stack: string[]
  visual: ProjectVisual
  githubUrl: string
  liveUrl?: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

/**
 * Every locale file must satisfy this shape — the compiler enforces translation
 * completeness. Project titles/descriptions are deliberately NOT here (English only).
 */
export interface TranslationMap {
  nav: {
    intro: string
    work: string
    about: string
    contact: string
  }
  hero: {
    kicker: string
    headline: string
    roleLabel: string
    role: string
    locationLabel: string
    location: string
    statusLabel: string
    status: string
    cue: string
  }
  work: {
    title: string
    projects: string
    roleLabel: string
    yearLabel: string
    techLabel: string
    viewProject: string
    source: string
    archive: string
    more: string
  }
  about: {
    title: string
    bio: string
    note: string
    capabilities: string
  }
  contact: {
    title: string
    line: string
  }
}
