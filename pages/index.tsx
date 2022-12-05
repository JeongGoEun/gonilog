import { useMemo } from 'react';
import IntroCard from '../components/intro-card';
import TagArea from '../components/tag-area';
import { getAllPosts } from '../scripts/utils';
import { PostResData } from './api/model/post-model';

interface Props {
  posts: PostResData;
}

const Home = ({ posts }: Props) => {
  const categories = useMemo(() => {
    const tmp = posts.map((post) => post && post.data.category);
    const categoryInfo = tmp.reduce(
      (acc: any, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }),
      {}
    );

    return Object.keys(categoryInfo).map((key) => {
      return { name: key, cnt: categoryInfo[key] };
    });
  }, [posts]);

  return (
    <>
      <TagArea category={categories} />
      <IntroCard posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  // get mdx posts - file read이기 때문에 getStaticProps에서 호출해야 함
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
