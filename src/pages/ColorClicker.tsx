import React, { useState } from 'react'
import Appbar from '@/components/Appbar'
import ColorCard from '@/components/ColorCard'

const PATH = '/assets/audio/colors/'

const _colors = [
  { color: 'red', className: 'bg-red-500', asset: PATH + 'Red.wav' },
  { color: 'green', className: 'bg-green-500', asset: PATH + 'Green.wav' },
  { color: 'blue', className: 'bg-blue-500', asset: PATH + 'Blue.wav' },
  { color: 'yellow', className: 'bg-yellow-400', asset: PATH + 'Yellow.wav' },
  { color: 'orange', className: 'bg-orange-500', asset: PATH + 'Orange.wav' },
  { color: 'pink', className: 'bg-pink-500', asset: PATH + 'Pink.wav' },
  { color: 'purple', className: 'bg-purple-500', asset: PATH + 'Purple.wav' },
  { color: 'gray', className: 'bg-[#808080]', asset: PATH + 'Gray.wav' },
  { color: 'brown', className: 'bg-[#964B00]', asset: PATH + 'Brown.wav' },
]

const ColorClicker = () => {
  const [colors, setColors] = useState(_colors)

  let clicked = false

  const shuffle = () => {
    const shuffledColors = colors.sort(() => Math.random() - 0.5)
    setColors([...shuffledColors])
  }

  const handleClick = (e: React.MouseEvent) => {
    if (clicked) return

    const span = document.createElement('span')

    span.id = 'onclick-span'
    // span.textContent = '🎉'
    span.textContent = ' '
    span.className = 'animate-ping absolute h-10 w-10 rounded-full bg-amber-500'
    span.style.top = e.clientY - 20 + 'px'
    span.style.left = e.clientX - 20 + 'px'
    document.body.appendChild(span)

    for (const col of colors) {
      if (e.currentTarget.id === col.color) {
        const audio = new Audio(col.asset)
        audio.play()
      }
    }

    setTimeout(() => {
      document.getElementById('onclick-span')?.remove()
      shuffle()
    }, 300)
    clicked = true
  }

  // useEffect(() => {
  //   document.addEventListener('mousedown', event => {
  //     // Will make animation on click
  //     event.preventDefault()
  //   })

  //   return () => {
  //     document.removeEventListener('mousedown', () => {})
  //   }
  // }, [])

  return (
    <>
      <Appbar />
      <div className='flex sm:p-8 md:p-16 lg:p-24 mt-8 justify-center items-center'>
        <div className='grid grid-cols-3 gap-4'>
          {colors.map((color, index) => (
            <ColorCard key={index} color={color.className} id={color.color} onClick={handleClick} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ColorClicker
