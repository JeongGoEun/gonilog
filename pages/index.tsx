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

export default Home
