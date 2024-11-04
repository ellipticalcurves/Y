import Link from "next/link";

import { HiOutlineHashtag } from "react-icons/hi";
import { SiHomeadvisor } from "react-icons/si";
import { BsBell } from "react-icons/bs";


const NAVIGATION_ITEMS = [
  {
    title:'Home',
    icon:SiHomeadvisor
  },
  {
    title:'Explore',
    icon:HiOutlineHashtag
  },
  {
    title:'Notificationsbutdoublechecked',
    icon:BsBell

  }



]


const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-lg w-full h-full flex relative'>
        <section className='fixed w-72 flex flex-col h-screen'>
          {
            NAVIGATION_ITEMS.map((item)=>(
              <Link 
              className='bg-white/50 flex items-center  space-x-2 rounded-3xl p-4' 
              href={`/${item.title.toLowerCase()}`} 
              key = {item.title}>
                <div>
                  <item.icon/>
                </div>
                <div>
                  {
                    item.title
                  }
                </div>
              </Link>
            ))
          }
        </section>
        <main>Home timeline</main>
        <section>right section</section>

      </div>

    </div>
  )
}

export default Home