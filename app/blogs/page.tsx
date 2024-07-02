'use client'
import { About, Profile } from '@containers'
import React from 'react'

import { AppWrap, MotionWrap } from '@components/Wrapper'

type Props = {}

const BlogPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Profile />
      {/* <About /> */}
    </div>
  )
}

export default BlogPage
