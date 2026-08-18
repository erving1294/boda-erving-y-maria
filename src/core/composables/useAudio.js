import { ref } from 'vue'
import audioUrl from '../../assets/audio/Christina-Perri-A-Thousand-Years.mp3'

const isPlaying = ref(false)
let audio = null

if (typeof window !== 'undefined') {
  audio = new Audio(audioUrl)
  audio.loop = true
}

export function useAudio() {
  const play = () => {
    if (!audio) return
    audio.play()
      .then(() => {
        isPlaying.value = true
      })
      .catch((err) => {
        console.warn('Audio play failed:', err)
      })
  }

  const pause = () => {
    if (!audio) return
    audio.pause()
    isPlaying.value = false
  }

  const toggle = () => {
    if (isPlaying.value) {
      pause()
    } else {
      play()
    }
  }

  return {
    isPlaying,
    play,
    pause,
    toggle,
  }
}
