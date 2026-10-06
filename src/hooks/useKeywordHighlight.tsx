import { For } from 'solid-js'
import type { keywordHighlight } from 'src/common/utils/keywordHighlight'

const useKeywordHighlight = (
  result: ReturnType<typeof keywordHighlight>,
) => {
  // parse result to JSXElement
  return (
    <div>
      {typeof result === 'string' ? (
        result
      ) : (
        <For each={result}>
          {(item) => {
            if (typeof item === 'string') {
              return item
            }
            return (
              <span class={item.className}>
                {item.content}
              </span>
            )
          }}
        </For>
      )}
    </div>
  )
}

export default useKeywordHighlight
