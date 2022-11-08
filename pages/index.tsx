import styled from '@emotion/styled'
import IntroCard, { IntroCardType } from '../components/intro-card'

const introDummy: Array<IntroCardType> = [
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

const Home = () => {
  return (
    <>
      <div className="ml-8 text-xl">
        전체 글 <span className="text">{introDummy.length}</span>
      </div>
      <IntroCard posts={introDummy} />
    </>
  )
}

export default Home
