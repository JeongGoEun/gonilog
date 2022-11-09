import { css } from '@emotion/react'
import Image from 'next/image'
import reactLogo from '../static/images/react-logo.svg'

export interface IntroCardType {
  title: string
  contents: string
  category: string
  published: string
}

const postsDummy: Array<IntroCardType> = [
  {
    title: '[React] useState...',
    contents:
      '컨텐츠컨텐츠컨텐츠컨텐츠grid grid-rows-4 grid-flow-col gap-4grid grid-rows-4 grid-flow-col gap-4',
    category: 'react',
    published: '20221108',
  },
  {
    title: '[javascript] ES6...',
    contents: '컨텐츠컨텐츠컨텐츠컨텐츠',
    category: 'javascript',
    published: '20221108',
  },
  {
    title: '[typescript] interface...',
    contents: '컨텐츠컨텐츠컨텐츠컨텐츠',
    category: 'typescript',
    published: '20221108',
  },
  {
    title: '[Web] DOM ...',
    contents: '컨텐츠컨텐츠컨텐츠컨텐츠',
    category: 'web',
    published: '20221108',
  },
  {
    title: '[React] useState...',
    contents: '컨텐츠컨텐츠컨텐츠컨텐츠',
    category: 'react',
    published: '20221108',
  },
  {
    title: '[javascript] ES6...',
    contents: '컨텐츠컨텐츠컨텐츠컨텐츠',
    category: 'javascript',
    published: '20221108',
  },
  {
    title: '[typescript] interface...',
    contents: '컨텐츠컨텐츠컨텐츠컨텐츠',
    category: 'typescript',
    published: '20221108',
  },
  {
    title: '[Web] DOM ...',
    contents: '컨텐츠컨텐츠컨텐츠컨텐츠',
    category: 'web',
    published: '20221108',
  },
]

const IntroCard = () => {
  return (
    <div className="inline-grid grid-cols-4 gap-10">
      {postsDummy.map(d => {
        return (
          <div className="">
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
            <div className="my-1 text-lg font-bold">{`${d.title}`}</div>
            <div
              css={css`
                height: 3rem;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              `}
            >{`${d.contents}`}</div>
            <div className="flex justify-between">
              <div>{`${d.category}`}</div>
              <div>{`${d.published}`}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default IntroCard
