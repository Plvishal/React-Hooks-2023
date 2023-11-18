import { useState, useRef, useEffect } from 'react';
import React from 'react';
import './styles/style.css';
import { db } from '../firebaseinit';
import { collection, addDoc } from 'firebase/firestore';

function IndexC() {
  //   const [title, setTitle] = useState('');
  //   const [content, setContent] = useState('');
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [blogs, setBlogs] = useState([]);
  // useRef
  const titleRef = useRef(null);
  // uqse of the useEffect
  useEffect(() => {
    titleRef.current.focus();
  }, []); //adding a empty[]dependencies means this effect happening only the initail render

  // title change on the codition which blog place top of thr array
  useEffect(() => {
    if (blogs.length && blogs[0].title) {
      document.title = blogs[0].title;
    } else {
      document.title = 'No Blogs !!';
    }
  }, [blogs]);

  async function handleSubmit(e) {
    e.preventDefault();
    titleRef.current.focus();
    // setBlogs([{ title, content }]);
    setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, 'blogs'), {
      title: formData.title,
      content: formData.content,
      createdOn: new Date(),
    });
    console.log('Document written with ID: ', docRef.id);
    setFormData({ title: '', content: '' });
  }
  function removeBLogs(i) {
    setBlogs(blogs.filter((blog, index) => i !== index));
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
            value={formData.title}
            ref={titleRef}
            onChange={(e) =>
              setFormData({ title: e.target.value, content: formData.content })
            }
          />
          <hr />
          <label htmlFor="content">Content</label>
          <br />
          <textarea
            name="content"
            rows={4}
            cols={30}
            value={formData.content}
            onChange={(e) =>
              setFormData({ title: formData.title, content: e.target.value })
            }
            required
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
            <div key={i} className="output_c">
              <h3>~{blog.title}</h3>
              <p>{blog.content}</p>
              <div>
                <button onClick={() => removeBLogs(i)} className="del-btn">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default IndexC;
