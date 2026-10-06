import { For } from 'solid-js'
import type { TResumeItem } from 'src/common/typings/resume'
import {
  type ColorKind,
  keywordHighlight,
} from 'src/common/utils/keywordHighlight'
import useKeywordHighlight from 'src/hooks/useKeywordHighlight'

interface InfoBoxProps {
  item: TResumeItem
  colorKind?: ColorKind
}

const ResumeInfoBox = (props: InfoBoxProps) => {
  const { item, colorKind = 'primary' } = props

  return (
    <>
      <div class='font-semibold text-2xl mb-3'>
        {item.title}
      </div>
      <div>
        <For each={item.content}>
          {(contentItem) => {
            if (typeof contentItem === 'string') {
              return (
                <div class='my-1'>
                  {useKeywordHighlight(contentItem)}
                </div>
              )
            }

            if ('projectTitle' in contentItem) {
              // contentItem is TProject
              return (
                <div class='my-1 flex'>
                  <div class='font-semibold'>
                    {contentItem.projectTitle}
                  </div>
                  <For each={contentItem.projectContent}>
                    {(projectContentItem) => (
                      <span>
                        {useKeywordHighlight(
                          projectContentItem,
                        )}
                      </span>
                    )}
                  </For>
                </div>
              )
            }
            // contentItem is TEntry
            const [, entryValue] = contentItem
            return (
              <div class='my-1 flex'>
                <div class='font-semibold'>
                  {entryValue.label}
                </div>
                <span>
                  {useKeywordHighlight(
                    keywordHighlight(
                      entryValue.value,
                      colorKind,
                    ),
                  )}
                </span>
              </div>
            )
          }}
        </For>
      </div>
    </>
  )
}
export default ResumeInfoBox
