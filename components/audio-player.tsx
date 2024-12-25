'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Episode } from '../types/episode'

interface AudioPlayerProps {
  episode: Episode
  isPlaying: boolean
  onPlayPause: (episode: Episode) => void
}

export function AudioPlayer({ episode, isPlaying, onPlayPause }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isPlaying])

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(progress)
    }
  }

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={() => onPlayPause(episode)}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
      
      <div className="flex-1 min-w-0">
        <div className="font-medium truncate">{episode.title}</div>
        <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <a
        href={episode.url}
        download
        className="ml-2"
        onClick={(e) => e.stopPropagation()}
      >
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Download className="h-4 w-4" />
        </Button>
      </a>

      <audio
        ref={audioRef}
        src={episode.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => onPlayPause(episode)}
      />
    </div>
  )
}