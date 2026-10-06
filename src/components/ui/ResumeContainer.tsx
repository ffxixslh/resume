import { metaData } from 'meta.config'
import { For } from 'solid-js'
import useIcon from 'src/hooks/useIcon.tsx'
import type { IconKey } from 'src/hooks/useIcon.tsx'
import ArrayTypeBox from './ArrayTypeBox.tsx'
import ResumeInfoBox from './ResumeInfoBox.tsx'
import ResumeItemBox from './ResumeItemBox.tsx'

const ResumeContainer = () => {
  const resumeData = metaData()

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

  return (
    <div class="flex flex-col w-full h-fit gap-5">
      <div class="flex w-full h-fit gap-5">
        <ResumeItemBox>
          <ResumeInfoBox item={resumeData.contact} colorKind="info" />
        </ResumeItemBox>
        <ResumeItemBox>
          <ResumeInfoBox item={resumeData.info} />
        </ResumeItemBox>
      </div>
      <ResumeItemBox>
        <ArrayTypeBox item={resumeData.skills} colorKind="keyword" />
      </ResumeItemBox>
      <ResumeItemBox>
        <ArrayTypeBox item={resumeData.projects} colorKind="highlight" />
      </ResumeItemBox>
      <ResumeItemBox>
        <ArrayTypeBox item={resumeData.evaluation} colorKind="keyword" />
      </ResumeItemBox>
      <ResumeFooter />
    </div>
  )
}

export default ResumeContainer
