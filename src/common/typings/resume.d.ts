import type { TIcon } from 'src/common/typings/icon'

export type TEntry<K, T> = readonly [K, T]

type TLabelObject = {
  label: string
  value: string
}

export type TProject = {
  projectTitle: string
  projectTechnology: TIcon[]
  projectIntro: string
  projectContent: string[]
}

export type TContact = {
  phone: TLabelObject
  email: TLabelObject
  site: TLabelObject
}

export type TInfo = {
  name: TLabelObject
  degree: TLabelObject
  college: TLabelObject
  major: TLabelObject
}

export type TResumeItemContent =
  | string[]
  | TProject[]
  | TEntry<string, TLabelObject>[]
  | TIcon[]

export type TResumeItem = {
  title: string
  content: TResumeItemContent
}

export type TResumeItemTitle =
  | 'contact'
  | 'info'
  | 'skills'
  | 'projects'
  | 'evaluation'

export type TResumeData = {
  [title in TResumeItemTitle]: TResumeItem
}
