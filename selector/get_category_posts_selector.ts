import { selector } from 'recoil';
import category_atom from '../atom/category_atom';
import { PostData, PostResData } from '../pages/api/model/post-model';
import { getAllPosts } from '../scripts/utils';

const get_category_posts_selector = selector<PostResData>({
  key: '@get_category_posts_selector',
  get: async ({ get }) => {
    const category = get(category_atom);
    const categoryPosts = getAllPosts();

    if (categoryPosts && category !== 'all') {
      return categoryPosts.filter((d) => d?.slug === category);
    }

    return categoryPosts;
  },
});

export default get_category_posts_selector;
