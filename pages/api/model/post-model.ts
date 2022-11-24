export interface PostData {
  data: {
    [key: string]: string
  }
  content: string
  slug: string
}

export type PostResData = PostData[]

export type TagType = 'react' | 'js' | 'ts' | 'web' | 'fe'
