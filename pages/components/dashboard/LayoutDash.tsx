import Header from "./Header"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function LayoutDash({ children }:any) {
  return (
    <>
      <Header />
      <main className="main container min-h-screen max-w-full">
        <div className='grid grid-cols-5 gap-0 mt-10'> 

          <div className='w-12/12 pl-0 text-center'>
            <Navbar />    
          </div>

          <div className='w-12/12 pl-0 col-span-4'>
              {children}
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  )
}