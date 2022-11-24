import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { PostResData } from '../pages/api/model/post-model'
import { getPlainText } from '../scripts/utils'

interface Props {
  posts: PostResData
}

const SummaryText = styled.div`
  height: 3rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

const IntroCard = ({ posts }: Props) => {
  return (
    <div className="inline-grid grid-cols-4 gap-10">
      {posts &&
        posts.map((post, idx) => {
          return (
            <div
              className="hover:cursor-pointer"
              key={`${post.data.title}-${idx}`}
            >
              <Link href={`/post/${post.slug}`}>
                <div className="rounded">
                  <Image
                    src={`/static/images/${post.data.category}-intro.svg`}
                    alt="intro-card-img"
                    width={322}
                    height={120}
                    css={css`
                      margin: 0 auto;
                      padding: 1.5rem 0;
                    `}
                    loading={'lazy'}
                  />
                </div>
                <div className="my-1 text-lg font-bold">{`${post.data.title}`}</div>
                <SummaryText>{getPlainText(post?.content)}</SummaryText>
                <div className="flex justify-between mt-2">
                  <div
                    css={css`
                      color: #415f9d;
                    `}
                  >{`#${post.data.category}`}</div>
                  <div>{`${post.data.updated}`}</div>
                </div>
              </Link>
            </div>
          )
        })}
    </div>
  )
}

export default IntroCard
