import { useCallback } from 'react'

export const useCardHover = () => {
  const handleMove = useCallback((event: Event) => {
    event.preventDefault()

    let clientX = 0
    let clientY = 0

    if (event instanceof TouchEvent) {
      clientX = event.touches[0].clientX
      clientY = event.touches[0].clientY
    } else if (event instanceof MouseEvent) {
      clientX = event.clientX
      clientY = event.clientY
    }

    const card = event.currentTarget as HTMLElement
    const cardHeight = card.clientHeight
    const cardWidth = card.clientWidth

    // Calculate the percentage of mouse/finger position on the X axis
    const xPercentage = Math.abs(Math.floor((100 / cardWidth) * clientX) - 100)

    // Calculate the percentage of mouse/finger position on the Y axis
    const yPercentage = Math.abs(Math.floor((100 / cardHeight) * clientY) - 100)

    // Combine the X and Y axis percentages to get a single value for the card's position
    const position = 50 - xPercentage + (50 - yPercentage)

    // Calculate the X and Y position for the gradient effect
    const gradientX = 50 + (xPercentage - 50) / 1.5
    const gradientY = 50 + (yPercentage - 50) / 1.5

    // Calculate the X and Y position for the spark effect
    const sparkX = 50 + (xPercentage - 50) / 7
    const sparkY = 50 + (yPercentage - 50) / 7

    // Calculate the opacity for the spark effect
    const opacity = 20 + Math.abs(position) * 1.5

    // Calculate the rotation on the Y axis for the gradient effect
    const rotationY = ((gradientY - 50) / 2) * -1

    // Calculate the rotation on the X axis for the gradient effect
    const rotationX = ((gradientX - 50) / 1.5) * 0.5

    card.classList.add('moved')
    card.style.setProperty('--boxBeforeSparkX', `${sparkX}%`)
    card.style.setProperty('--boxBeforeSparkY', `${sparkY}%`)
    card.style.setProperty('--boxBeforeRotationX', `${rotationX}deg`)
    card.style.setProperty('--boxBeforeRotationY', `${rotationY}deg`)
    card.style.setProperty('--boxBeforePositionX', `${sparkX}%`)
    card.style.setProperty('--boxBeforePositionY', `${sparkY}%`)
    card.style.setProperty('--boxBeforeOpacity', `${opacity / 100}`)
  }, [])

  const handleOut = useCallback((event: Event) => {
    const card = event.currentTarget as HTMLElement
    card.classList.remove('moved')
  }, [])

  return {
    handleMove,
    handleOut
  }
}
