import React from "react"
import Info from "./components/info.js"
import About from "./components/about.js"
import Interests from "./components/interest.js"
import Footer from "./components/footer.js"

export default function Card() {
    return (
        <div className="container">
            <header>
                <Info />
            </header>
            <main>
                <About />
                <Interests />
               
            </main>
             <Footer />
        </div>
    )
}