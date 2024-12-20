import React from 'react'
import {Layout} from 'components/Layout'
import {useTags} from 'components/money/hooks/useTags'
import {TagList} from 'components/tags/TagList'
import {AddTagSection} from 'components/tags/AddTagSection'

/**
 * @Description: 标签页面
 * @Author: XuShuai
 * @Date: 2023-12-14 06:45:29
 * @LastEditors: XuShuai
 * @LastEditTime: 2024-12-20 22:10:10
 * @FilePath: src/views/Tags.tsx
 */
export function Tags() {
  const {tags, /*setTags*/} = useTags()

  return (
    <Layout>
      <TagList tags={tags}/>
      <AddTagSection/>
    </Layout>
  )
}
