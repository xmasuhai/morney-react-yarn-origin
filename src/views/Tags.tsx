import React from 'react'
import {Layout} from 'components/Layout'
import {useTags} from 'hooks/useTags'
import {TagList} from 'components/tags/TagList'
import {AddTagSection} from 'components/tags/AddTagSection'

/**
 * @Description: 标签页面
 * @Author: XuShuai
 * @Date: 2023-12-14 06:45:29
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-16 22:24:19
 * @FilePath: src/views/Tags.tsx
 */
export function Tags() {
  const {tags,} = useTags()

  return (
    <Layout>
      <TagList tags={tags}/>
      <AddTagSection/>
    </Layout>
  )
}
