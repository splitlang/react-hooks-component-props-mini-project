import React from 'react';
import Article from './article';

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
};

export default ArticleList;