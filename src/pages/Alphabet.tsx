import Appbar from '@/components/Appbar'
import MainCard from '@/components/MainCard'

const Alphabet = () => {
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
    'image12.png',
    'image13.png',
    'image14.png',
    'image15.png',
    'image16.png',
    'image17.png',
    'image18.png',
    'image19.png',
    'image20.png',
    'image21.png',
    'image22.png',
    'image23.png',
    'image24.png',
    'image25.png',
    'image26.png',
  ]

  return (
    <>
      <Appbar />
      <div className="flex sm:p-8 md:p-16 lg:p-24 mt-8 justify-center items-center">
        <MainCard images={images} dir="alphabet" />
      </div>
    </>
  )
}

export default Alphabet
