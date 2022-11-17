import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { PostData, PostResData } from '../scripts/utils'
import reactLogo from '../static/images/react-logo.svg'

interface Props {
  posts: PostResData
}

const IntroCard = ({ posts }: Props) => {
  const onClickCard = (post: PostData) => {
    console.log(post)
  }
  return (
    <div className="inline-grid grid-cols-4 gap-10">
      {posts &&
        posts.map((post, idx) => {
          return (
            <Link href={`/post/${post.slug}`}>
              <div
                className="hover:cursor-pointer"
                key={`${post?.data.title}-${idx}`}
                onClick={() => onClickCard(post)}
              >
                <div className="bg-white rounded">
                  <Image
                    src={reactLogo}
                    alt="intro-card-img"
                    width={150}
                    height={120}
                    css={css`
                      margin: 0 auto;
                      padding: 1.5rem 0;
                    `}
                  />
                </div>
                <div className="my-1 text-lg font-bold">{`${post?.data.title}`}</div>
                <div
                  css={css`
                    height: 3rem;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                  `}
                >{`${post?.content}`}</div>
                <div className="flex justify-between mt-2">
                  <div
                    css={css`
                      color: #415f9d;
                    `}
                  >{`#${post?.data.category}`}</div>
                  <div>{`${post?.data.updated}`}</div>
                </div>
              </div>
            </Link>
          )
        })}
    </div>
  )
}

export default IntroCard
