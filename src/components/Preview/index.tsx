import React from 'react'
import './Preview.css'
export default function Preview() {
  return (
    <div className="previewWrapper">
      <a href="#proj1">
        <div className=" preview">
          <h2>1</h2>
        </div>
      </a>
      <a href="#proj2">
        <div className="preview">
          <h2>2</h2>
        </div>
      </a>
      <div className="preview">
        <h2>3</h2>
      </div>
      <div className="preview">
        <h2>4</h2>
      </div>
    </div>
  )
}
