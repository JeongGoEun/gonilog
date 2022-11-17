import { getAllPostSlugs, getPostData, PostData } from '../../scripts/utils'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface Props {
  post: PostData
  source: MDXRemoteSerializeResult
}

const Post = ({ post, source }: Props) => {
  return <MDXRemote {...source} />
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs()
  return {
    paths: slugs,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const post = getPostData(params.slug)
  const source = await serialize(post.content)

  return {
    props: {
      post,
      source,
    },
  }
}

export default Post
