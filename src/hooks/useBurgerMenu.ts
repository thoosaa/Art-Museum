import { useState } from 'react'

export function useBurgerMenu(): [boolean, boolean, () => void] {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [isOverlay, setOverlay] = useState<boolean>(false)

  const toggle = () => {
    setOpen(!isOpen)
    setOverlay(!isOverlay)
  }

  return [isOpen, isOverlay, toggle]
}
