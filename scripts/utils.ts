import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostData {
  data: {
    [key: string]: string
  }
  content: string
  slug: string
}

export type PostResData = PostData[]

export const getAllPosts = () => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'posts'), {
    withFileTypes: true,
  })

  const posts = dirFiles
    .map(file => {
      if (!file.name.endsWith('.mdx')) return

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'posts', file.name),
        'utf-8'
      )
      const { data, content } = matter(fileContent)
      const slug = file.name.replace(/.mdx$/, '')

      return { data, content, slug }
    })
    .filter(post => post)

  return posts
}

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(path.join(process.cwd(), 'posts'))

  const slugs = fileNames.map(fileName => {
    return { params: { slug: fileName.replace(/.mdx$/, '') } }
  })

  return slugs
}

export const getPostData = (slug: string) => {
  const filePath = path.join(process.cwd(), `posts/${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return {
    slug,
    ...{ data, content },
  }
}
