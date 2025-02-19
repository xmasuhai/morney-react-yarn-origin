let id = 0

/**
 * @Description: This is a function to create a unique id.
 * @Author: XuShuai
 * @Date: 2025-02-19 15:50:57
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-19 15:55:51
 * @FilePath: src/lib/createId.ts
 */
export const createId = () => {
  id += 1
  return id
}
