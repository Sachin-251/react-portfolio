import React from 'react'

export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a href="https://www.linkedin.com" className="hover:opacity-50 transition duration-500" target="_blank" rel="noreferrer">
            <img src={require('../assets/linkedin.png')} alt="linkedin-link" />
        </a>
        <a href="https://www.github.com" className="hover:opacity-50 transition duration-500" target="_blank" rel="noreferrer">
            <img src={require('../assets/github.png')} alt="github-link" />
        </a>
        <a href="https://www.twitter.com" className="hover:opacity-50 transition duration-500" target="_blank" rel="noreferrer">
            <img src={require('../assets/twitter.png')} alt="twitter-link" />
        </a>
        <a href="https://www.facebook.com" className="hover:opacity-50 transition duration-500" target="_blank" rel="noreferrer">
            <img src={require('../assets/facebook.png')} alt="facebook-link" />
        </a>
        
    </div>
  )
}
