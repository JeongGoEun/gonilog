import { NextApiRequest, NextApiResponse } from 'next'
import { getAllPosts } from '../../scripts/utils'
import { PostData } from './model/post-model'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<(PostData | undefined)[]>
) {
  const posts = getAllPosts()
  res.status(200).json(posts)
}
