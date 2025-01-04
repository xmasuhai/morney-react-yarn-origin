/**
 * @Description:
 * @Author: XuShuai
 * @Date: 2025-01-02 21:54:07
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-01-04 15:19:57
 * @FilePath: src/dev/previews.tsx
 */
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {Money} from '../views/Money'

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/Money">
        <Money/>
      </ComponentPreview>
      <ComponentPreview
        path="/ComponentPreviews">
        <ComponentPreviews/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews
