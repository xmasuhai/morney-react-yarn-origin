let id = Number(JSON.parse(window.localStorage.getItem('idMax') || '0'))

/**
 * @Description: This is a function to create a unique id.
 * @Author: XuShuai
 * @Date: 2025-02-19 15:50:57
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-03-08 17:37:55
 * @FilePath: src/lib/createId.ts
 */
export const createId = () => {
  id += 1
  window.localStorage.setItem('idMax', JSON.stringify(id))
  return id
}
