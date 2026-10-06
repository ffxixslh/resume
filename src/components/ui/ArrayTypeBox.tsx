import { For } from 'solid-js'
import { resizeProjectText } from 'src/common/utils/resizeProjectText'
import { keywordHighlight } from 'src/common/utils/keywordHighlight'
import type { ColorKind } from 'src/common/utils/keywordHighlight'
import useIcon, { type IconKey } from 'src/hooks/useIcon'
import type {
  TProject,
  TResumeItem,
} from 'src/common/typings/resume'
import useKeywordHighlight from 'src/hooks/useKeywordHighlight'

interface ArrayTypeBoxProps {
  item: TResumeItem
  colorKind?: ColorKind
}

const getComponent = (
  contentValue: TProject | string,
  colorKind: ColorKind,
) => {
  if (typeof contentValue === 'string') {
    return (
      <div class='m-0.5'>
        {useKeywordHighlight(
          keywordHighlight(contentValue, colorKind),
        )}
      </div>
    )
  }

  return (
    <div class='my-4'>
      {Object.entries(contentValue).map(
        ([projectItemKey, projectItemValue]) => {
          if (typeof projectItemValue === 'string') {
            return (
              <div
                class={`mx-0.5 mt-2 ${resizeProjectText(
                  projectItemKey,
                )}`}
              >
                {useKeywordHighlight(
                  keywordHighlight(
                    projectItemValue,
                    colorKind,
                  ),
                )}
              </div>
            )
          }

          if (Array.isArray(projectItemValue)) {
            if (projectItemKey === 'projectTechnology') {
              return (
                <div class='flex justify-end my-1'>
                  <For each={projectItemValue}>
                    {(technologyName) => {
                      return (
                        <div
                          class={`m-0.5 ${resizeProjectText(
                            projectItemKey,
                          )} `}
                        >
                          {useIcon(
                            technologyName as IconKey,
                          )}
                        </div>
                      )
                    }}
                  </For>
                </div>
              )
            }

            return (
              <div class='pt-2'>
                <For each={projectItemValue}>
                  {(item) => {
                    return (
                      <div
                        class={`my-1 ${resizeProjectText(
                          projectItemKey,
                        )} `}
                      >
                        {useKeywordHighlight(
                          keywordHighlight(item, colorKind),
                        )}
                      </div>
                    )
                  }}
                </For>
              </div>
            )
          }
        },
      )}
    </div>
  )
}

const formattedContent = (
  colorKind: ColorKind,
  value: TProject | string,
  index: number,
) => {
  return (
    <div>
      {index >= 1 ? (
        <div class='w-full overflow-hidden' />
      ) : null}
      {getComponent(value, colorKind)}
    </div>
  )
}

const ArrayTypeBox = (props: ArrayTypeBoxProps) => {
  const { item, colorKind = 'primary' } = props
  return (
    <>
      <div class='font-semibold text-2xl my-2'>
        {item.title}
      </div>
      <div class='flex flex-col'>
        <For each={item.content as (TProject | string)[]}>
          {(contentValue, contentIndex) => {
            return formattedContent(
              colorKind,
              contentValue,
              contentIndex(),
            )
          }}
        </For>
      </div>
    </>
  )
}

export default ArrayTypeBox
