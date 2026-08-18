import { ref, onMounted, onUnmounted } from 'vue'

export function useCountdown(targetDateString = 'November 21, 2026 17:00:00') {
  const days = ref('00')
  const hours = ref('00')
  const minutes = ref('00')
  const seconds = ref('00')
  const isFinished = ref(false)
  
  let timerInterval = null

  const calculateTime = () => {
    const targetDate = new Date(targetDateString).getTime()
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference <= 0) {
      days.value = '00'
      hours.value = '00'
      minutes.value = '00'
      seconds.value = '00'
      isFinished.value = true
      if (timerInterval) clearInterval(timerInterval)
      return
    }

    const d = Math.floor(difference / (1000 * 60 * 60 * 24))
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const s = Math.floor((difference % (1000 * 60)) / 1000)

    days.value = d < 10 ? '0' + d : String(d)
    hours.value = h < 10 ? '0' + h : String(h)
    minutes.value = m < 10 ? '0' + m : String(m)
    seconds.value = s < 10 ? '0' + s : String(s)
  }

  onMounted(() => {
    calculateTime()
    timerInterval = setInterval(calculateTime, 1000)
  })

  onUnmounted(() => {
    if (timerInterval) clearInterval(timerInterval)
  })

  return {
    days,
    hours,
    minutes,
    seconds,
    isFinished,
  }
}
