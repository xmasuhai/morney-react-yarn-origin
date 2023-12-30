import React from 'react'
import {Layout} from 'components/Layout'
import styled from 'styled-components'
import {Tags as TagsSection} from 'components/money/TagsSection'
import {Note as NoteSection} from 'components/money/NoteSection'
import {Category as CategorySection} from 'components/money/CategorySection'
import {NumberPad as NumberPadSection } from 'components/money/NumberPadSection'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

// 记账页面
export function Money() {
  return  (
    <MyLayout>
      <TagsSection />
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  )
}
