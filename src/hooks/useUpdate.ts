import {useEffect, useRef} from 'react'

/**
 * @Description: 统一封装记录并避免首次执行就更新回调
 * @Author: XuShuai
 * @Date: 2025-03-08 16:45:49
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-03-08 17:29:00
 * @FilePath: src/hooks/useUpdate.ts
 */
export const useUpdate = (
  cb: () => void,
  deps: unknown[] = []
) => {
  const count = useRef(0)

  useEffect(() => {count.current++})
  useEffect(
    () => {
      if(count.current > 1) {
        cb()
      }
    },
    deps)
}
