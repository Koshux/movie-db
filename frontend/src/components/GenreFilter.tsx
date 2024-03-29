import React, { useState } from 'react'
import { Genre } from '../types'
import { useGetGenresQuery } from '../features/genres/genresApi'

interface Props {
  onGenreSelect: (query: string) => void
}

const GenreFilter: React.FC<Props> = ({ onGenreSelect }) => {
  // const [genres, setGenres] = useState([])

  // useEffect(() => {
  //   const fetchGenres = async () => {
  //     const response = await axios.get('http://localhost:4000/api/genres')
  //     setGenres(response.data.data)
  //   }

  //   fetchGenres()
  // }, [])
  const [query, setQuery] = useState('')
  // const [genres, setGenres] = useState<Genre[]>([])
  const searchCriteria = `${query}`
  const { data: genres, error, isLoading } = useGetGenresQuery(searchCriteria)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.toString()}</div>

  return (
    <select onChange={(e) => onGenreSelect(e.target.value)} defaultValue="">
      <option value="all">All genres</option>
      <option value="a">a</option>
      <option value="b">b</option>
      {genres?.map((genre: Genre) => (
        <option key={genre.id} value={genre.id}>{genre.name}</option>
      ))}
    </select>
  )
}

export default GenreFilter
