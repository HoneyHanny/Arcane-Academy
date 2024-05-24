// import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { getImageUrl } from '@/utils/image-utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

interface Props {
  images: string[]
  dir: string
}

const MainCard = ({ images, dir }: Props) => {
  // const urls = import.meta.glob(`../assets/${dir}/*.png`)
  return (
    <Carousel className="w-full max-w-xl place-self-center">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="main-card p-10 place-self-center">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img
                  key={index}
                  src={getImageUrl('../assets/' + dir + '/' + image)}
                  alt="content"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default MainCard
