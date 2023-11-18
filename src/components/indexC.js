import React from 'react';
import './styles/style.css';

function indexC() {
  return (
    <>
      <div className="form_container">
        <form>
          <label htmlFor="title">Title</label>
          <br />

          <input type="text" name="title" placeholder="Enter your title here" />
          <hr />
          <label htmlFor="content">Content</label>
          <br />
          <textarea name="content" rows={4} cols={30}></textarea>
          <hr />
          <button>Add</button>
        </form>
      </div>
      <hr  className='hr_sec'/>
      <div className="showblog_container"></div>
    </>
  );
}

export default indexC;
