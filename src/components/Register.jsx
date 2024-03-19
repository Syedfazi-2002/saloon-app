import React from "react";
import { Link } from "react-router-dom";
function RegisterFormPage() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light d-flex flex-row justify-content-between">
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

                            <Link to="/saloon" class="nav-link" href="/saloon">
                                Saloon
                            </Link>

                        </li>
                        <li class="nav-item">
                        <Link to="/About" class="nav-link" href="/About us">
                                    About us
                             </Link>
                        </li>
                        <li class="nav-item">

                            <Link to="/Register" class="nav-link " href="/Register">
                                <button class="btn btn-light bg-transperent">Register</button>
                            </Link>

                        </li>
                    </ul>
                </div>
            </nav>

            <div className="register-Form-Container">

                <div>
                    <img className="Register-image" src="https://s3-alpha-sig.figma.com/img/5fe5/b118/7099e084442ad3989407b379f498c6a5?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=peT2OOk7F~Iz32~iCegHbPnJ1Iv2CgW8AQvtkX7WET2GK3xaWncRFhvDKbTmQNw4x0JVRemInHW4DRHylFb7wfrhE4INYJMULrKSJ3oSLrFIcLKgJErE7~xCAD42MYc4Snj1A4KRy0ekis4sT215P3RPEARZvqUS0OH9~-Z9EWKrKz1HsAW7fzh709FhFYXiFeUFKDyh0st9aK66A2rlV-FyNB2pLPBjl9iqyK0pkA7ugiDTMpp0Qa9JgqTp0cyncsfxjnbj7txs7PJ66i5Ih2N01tbRmoBLUvcH6gp4PcBp5zuTmEKnW6OSK6Cn4Z9Pky6sf~4AgRY~8O0TemRWQw__" alt="" />

                </div>

                <div className="Register-data-container">

                    <div>
                        <h1 style={{ color: "white", fontSize: "80px" }}>Register </h1>
                        <p style={{color:"white"}}>Already have an account?  <Link to="/Login"><span style={{ color: "gold" }}>Login</span></Link></p>
                    </div>

                    <div>
                        <input className="input-register-form" placeholder="Fullname" type="text" /><br />
                        <input className="input-register-form" placeholder="Email" type="text" /><br />
                        <input className="input-register-form" placeholder="Mobile.no" type="text" /><br />
                        <div className="checkbox-container">
                            <input type="checkbox" style={{ border: "1px solid gold" }} /> <span>I accept the terms and conditions, including the privacy</span> <br />
                        </div>
                        <button className="btn-register"> Register</button>


                    </div>

                </div>

            </div>

        </div>
    )
}
export default RegisterFormPage;