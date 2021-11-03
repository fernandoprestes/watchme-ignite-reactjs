import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { Button } from './Button'

interface SidebarProps {
  setSelectedGenreId: (id: number) => void
  selectedGenreId: number
}

interface GenreProps {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

export function SideBar({selectedGenreId, setSelectedGenreId} : SidebarProps) {
  const [genres, setGenres] = useState<GenreProps[]>([])
  
  useEffect(() => {
    api.get<GenreProps[]>('genres').then(response => {
      setGenres(response.data)
    })
  }, [])

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
