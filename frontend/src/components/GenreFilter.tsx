import React, { useEffect, useState } from 'react'
import axios from 'axios'

export interface Genre {
  id: number,
  attributes: {
    name: string
  }
}

interface Props {
  onGenreSelect: (query: string) => void
}

const GenreFilter: React.FC<Props> = ({ onGenreSelect }) => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await axios.get('http://localhost:4000/api/genres')
      setGenres(response.data.data)
    }

    fetchGenres()
  }, [])

  return (
    <select onChange={(e) => onGenreSelect(e.target.value)} defaultValue="">
      <option value="all">All genres</option>
      <option value="a">a</option>
      <option value="b">b</option>
      {genres.map((genre: Genre) => (
        <option key={genre.id} value={genre.id}>{genre.attributes.name}</option>
      ))}
    </select>
  )
}

export default GenreFilter
