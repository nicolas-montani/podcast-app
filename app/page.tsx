'use client'

import { useState } from 'react'
import { episodes } from '../types/episode'
import { AudioPlayer } from '../components/audio-player'

const EpisodeList = () => {
  const [playingId, setPlayingId] = useState<string | null>(null)

  const managementEpisodes = episodes.filter(ep => ep.category === 'management')
  const marketingEpisodes = episodes.filter(ep => ep.category === 'marketing')

  const handlePlayPause = (episode: typeof episodes[0]) => {
    setPlayingId(currentId => currentId === episode.id ? null : episode.id)
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Episode Library</h1>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Management</h2>
          <div className="space-y-2">
            {managementEpisodes.map(episode => (
              <AudioPlayer
                key={episode.id}
                episode={episode}
                isPlaying={playingId === episode.id}
                onPlayPause={handlePlayPause}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Marketing</h2>
          <div className="space-y-2">
            {marketingEpisodes.map(episode => (
              <AudioPlayer
                key={episode.id}
                episode={episode}
                isPlaying={playingId === episode.id}
                onPlayPause={handlePlayPause}
              />
            ))}
          </div>
        </section>
        <footer className="text-center mt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nicolas Montani. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default EpisodeList