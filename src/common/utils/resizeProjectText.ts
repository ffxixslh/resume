import type { TProject } from 'src/common/typings/resume.d.ts'

type ProjectKeys = {
  [K in keyof TProject]: K
}

const projectKeys: ProjectKeys = {
  projectTitle: 'projectTitle',
  projectIntro: 'projectIntro',
  projectTechnology: 'projectTechnology',
  projectContent: 'projectContent',
}

export const resizeProjectText = (value: string) => {
  switch (value) {
    case projectKeys.projectTitle:
      return 'text-lg font-medium'

    case projectKeys.projectIntro:
      return 'text-sm mb-2'

    case projectKeys.projectTechnology:
      return 'text-lg'

    case projectKeys.projectContent:
      return 'text-md'

    default:
      return 'text-sm'
  }
}
