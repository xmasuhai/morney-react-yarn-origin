import React, {useState} from 'react'
import {Layout} from 'components/common/Layout'
import styled from 'styled-components'
import {TagsSection} from 'components/money/TagsSection'
import {NoteSection} from 'components/money/NoteSection'
import {CategorySection, CategoryStr,} from 'components/money/CategorySection'
import {NumberPadSection} from 'components/money/NumberPadSection'
import {useRecords} from 'hooks/useRecords'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

/** 初始默认记账信息 */
const defaultMoneyInfoObj = {
  tagIds: [] as number[],
  note: '',
  category: 'expenditure' as CategoryStr,
  amount: 0,
}

/**
 * @Description: 记账页面
 * @Author: XuShuai
 * @Date: 2023-12-14 06:45:40
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-06-02 06:24:50
 * @FilePath: src/views/Money.tsx
 */
export const Money = () => {
  const [
    moneyInfoObj,
    setMoneyInfoObj,
  ] = useState({...defaultMoneyInfoObj})

  // 选择标签变化时，更新 moneyInfoObj
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

  const {addRecord,} = useRecords()

  /** 点击 ok 确认保存记录 */
  const onConfirm = () => {
    const result = addRecord(moneyInfoObj)
    if(result === 'failure') {return}
    alert('保存成功')
    // 重置记账信息
    setMoneyInfoObj({...defaultMoneyInfoObj})
  }

  return (
    <MyLayout scrollTop={9999}>
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
