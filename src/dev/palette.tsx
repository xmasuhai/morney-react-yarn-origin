/**
 * @Description:
 * @Author: XuShuai
 * @Date: 2025-01-02 21:54:07
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-01-02 21:54:37
 * @FilePath: src/dev/palette.tsx
 */
import {Fragment} from 'react'
import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox'

export const PaletteTree = () => (
  <Palette>
    <Category name="App">
      <Component name="Loader">
        <Variant>
          <ExampleLoaderComponent/>
        </Variant>
      </Component>
    </Category>
  </Palette>
)

export function ExampleLoaderComponent() {
  return (
    <Fragment>Loading...</Fragment>
  )
}
