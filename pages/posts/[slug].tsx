import { getMDXComponent } from 'mdx-bundler/client';
import React from 'react';

import { getAllPosts, getSinglePost } from '../../utils/mdx';

const Post = ({ code, frontmatter }: any) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div>
      <Component />
    </div>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;