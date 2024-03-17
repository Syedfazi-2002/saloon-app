import React from "react"
import Quotations from "./Qutoes";
import Footer from "../Footer";
import GetInTouch from "./GetInTouch";
import ReasonToUseGroomer from "../ReasonToUseGroomer";
import Card from "./Card";
import GroomerCard from "./GroomerCard";
import HomeSaloon from "../HomeSallonService";
import NavBar from "./Navbar";
// import NavBar from "./Nabar";
// import GroomerCard from "./GroomerCard";
// import CardsGenerator from "./CardsGenerate";

function HomePage() {
    return (
        <div>    
            <div>
        <NavBar/>    
        </div>
             {/* <NavBar style={{paddingTop:'100px'}}/> */}
        
            {/* <div> */}


                {/* <nav className="navbar navbar-expand-lg navbar-light d-flex flex-row justify-content-between">
                    <div>
                        <a className="navbar-brand text-white" href="#">
                            <img width={100} src="https://s3-alpha-sig.figma.com/img/9b6d/4635/87e2bdd08a238545fd0a6f284cb8670b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZPJ19Y2SBZyRtFdbquuZWmIvefmLCNWLB1L5W~J7ZReRq8tOMD9nMhHtPvwhnPjht0gFqs3C7V1ZMhTKuJUSXNyh4FKmqFLRMlT9VT~bhNUgfEy101vP42UJ5YQgZ5s7RqGz0Md2vfXTTv6dTy8upec5D703Cnybxu3yCDegq8BHdA30rlpdsWYrW5JUAsGtU-R1XxoOt2GwE9nebSTxTiG8X-3-7RHXUj6U0pSq8jRzT7J0TVMjO5lMkQy4t7exksJ4Bs94lf-NDgN7kcdDM~mPMl4FOfg51JwmHB4Bej5-WEW1Zq78ZJbDITqYfnkAgEzTJph3YVZFQngozXJsKg__" alt="" />
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">

                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    Saloon
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    About us
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="/register">
                                    <button class="btn btn-light bg-transperent">Register</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav> */}




                <div className="image-container ">

                    <h1>Sharp Style Sharper Service</h1>
                    <p>
                        Discover, book, and elevate your grooming experience effortlessly.
                        Your go-to platform for finding and booking trusted salons and
                        barbershops
                    </p>
                    <button>BOOK SALON NOW</button>

                </div>

                <div>
                    <GroomerCard></GroomerCard>
                </div>
                {/* <div><NavBar></NavBar></div> */}

                <div>
                    <Card></Card>
                </div>

                <div>
                    <Quotations></Quotations>
                </div>

                <div>
                    <HomeSaloon></HomeSaloon>
                </div>
                <div>
                    <ReasonToUseGroomer></ReasonToUseGroomer>
                </div>
                <div>
                    <GetInTouch></GetInTouch>
                </div>

                <div>
                    <Footer></Footer>
                </div>

                <div>

                </div>
            {/* </div> */}
        
        </div>

    )
}
export default HomePage;