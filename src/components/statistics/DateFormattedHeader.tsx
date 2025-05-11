import {DateHeaderStyled} from 'components/statistics/styled/DateHeaderStyled'
import React from 'react'
import dayjs from 'dayjs'

type Props = {
  date: string,
}

/**
 * @Description: 记账格式化日期头部标题
 * @Author: XuShuai
 * @Date: 2025-05-11 13:07:16
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-11 13:28:29
 * @FilePath: src/components/statistics/DateFormattedHeader.tsx
 */
export const DateFormattedHeader = ({date}: Props) => {
  const formattedDateCases = [
    [
      () => dayjs().isSame(date, 'day'),
      () => '今天',
    ],
    [
      () => dayjs().subtract(1, 'day').isSame(date, 'day'),
      () => '昨天',
    ],
    [
      () => true,
      () => date,
    ],
  ] as const

  const genFormattedDate = () => formattedDateCases
    .find(([conditionFn,]) =>
      conditionFn())?.[1]() || ''

  return (
    <DateHeaderStyled>
      {genFormattedDate()}
    </DateHeaderStyled>
  )
}
