import Header from "@/app/component/header"
import Footer from "./component1/footer"


export default function Home() {
  return (
    <div>
      <Header/>
      <main className="main">
        <h1>Welcome to My Website</h1>
        <p>This is the main content area. Here, you can include information about your services, projects, or anything else you'd like to share.</p>
      </main>
      <Footer/>
    </div>
  )
   
}
