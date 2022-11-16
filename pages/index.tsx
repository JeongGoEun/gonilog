import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { groq } from 'next-sanity'
import IntroCard from '../components/intro-card'
import TagArea from '../components/tag-area'
import { getClient } from '../lib/sanity-server'

const postQuery = groq`
  *[_type == "post"]
`

const Home = ({ data }: any) => {
  const { post, source } = data

  return (
    <>
      {/* <MDXRemote {...source} /> */}
      <TagArea />
      <IntroCard />
    </>
  )
}

// 빌드시 실행
// export async function getStaticProps({params: any, preview = false}) {
export async function getStaticProps() {
  // use sanity
  const post = await getClient().fetch(postQuery)

  // use mdx
  const source = 'Some **mdx** text, with a component '
  const mdxSource = await serialize(source)

  return {
    props: {
      data: { post, source: mdxSource },
    },
  }
}

// 동적 라우팅 + getStaticProps - post 만들때 유용할듯
// export async function getStaticPaths() {
//   const paths = await getClient().fetch(
//     groq`*[_type == "post" && defined(slug.current)][].slug.current`
//   )

//   return {
//     paths: paths.map((slug) => ({params: {slug}})),
//     fallback: true,
//   }
// }

export default Home
