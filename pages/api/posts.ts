import { NextApiRequest, NextApiResponse } from 'next'
import { getAllPosts, PostData } from '../../scripts/utils'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<(PostData | undefined)[]>
) {
  const posts = getAllPosts()
  res.status(200).json(posts)
}
