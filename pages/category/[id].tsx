import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { fetchPostsByCategory } from '../../api/category';
import { Loader, Section } from '../../components';
import { categoryPaths } from '../../shared/staticPaths';
import { Post } from '../../shared/types';

interface CategoryProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<CategoryProps> = async ({
  params,
}) => {
  const posts = await fetchPostsByCategory(params.id as string);
  return {
    props: { posts },
  };
};

export async function getStaticPaths() {
  return {
    paths: categoryPaths,
    fallback: true,
  };
}

const Category: FunctionComponent<CategoryProps> = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) return <Loader />;

  return <Section posts={posts} title={router.query.id as string} />;
};

export default Category;
