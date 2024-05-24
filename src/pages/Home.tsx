import Appbar from '../components/Appbar'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link } from 'react-router-dom'

const Home = () => {
  const lessons = [
    { title: 'Alphabet', desc: 'Learn the English alphabet.' },
    { title: 'Numbers', desc: 'Learn how to count one to ten.' },
    { title: 'Colors', desc: 'Discover beautiful colors.' },
    { title: 'Animals', desc: 'Discover diverse animals.' },
    // { title: 'AI', desc: 'Discover the powers of Artificial Intelligence.' },
  ]

  return (
    <div>
      <Appbar />
      <div className=''>
        <div className='pb-8 mt-8 md:mt-16 flex items-center justify-center flex-wrap gap-6 2xl:gap-20 flex-row'>
          {lessons.map((lesson, index) => (
            <Link to={'/' + lesson.title.toLowerCase()} key={index}>
              <Card className='relative w-72 h-48 2xl:w-96 2xl:h-72 2xl:gap-40'>
                <CardHeader>
                  <CardTitle>{lesson.title}</CardTitle>
                </CardHeader>
                <CardDescription className='px-6'>
                  {lesson.desc}
                </CardDescription>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
