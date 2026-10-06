import type { JSXElement } from 'solid-js'

export interface ResumeItemBoxProps {
  children: JSXElement
}

const ResumeItemBox = (props: ResumeItemBoxProps) => {
  const { children } = props

  return (
    <div class='w-full rounded-lg bg-gray-200 px-3 py-1.5 text-black'>
      {children}
    </div>
  )
}

export default ResumeItemBox
