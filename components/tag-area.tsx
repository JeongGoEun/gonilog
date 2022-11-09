import styled from '@emotion/styled'
interface TagType {
  name: string
  cnt: number
}

const tagDummy: Array<TagType> = [
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

const TagAreaContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

const Tag = styled.div`
  margin-right: 1rem;
  padding: 0.2rem 0.8rem;
  background-color: #d3d6db;
  border: 1.5px solid #d3d6db;
  color: #415f9d;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: #eff0f4;
  }
`

const TagArea = () => {
  return (
    <TagAreaContainer>
      {tagDummy.map((d, idx) => {
        return (
          <Tag key={`category-list-${d.name}`}>{`${d.name} (${d.cnt})`}</Tag>
        )
      })}
    </TagAreaContainer>
  )
}

export default TagArea
