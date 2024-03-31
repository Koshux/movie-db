import React, { useState } from 'react'
import { Genre } from '../../types'
import { useGetGenresQuery } from '../../features/genres/genresApi'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'

interface Props {
  onGenreSelect: (query: string) => void,
  selectedGenre: string
}

const GenreFilter: React.FC<Props> = ({ onGenreSelect, selectedGenre }) => {
  const [query, setQuery] = useState('')
  const searchCriteria = `${query}`
  const { data: genres, error, isLoading } = useGetGenresQuery(searchCriteria)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.toString()}</div>

  return (
    <Menu isLazy>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {selectedGenre ? selectedGenre : 'All genres'}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onGenreSelect('all')}>All genres</MenuItem>
        {genres?.map((genre: Genre) => (
          <MenuItem
            key={genre.id}
            onClick={() => onGenreSelect(genre.id.toString())}
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
