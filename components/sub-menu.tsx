import { css } from '@emotion/react'
import Image from 'next/image'
import searchIcon from '../static/icons/search-icon.svg'
import profileImg from '../static/images/profile-img.jpeg'

interface CategoryType {
  name: string
  cnt: number
}

const categoryDummy: Array<CategoryType> = [
  { name: 'Web', cnt: 1 },
  { name: 'Vue', cnt: 1 },
  { name: 'Typescript', cnt: 1 },
  { name: 'Javascript', cnt: 1 },
  { name: 'Network', cnt: 1 },
  { name: '회고', cnt: 1 },
  { name: '에러', cnt: 1 },
  { name: 'cors', cnt: 1 },
  { name: 'Recoil', cnt: 1 },
  { name: 'css', cnt: 1 },
]

const SubMenu = () => {
  return (
    <div
      className="sub-menu-container"
      css={css`
        width: 20%;
        padding: 1.5rem;
        border-right: #92999c 1px solid;
      `}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="w-11/12 border-b-2">
          <input
            css={css`
              width: 95%;
              height: 2.3rem;
              border-radius: 5px;
              padding: 0 0.6rem;
            `}
            placeholder="Search"
          ></input>
        </div>
        <div className="rounded-xl">
          <Image src={searchIcon} alt="search-image" />
        </div>
      </div>
      <div className="pb-10 profile-contaniner">
        <Image
          src={profileImg}
          style={{ borderRadius: '10px' }}
          alt="profile-image"
        />
        <div className="my-4">
          <div className="mb-2 text-3xl">Just Do it !</div>
          <div className="text-xl">박치기 전문 개발자, 💻 🐱 ✍️ </div>
        </div>
      </div>
      <div className="category-container">
        <div className="text-2xl border-b-[1px] border-solid border-slate-400">
          카테고리
        </div>
        <div>
          <ul>
            {categoryDummy.map((d, idx) => {
              return (
                <li
                  css={css`
                    font-size: 18px;
                    cursor: pointer;
                    margin: 1rem 0rem;
                    :hover {
                      text-decoration: underline;
                    }
                  `}
                  key={`category-list-${d.name}`}
                >{`${d.name} (${d.cnt})`}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SubMenu
