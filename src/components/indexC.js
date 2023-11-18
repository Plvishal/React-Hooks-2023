import { useState } from 'react';
import React from 'react';
import './styles/style.css';

function IndexC() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState([]);
  //   let blog = [
  //     {
  //       title: '',
  //       content: '',
  //     },
  //   ];
  function handleSubmit(e) {
    e.preventDefault();
    setBlogs([{ title, content }]);
    setBlogs([{ title, content }, ...blogs]);

    console.log(blogs);
  }
  return (
    <>
      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <br />

          <input
            type="text"
            name="title"
            placeholder="Enter your title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <hr />
          <label htmlFor="content">Content</label>
          <br />
          <textarea
            name="content"
            rows={4}
            cols={30}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <hr />
          <button>Add</button>
        </form>
      </div>
      <hr className="hr_sec" />
      <div className="showblog_container">
        <h1>Blogs</h1>
        <div>
          {blogs.map((blog, i) => (
            <div key={i}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default IndexC;
