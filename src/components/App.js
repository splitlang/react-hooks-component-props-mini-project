import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  const { blogName, blogImage, blogAbout, posts } = blogData;

  return (
    <div>
      <Header name={blogName} />
      <About image={blogImage} about={blogAbout} />
      <ArticleList posts={posts} />
    </div>
  );
}

const Header = (function() {
  return function Header({ name }) {
    return (
      <header>
        <h1>{name}</h1>
      </header>
    );
  }
})();

const About = (function() {
  return function About({ image, about }) {
    const defaultImage = 'https://via.placeholder.com/215';
    return (
      <aside>
        <img src={image || defaultImage} alt="blog logo" />
        <p>{about}</p>
      </aside>
    );
  }
})();

const ArticleList = (function() {
  return function ArticleList({ posts }) {
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
  }
})();

const Article = (function() {
  return function Article({ title, date = 'January 1, 1970', preview }) {
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    );
  }
})();

export default App;