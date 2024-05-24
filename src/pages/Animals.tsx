import Appbar from '@/components/Appbar'
import MainCard from '@/components/MainCard'
import { shuffle } from '@/utils/array-utils'

const Animals = () => {
  const images = [
    'image1.png',
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png',
    'image6.png',
    'image7.png',
    'image8.png',
    'image9.png',
    'image10.png',
    'image11.png',
  ]

  shuffle(images)

  return (
    <>
      <Appbar />
      <div className="flex sm:p-8 md:p-16 lg:p-24 mt-8 justify-center items-center">
        <MainCard images={images} dir="animals" />
      </div>
    </>
  )
}

export default Animals
