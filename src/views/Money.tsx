import React, {useState} from 'react'
import {Layout} from 'components/common/Layout'
import styled from 'styled-components'
import {TagsSection} from 'components/money/TagsSection'
import {NoteSection} from 'components/money/NoteSection'
import {
  CategorySection,
  CategoryStr,
} from 'components/money/CategorySection'
import {NumberPadSection} from 'components/money/NumberPadSection'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

/**
 * @Description: 记账页面
 * @Author: XuShuai
 * @Date: 2023-12-14 06:45:40
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-23 20:02:11
 * @FilePath: src/views/Money.tsx
 */
export function Money() {
  const [
    moneyInfoObj,
    setMoneyInfoObj,
  ] = useState({
    tagIds: [] as number[],
    note: '',
    category: 'expenditure' as CategoryStr,
    amount: 0,
  })

  // 选择标签变化时，更新moneyInfoObj
  const onChange = (
    obj: Partial<typeof moneyInfoObj>
  ) => {
    setMoneyInfoObj({
      ...moneyInfoObj,
      ...obj,
    })
  }
  const onSelectTagIdsChange = (tagIds: number[]) => {
    onChange({tagIds})
  }
  const onNoteChange = (note: string) => {
    onChange({note})
  }
  const onCategoryChange = (category: CategoryStr) => {
    onChange({category})
  }
  const onAmountChange = (amount: number) => {
    onChange({amount})
  }

  const onConfirm = () => {}

  return (
    <MyLayout>
      <TagsSection
        selectedTagIds={moneyInfoObj.tagIds}
        onSelectTagIdsChange={onSelectTagIdsChange}/>
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
