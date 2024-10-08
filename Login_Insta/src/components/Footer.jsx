import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="#">Meta</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Jobs</a>
        <a href="#">Help</a>
        <a href="#">API</a>
        <a href="#">Privacy</a>
        <a href="#">Cookie Settings</a>
        <a href="#">Terms</a>
        <a href="#">Locations</a>
        <a href="#">Instagram Lite</a>
        <a href="#">Threads</a>
        <a href="#">Contact Uploading & Non-Users</a>
        <a href="#">Meta Verified</a>
      </div>
      <div className="language">
        <div>
          <ul>
            <li>
              <a className='color' href="#">English ▼</a>
              <ul>
                <li>
                  <a href="#">France</a>
                </li>
                <li>
                  <a href="#">Portuguese</a>
                </li>
                <li>
                  <a href="#">chingchong</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <span>© 2024 Instagram from Meta</span>
      </div>
    </div>
  )
}
