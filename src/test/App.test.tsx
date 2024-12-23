import React from 'react'
import {render, screen} from '@testing-library/react'
import {App} from '../App'

/**
 * @Description:
 * @Author: XuShuai
 * @Date: 2023-10-28 19:52:35
 * @LastEditors: XuShuai
 * @LastEditTime: 2024-12-23 21:08:04
 * @FilePath: src/test/App.test.tsx
 */
test('renders OK', () => {
  render(<App/>)
  const linkElement = screen.getByText(/OK/i)
  expect(linkElement).toBeInTheDocument()
})
