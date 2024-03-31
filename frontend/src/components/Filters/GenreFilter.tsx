import React, { useState } from 'react'
import { Genre } from '../../types'
import { useGetGenresQuery } from '../../features/genres/genresApi'
import { Button, Menu, MenuButton, MenuItem, MenuList, Skeleton } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'

interface Props {
  onGenreSelect: (query: string) => void,
  selectedGenre: string
}

const GenreFilter: React.FC<Props> = ({ onGenreSelect }) => {
  const [genreName, setGenreName] = useState('All genres')
  const { data: genres, error, isLoading } = useGetGenresQuery()

  const handleGenreSelect = (genreId: string, genreName: string) => {
    setGenreName(genreName)
    onGenreSelect(genreId)
  }

  if (isLoading) return <Skeleton><div>Loading...</div></Skeleton>
  if (error) return <div>Error: {error.toString()}</div>

  return (
    <Menu isLazy>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {genreName}
      </MenuButton>
      <MenuList maxH="300px" overflowY="auto">
        <MenuItem onClick={() => handleGenreSelect('all', 'All genres')}>All genres</MenuItem>
        {genres?.map((genre: Genre) => (
          <MenuItem
            key={genre.id}
            onClick={() => handleGenreSelect(genre.id.toString(), genre.name)}
          >
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
    // <select onChange={(e) => onGenreSelect(e.target.value)} defaultValue="">
    //   <option value="all">All genres</option>
    //   {genres?.map((genre: Genre) => (
    //     <option key={genre.id} value={genre.id}>{genre.name}</option>
    //   ))}
    // </select>
  )
}

export default GenreFilter
