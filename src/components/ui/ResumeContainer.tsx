import { For } from 'solid-js'
import useIcon from 'src/hooks/useIcon.tsx'
import type { IconKey } from 'src/hooks/useIcon.tsx'
import ArrayTypeBox from './ArrayTypeBox.tsx'
import ResumeInfoBox from './ResumeInfoBox.tsx'
import ResumeItemBox from './ResumeItemBox.tsx'
import type { TResumeData } from 'src/common/typings/resume'

const ResumeFooter = () => {
  const icons: IconKey[] = ['Astro', 'Solid']

  const iconRenderer = (icons: IconKey[]) => {
    return <For each={icons}>{(iconName) => useIcon(iconName, 'xl')}</For>
  }

  return (
    <div class="flex gap-1 justify-center items-center h-fit">
      <span>Made with</span>
      {iconRenderer(icons)}
      <span>and</span>
      <span class="text-lg text-red-600">❤</span>
      <span>By</span>
      <span class="font-semibold">ffxixslh</span>
      <span>.</span>
    </div>
  )
}

interface ResumeContainerProps {
  data: TResumeData
}

const ResumeContainer = (props: ResumeContainerProps) => {
  const { data } = props

  return (
    <div class="flex flex-col w-full h-fit gap-5">
      <div class="flex w-full h-fit gap-5">
        <ResumeItemBox>
          <ResumeInfoBox item={data.contact} colorKind="info" />
        </ResumeItemBox>
        <ResumeItemBox>
          <ResumeInfoBox item={data.info} />
        </ResumeItemBox>
      </div>
      <ResumeItemBox>
        <ArrayTypeBox item={data.skills} colorKind="keyword" />
      </ResumeItemBox>
      <ResumeItemBox>
        <ArrayTypeBox item={data.projects} colorKind="highlight" />
      </ResumeItemBox>
      <ResumeItemBox>
        <ArrayTypeBox item={data.evaluation} colorKind="keyword" />
      </ResumeItemBox>
      <ResumeFooter />
    </div>
  )
}

export default ResumeContainer
