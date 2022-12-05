import styled from '@emotion/styled';
interface TagType {
  name: string;
  cnt: number;
}

interface Props {
  category: TagType[];
}

const TagAreaContainer = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  margin-right: 1rem;
  padding: 0.2rem 0.8rem;
  background-color: #d3d6db;
  color: #415f9d;
  border: 1.5px solid #d3d6db;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: #eff0f4;
  }
`;

const TagArea = ({ category }: Props) => {
  return (
    <TagAreaContainer>
      {category.map((d) => {
        return (
          <Tag key={`category-list-${d.name}`}>{`${d.name} (${d.cnt})`}</Tag>
        );
      })}
    </TagAreaContainer>
  );
};

export default TagArea;
