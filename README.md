# ffxixslh's

## 配置本地内容

请在 `src/meta.config.local.ts` 中配置自己的简历内容，并导出 `metaData` 函数：

```ts
import type { TResumeData } from './common/typings/resume'

export const metaData = (): TResumeData => {
  return {
    contact: {
      title: '联系方式',
      content: [],
    },
    info: {
      title: '基本信息',
      content: [],
    },
    skills: {
      title: '个人技能',
      content: [],
    },
    projects: {
      title: '项目经历',
      content: [],
    },
    evaluation: {
      title: '自我评价',
      content: [],
    },
  }
}
```

配置加载顺序为 `meta.config.local.ts` → `meta.config.ts`：存在本地文件时优先使用本地内容，否则使用 `meta.config.ts`。
