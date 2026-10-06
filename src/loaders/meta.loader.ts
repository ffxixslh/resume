import type { TResumeData } from 'src/common/typings/resume'

type MetaConfigModule = {
  metaData: () => TResumeData
}

const configModules = import.meta.glob<MetaConfigModule>(
  '../meta.config{.local,}.ts',
  {
    eager: true,
  },
)

const localConfig = configModules['../meta.config.local.ts']
const defaultConfig = configModules['../meta.config.ts']

export const loadMetaData = (): TResumeData => {
  const config = localConfig ?? defaultConfig

  if (!config) {
    throw new Error('No meta config found.')
  }

  return config.metaData()
}
