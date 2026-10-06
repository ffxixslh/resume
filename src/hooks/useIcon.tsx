import { createSignal } from 'solid-js'
import { iconSet } from 'src/common/constants/icon'

export type IconKey = keyof typeof iconSet
export type SizeKey = keyof typeof sizeSet

const sizeSet = {
  sm: 3.5,
  md: 4,
  lg: 6,
  xl: 8,
}

const useIcon = (iconName: IconKey, size: SizeKey = 'md') => {
  const iconPath = iconSet[iconName]
  const [showTips, setShowTips] = createSignal<boolean>(false)

  return (
    <div
      class={`relative h-${sizeSet[size]} mx-2`}
      onMouseEnter={() => setShowTips(true)}
      onMouseLeave={() => setShowTips(false)}
    >
      <img height={'100%'} src={iconPath} alt={`icon-${iconName}`} />
      {showTips() && (
        <div class="absolute w-fit px-1 -translate-x-1/2 -top-8 left-1/2 right-0 text-sm text-white bg-black bg-opacity-60 rounded">
          {iconName}
        </div>
      )}
    </div>
  )
}

export default useIcon
