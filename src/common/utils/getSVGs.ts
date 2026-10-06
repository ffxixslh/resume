import { readdir } from 'node:fs/promises'

export const getSVGNames = async () => {
  const svgFolderPath = './public/svgs'
  const svgRawNames = await readdir(svgFolderPath)
  const svgNames = svgRawNames.map((svgRawName) =>
    svgRawName.slice(0, svgRawName.lastIndexOf('.')),
  )
  return svgNames
}
