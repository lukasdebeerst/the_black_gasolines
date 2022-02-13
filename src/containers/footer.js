
const Footer = () => {

  return (
    <footer className='relative flex items-center justify-center w-full py-10 bg-gray-700'>
      <div className="absolute top-0 z-0 w-screen h-full transform -translate-x-1/2 bg-gray-700 left-1/2" ></div>
      <p className="relative">&copy; {new Date().getFullYear()} - The Black Gasolines</p>
    </footer>
  )

}

export default Footer;