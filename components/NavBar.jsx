import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'

function NavItems() {
  const router = useRouter()
  const navigation = [
    { name: 'Home', href: '/', current: router.asPath === '/' },
    {
      name: 'Projects',
      href: '/project',
      current: router.asPath === '/project',
    },
    { name: 'Blog', href: '/blog', current: router.asPath === '/blog' },
    {
      name: 'Resources',
      href: '/resource',
      current: router.asPath === '/resource',
    },
  ]
  return navigation
}

export default function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className="mx-auto max-w-2xl">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-md py-2 px-8 text-gray-800 hover:bg-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden w-full sm:block">
              <div className="flex justify-between space-x-5">
                {NavItems().map((item) => (
                  <Link href={item.href} key={item.href}>
                    <a
                      className={cn(
                        item.current ? 'font-semibold' : 'font-normal',
                        'text-md rounded-md py-2  text-gray-800 hover:bg-gray-200'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pt-2 pb-3">
          {NavItems().map((item) => (
            <Link href={item.href} key={item.href}>
              <a
                key={item.name}
                as="a"
                className={cn(
                  item.current ? 'font-semibold' : 'font-normal',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export async function getStaticProps() {
  const timelineList = await ContentfulApi()
  return {
    props: { timelineList },
    revalidate: 10,
  }
}
