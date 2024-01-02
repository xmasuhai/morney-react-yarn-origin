import React from 'react'
import {Layout} from 'components/Layout'
import {useTags} from 'components/money/hooks/useTags'

// 标签页面
export function Tags() {
  const {tags, setTags}= useTags()


  return (
    <Layout>
      <ol>
        {tags.map(tag => (<li key={tag}>{tag}</li>))}
      </ol>
    </Layout>
  )
}
