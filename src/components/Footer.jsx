export default function Footer(){
  return(
    <footer className='text-white flex flex-row pb-5 gap-8 justify-center'>
    <p className='text-black font-semibold'>ViniPessan&copy;2023</p>
    <div className=' font-semibold '>
    <a href="https://www.instagram.com/vini_pessan/" target="blank" className='underline me-4 hover:text-gray-300'>Instagram</a>
    <a href="https://www.youtube.com/" target="blank" className='underline me-4 hover:text-gray-300'>Youtube</a>
    <a href="https://twitter.com/VinciusPessan1" target="blank"  className='underline hover:text-gray-300'>Twitter</a>
    </div>
    </footer>
  )
}