
import Header from "./Header"
import Footer from "./Footer"

export default function LayoutDash({ children }:any) {
  return (
    <>
      <Header />
      <main className="main container min-h-screen max-w-full">{children}</main>
      <Footer />
    </>
  )
}