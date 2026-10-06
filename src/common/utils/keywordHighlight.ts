export type ColorKind = keyof typeof colorSet

export const colorSet = {
  primary: 'text-gray-800 font-sans font-normal',
  highlight: 'text-yellow-600 font-serif font-medium',
  keyword: 'text-orange-600 font-mono font-semibold',
  important: 'text-red-600 font-bold',
  info: 'text-blue-600 font-normal',
}

/**
 * @description
 * 1. 将字符串分割成 word
 * 2. 通过正则表达式将 word 分成 keywords
 * 3. 遍历 keywords 替换 word
 * 4. 除了 keywords 余下的字符串，直接输出
 */
export type TVDom = {
  className: string
  content: string
}

const keywordValidator =
  /([a-zA-Z0-9]+)([.@\/-][a-zA-Z]+)*/g

const splitToKeywords = (value: string): string[] => {
  const matchRaws = value.matchAll(keywordValidator)
  const keywords: string[] = []

  for (const raw of matchRaws) {
    keywords.push(raw[0])
  }

  return keywords
}

const highlightKeywords = (
  value: string,
  keywords: string[],
  kind: ColorKind = 'primary',
): (string | TVDom)[] => {
  const color = colorSet[kind]
  let result: (string | TVDom)[] = []
  let currentWorkStr = ''

  keywords.forEach((keyword, index) => {
    const workStr = currentWorkStr ? currentWorkStr : value
    const startIdx = workStr.indexOf(keyword)
    const endIdx = workStr.indexOf(keyword) + keyword.length

    // 截取 keyword 前后两段字符串
    // e.g. [ front , , end ]
    const splitStr = [
      workStr.slice(0, startIdx),
      workStr.slice(endIdx),
    ]
    // 打平重组
    // e.g. [ <span>...</span>, front, <span>...</span> , end ]
    const flatStr = splitStr.flatMap((token) => [
      {
        className: `align-middle text-base ${color}`,
        content: keyword,
      },
      token,
    ])
    // 截取正确部分，从数组下标为 '1' 处开始
    // e.g. [ front, <span>...</span> , end ]
    const sliceStr = flatStr.slice(1)
    // 结束操作
    currentWorkStr = sliceStr.at(-1) as string

    // 存储为结果
    // e.g. [ ...result, front, <span>...</span> ]
    result = [...result, ...sliceStr.slice(0, -1)]

    // 判断是否到最后一个 keyword
    if (index === keywords.length - 1) {
      result = [...result, currentWorkStr]
    }
  })

  // 保险起见，给 result 打平一层
  const v = result.filter(Boolean).flat()

  return v
}

export const keywordHighlight = (
  value: string,
  kind: ColorKind = 'primary',
) => {
  // 1. 在每个 word 的前后用空格将其分隔
  // 2. 搜索 word 放入 keywords
  // 3. 遍历 keywords 替换 word
  const keywords = splitToKeywords(value)

  // 如果 keywords 为空数组则直接输出
  if (keywords.length === 0) {
    return value
  }

  return highlightKeywords(value, keywords, kind)
}
