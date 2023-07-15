import Image from 'next/image'
import { Inter } from 'next/font/google'
import Heading from '@/components/home/heading'
import Fight from '@/components/home/fight'
import Warning from '@/components/home/warning'
import Data from '@/components/home/data'
import Scam from '@/components/home/scam'
import Sign from '@/components/home/sign'
import Safe from '@/components/home/safe'
import Video from '@/components/home/video'
import Story from '@/components/home/story'
import Government from '@/components/home/government'
import Scammed from '@/components/home/scammed'
import Slide from '@/components/home/slide'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`pb-4`}
    >
     <Heading/>
    
     <Fight/>
     <Warning/>
     <Data/>
     <Scam/>
     <Sign/>
     <Safe/>
     <Video/>
     <Story/>
     <Government/>
     <Scammed/>
    </main>
  )
}
