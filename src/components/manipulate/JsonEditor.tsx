import { onMount } from 'solid-js'

import {
  type Content,
  JSONEditor,
} from 'vanilla-jsoneditor'

interface JsonEditorProps {
  initJSON: string
}

const JsonEditor = (props: JsonEditorProps) => {
  const { initJSON } = props

  let editorRef!: HTMLDivElement
  let editor: JSONEditor | undefined
  let content: Content = {
    text: initJSON,
  }

  const initEditor = () => {
    if (!editorRef) return

    editor = new JSONEditor({
      target: editorRef,
      props: {
        content,
        onChange: (
          updatedContent,
          previousContent,
          { contentErrors, patchResult },
        ) => {
          // content is an object { json: unknown } | { text: string }
          console.log('onChange', {
            updatedContent,
            previousContent,
            contentErrors,
            patchResult,
          })
          content = updatedContent
        },
      },
    })
  }

  onMount(() => {
    initEditor()
  })

  return <div ref={editorRef} />
}

export default JsonEditor
