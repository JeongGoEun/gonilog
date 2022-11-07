import { css } from '@emotion/react'

const SubMenu = () => {
  return (
    <div
      className="sub-menu-container"
      css={css`
        width: 20%;
        padding: 2rem;
        border-right: #92999c 1px solid;
      `}
    >
      <div>검색 영역</div>
      <div>프로필 영역</div>
      <div>카테고리 영역</div>
    </div>
  )
}

export default SubMenu
