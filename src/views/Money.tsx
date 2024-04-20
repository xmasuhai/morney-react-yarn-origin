import React, {useState} from 'react'
import {Layout} from 'components/Layout'
import styled from 'styled-components'
import {Tags as TagsSection} from 'components/money/TagsSection'
import {Note as NoteSection} from 'components/money/NoteSection'
import {Category as CategorySection, CategoryStr} from 'components/money/CategorySection'
import {NumberPad as NumberPadSection} from 'components/money/NumberPadSection'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

// 记账页面
export function Money() {
  const [
    moneyInfoObj,
    setMoneyInfoObj,
  ] = useState({
    tagIds: [] as number[],
    note: '',
    category: 'income' as CategoryStr,
    amount: 0,
  })

  // 选择标签变化时，更新moneyInfoObj
  const onChange = (obj: Partial<typeof moneyInfoObj>) => {
    setMoneyInfoObj({
      ...moneyInfoObj,
      ...obj,
    })
  }
  const onSelectTagsChange = (tagIds: number[]) => {onChange({tagIds: tagIds})}
  const onNoteChange = (note: string) => {onChange({note}) }
  const onCategoryChange = (category: CategoryStr) => {onChange({category})}
  const onAmountChange = (amount: number) => {onChange({amount})}

  const onConfirm = () => {}

  return (
    <MyLayout>
      <TagsSection
        selectedTags={moneyInfoObj.tagIds}
        onSelectTagsChange={onSelectTagsChange}/>
      <NoteSection
        noteValue={moneyInfoObj.note}
        onNoteChange={onNoteChange}/>
      <CategorySection
        categoryValue={moneyInfoObj.category}
        onCategoryChange={onCategoryChange}/>
      <NumberPadSection
        amountValue={moneyInfoObj.amount}
        onAmountChange={onAmountChange}
        onConfirm={onConfirm}/>
    </MyLayout>
  )
}
