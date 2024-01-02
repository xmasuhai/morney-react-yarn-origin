import React from 'react'
import {Layout} from 'components/Layout'
import {useTags} from 'components/money/hooks/useTags'

// 标签页面
export function Tags() {
  const {tags, setTags}= useTags()


  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  )
}
