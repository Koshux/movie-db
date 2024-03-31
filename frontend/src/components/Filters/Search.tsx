import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import React, { useState } from "react"

interface Props {
  onSearch: (query: string) => void
  isLoading: boolean
}

const Search: React.FC<Props> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          placeholder="Search for a movie..."
          _placeholder={{ color: 'gray.500' }}
          color="gray.800"
          backgroundColor="white"
          borderColor="gray.300"
          _dark={{
            color: 'whiteAlpha.500',
            backgroundColor: 'gray.800',
            borderColor: 'gray.600',
            _placeholder: { color: 'gray.400'}
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <InputRightElement width="6.5rem">
          <Button type="submit" isLoading={isLoading}>Search</Button>
        </InputRightElement>
      </InputGroup>
    </form>
  )
}

export default Search
