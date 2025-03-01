import React from 'react'
import {Layout} from 'components/common/Layout'
import {useTags} from 'hooks/useTags'
import {TagList} from 'components/tags/TagList'
import {AddTagSection} from 'components/tags/AddTagSection'

/**
 * @Description: 标签页面
 * @Author: XuShuai
 * @Date: 2023-12-14 06:45:29
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-03-01 13:05:56
 * @FilePath: src/views/Tags.tsx
 */
export const Tags: React.FC = () => {
  const {tags, addTag} = useTags()
  return (
    <Layout>
      <TagList tags={tags}/>
      <AddTagSection
        onChange={addTag}/>
    </Layout>
  )
}
