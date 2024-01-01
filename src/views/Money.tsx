import React, {useState} from 'react'
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

type CategoryStr = 'income' | 'expenditure'

// 记账页面
export function Money() {
  const [
    moneyInfoObj,
    setMoneyInfoObj,
  ] = useState({
    tags: [] as string[],
    note: '',
    category: 'income' as CategoryStr,
    amount: 0,
  })

  // 选择标签变化时，更新moneyInfoObj
  const onSelectTagsChange = (newTags: string[]) => {
    setMoneyInfoObj({...moneyInfoObj, tags: newTags})
  }

  return  (
    <MyLayout>
      <TagsSection
        selectedTags={moneyInfoObj.tags}
        onSelectTagsChange={onSelectTagsChange}/>
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  )
}
