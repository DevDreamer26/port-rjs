import React from 'react';
import './Blogs.css'; // Import your CSS styles for the Blogs page

const blogsData = [
  {
    title: 'How to Start a Blog',
    author: 'John Doe',
    date: 'October 10, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    title: 'Top 10 Blogging Tips',
    author: 'Jane Smith',
    date: 'September 28, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  // Add more blog posts here
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Latest Blogs</h1>
      {blogsData.map((blog, index) => (
        <div key={index} className="blog-card">
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-meta">
            By {blog.author} | {blog.date}
          </p>
          <p className="blog-content">{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
