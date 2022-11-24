import styled from '@emotion/styled'
import { getAllPostSlugs, getPostData } from '../../scripts/utils'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { PostData } from '../api/model/post-model'

interface Props {
  post: PostData
  source: MDXRemoteSerializeResult
}

const Tag = styled.div`
  min-width: 70px;
  padding: 2px 2px;
  background: #415f9d;
  color: #eff0f4;
  border-radius: 9999px;
  text-align: center;
`

const Post = ({ post, source }: Props) => {
  return (
    <div className="mt-8">
      <article
        className="px-[12rem] mx-auto prose prose-slate"
        style={{ maxWidth: 'inherit' }}
      >
        <div className="pb-5 mb-8 border-b-4 border-zinc-500">
          <div className="text-5xl ">{post.data.title}</div>
          <div className="flex justify-between mt-8">
            <Tag>{post.data.category}</Tag>
            <div>{post.data.updated}</div>
          </div>
        </div>
        <MDXRemote {...source} />
      </article>
    </div>
  )
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
