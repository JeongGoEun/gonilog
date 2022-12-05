import { atom } from 'recoil';
import { TagType } from '../pages/api/model/post-model';

type CategoryType = TagType | 'all';

const category_atom = atom<CategoryType>({
  key: '@category_atom',
  default: 'all',
});

export default category_atom;
