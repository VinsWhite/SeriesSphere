import {
  Navbar,
  NavbarContent,
  NavbarItem
} from '@nextui-org/react'
import Link from 'next/link'
import SwitchButton from '@/components/switch-button'
import { TbAlignLeft } from "react-icons/tb";

export default function Header() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent className="hidden sm:flex gap-4 px-0" justify="center">
        <NavbarItem>
          <TbAlignLeft className='size-7' />
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/latest">
            Latest News
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href='/contact'>Contact us</Link>
        </NavbarItem>
        <NavbarItem>
          <SwitchButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
