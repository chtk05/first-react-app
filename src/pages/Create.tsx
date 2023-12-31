import { useNavigate } from 'react-router-dom'
import usePosts from '../hooks/usePosts'
import { FormEvent, useState } from 'react'

const Create = () => {
  const { isLoading, isSubmitting, createPost } = usePosts()
  const navigate = useNavigate()
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createPost(newTitle, newBody)

      setNewTitle('')
      setNewBody('')
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
      <label>Body</label>
      <input type="text" value={newBody} onChange={(e) => setNewBody(e.target.value)} required />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

export default Create
