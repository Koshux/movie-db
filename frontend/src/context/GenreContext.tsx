import React, { createContext, useContext, useState } from 'react'

const GenreContext = createContext<string>('')
const GenreUpdateContext = createContext<React.Dispatch<React.SetStateAction<string>>>(() => {})
export const useGenre = () => useContext(GenreContext)
export const useGenreUpdate = () => useContext(GenreUpdateContext)

interface Props {
  children: React.ReactNode
}

export const GenreProvider: React.FC<Props> = ({ children }) => {
  const [genre, setGenre] = useState<string>('')

  return (
    <GenreContext.Provider value={genre}>
      <GenreUpdateContext.Provider value={setGenre}>
        {children}
      </GenreUpdateContext.Provider>
    </GenreContext.Provider>
  )
}

export default GenreProvider
