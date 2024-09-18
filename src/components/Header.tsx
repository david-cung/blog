import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl 
      font-semibold dark:text-white'
      >
        <span
          className='px-2 py-1 bg-gradient-to-t from-indigo-500
         via-purple-500 to-pink-500 rounded-lg text-white'
        >
          David's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden rounded-full' color='gray'>
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline ' color='gray'>
          <FaMoon />
        </Button>
        <Link to='sign-in'>
          <Button className='bg-gradient-to-r from-purple-500 to-blue-500 outline-none'>
            Sign In
          </Button>
        </Link>
      </div>
      <Navbar.Toggle className='lg:hidden' />
      <Navbar.Collapse className='lg:flex lg:flex-row lg:space-x-6 space-y-40 lg:space-y-3'>
        <Link
          to='/'
          className={`lg:mr-10 text-lg font-bold hover:text-blue-800 ${
            isActive("/") ? "text-blue-600" : "text-gray-700"
          }`}
        >
          Home
        </Link>
        <Link
          to='/about'
          className={`lg:mr-10 text-lg font-bold hover:text-blue-800 ${
            isActive("/about") ? "text-blue-600" : "text-gray-700"
          }`}
        >
          About
        </Link>
        <Link
          to='/projects'
          className={`lg:mr-10 text-lg font-bold hover:text-blue-800 ${
            isActive("/projects") ? "text-blue-600" : "text-gray-700"
          }`}
        >
          Project
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
