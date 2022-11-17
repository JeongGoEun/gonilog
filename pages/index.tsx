import IntroCard from '../components/intro-card'
import TagArea from '../components/tag-area'
import { getAllPosts, PostResData } from '../scripts/utils'

interface Props {
  posts: PostResData
}

const Home = ({ posts }: Props) => {
  const categories = posts.map(post => post && post.data.category)

  return (
    <>
      <TagArea />
      <IntroCard posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  // get sanity posts
  // const sanityPosts = await postUtil.getAllSanityPosts()

  // get mdx posts
  const posts = getAllPosts()

  return {
    props: {
      posts,
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
