import { Category, EntityId } from './types';

interface PostStaticParams {
  id: EntityId;
}

interface CategoryStaticParams {
  id: Category;
}

interface PostStaticPath {
  params: PostStaticParams;
}

interface CategoryStaticPath {
  params: CategoryStaticParams;
}

const staticPostsIdList: EntityId[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const postPaths: PostStaticPath[] = staticPostsIdList.map((id) => ({
  params: { id: String(id) },
}));

const categoriesToRender: Category[] = ['Science', 'Technology', 'Arts'];

export const categoryPaths: CategoryStaticPath[] = categoriesToRender.map(
  (category) => ({
    params: { id: category },
  }),
);
