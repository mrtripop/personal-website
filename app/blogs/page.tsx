'use client'
import { About, Profile, Achievement, Skills, Contact } from '@containers'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='app'>
      <Profile />
      <About />
      <Achievement />
      <Skills />
      <Contact />
    </div>
  )
}

export default BlogPage
