import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { INTRO_IMAGE_PATH } from '../constants/constant';
import { PostData, PostResData, TagType } from '../pages/api/model/post-model';

const POST_PATH = 'posts';

export const getAllPosts = () => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), POST_PATH), {
    withFileTypes: true,
  });

  const posts = dirFiles
    .filter((file) => file.name.endsWith('.mdx'))
    .map((file) => {
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), POST_PATH, file.name),
        'utf-8'
      );
      const { data, content } = matter(fileContent);
      const slug = file.name.replace(/.mdx$/, '');

      return { data, content, slug } as PostData;
    });
  return posts;
};

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(path.join(process.cwd(), POST_PATH));

  const slugs = fileNames.map((fileName) => {
    return { params: { slug: fileName.replace(/.mdx$/, '') } };
  });

  return slugs;
};

export const getPostData = (slug: string) => {
  const filePath = path.join(process.cwd(), `${POST_PATH}/${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    ...{ data, content },
  };
};

export const getPlainText = (mdxText: string) =>
  mdxText.substring(0, 100).replace(/[#_*~&;![\]`></hrbr\n=\->]/g, '');

export const getIntroImage = (tag: TagType) => INTRO_IMAGE_PATH[tag];
