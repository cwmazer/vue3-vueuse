import { ref } from 'vue'
import { createGlobalState, useStorage } from '@vueuse/core'

export const useGlobalCount = createGlobalState(() => {
  const count = ref(0)
  const increase = () => {
    count.value = count.value + 1
  }
  const decrease = () => {
    count.value -= 1
  }
  return { count, increase, decrease }
})


export const useGlobalCountPersistence = createGlobalState(() => {
  const count = useStorage('my-count', 0)
  const increase = () => {
    count.value = count.value + 1
  }
  const decrease = () => {
    count.value -= 1
  }
  return { count, increase, decrease }
})