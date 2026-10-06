import { writeFile } from 'node:fs/promises'
import { iconSet } from 'src/common/constants/icon'
import { getSVGNames } from 'src/common/utils/getSVGs'

// 1. get new svg info
// 2. name it
// 3. add it to `iconSet`, and update type `TIcon`

// Templates
const SVGNamesDtsTemplate = (svgNames: string[]) =>
  `export type TIcon = \n${svgNames
    .map((item) => `  | '${item}'\n`)
    .join('')};`

const IconSetTemplate = (icons: Record<string, string>) =>
  `export const iconSet = {\n${Object.entries(icons)
    .map(([k, v]) => `  '${k}': '${v}',\n`)
    .join('')}}`

const getNextIconSet = async () => {
  const svgNames = await getSVGNames()
  const nextIconSet = Object.assign(
    iconSet,
    svgNames.reduce((acc, name) => {
      return Object.assign(acc, {
        [name]: `svgs/${name}.svg`,
      })
    }, {}),
  )
  return nextIconSet
}

// Write Files
const writeIconSet = async () => {
  const nextIconSet = await getNextIconSet()
  const str = IconSetTemplate(nextIconSet)

  try {
    writeFile('./src/common/constants/icon.ts', str)
  } catch (error) {
    console.error(error)
  }
}

const writeSVGDtsFile = async () => {
  const svgNames = await getSVGNames()
  const str = SVGNamesDtsTemplate(svgNames)

  try {
    writeFile('./src/common/typings/icon.d.ts', str)
  } catch (error) {
    console.error(error)
  }
}

const init = () => {
  writeSVGDtsFile()
  writeIconSet()
}

init()
