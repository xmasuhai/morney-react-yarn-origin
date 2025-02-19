import React from 'react'
import {useTags} from '../hooks/useTags'
import {useParams} from 'react-router-dom'

type Params = {
  id: string
}
export const TagEdit: React.FC = () => {
  const {tags} = useTags()
  const {id} = useParams<Params>()

  const tag = tags.find(tag => `${tag.id}` === id)

  return (
    <>
      {tag && tag.name}
    </>
  )
}
