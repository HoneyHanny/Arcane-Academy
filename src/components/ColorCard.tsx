import { MouseEventHandler } from 'react'
import { Card } from './ui/card'
import { cn } from '@/lib/utils'

const ColorCard = ({ id, text, color, onClick }: { id: string; text?: string; color: string; onClick?: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <Card id={id} className={cn('h-24 w-24 flex justify-center text-center items-center', color)} onClick={onClick}>
      {text}
    </Card>
  )
}

export default ColorCard
