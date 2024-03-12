import React from "react";
function GetInTouch() {
    return (
        <>
        <div className=" Get-Parent-container">
            <div className="getIn-container">

                 <img className="get-image-container" src="https://s3-alpha-sig.figma.com/img/3ede/70f2/e14daa2cac562d02cb10e979f8d5d581?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9m1ES2nVjhT7ynTeei99zMkPsOu~Wsit6AgtOOnVFrRrsAYGWXGfmHu43~1xCe2rkyZwyJxvIVRSo7~S8eJ4Ap1ZtLeiIs-nzL94y7wlir3sRQNDlOVDQx7zihge1WQNCtnbTbIDGtLUBnBUPQPgVlMNr3BDYUQcNFfV798JdfFmwM2eFP9IyZKPcpYca9T1KKfJTJ4MJ0Yb6RwN3uC3N-ATmvfRVQregKGtSUYGFLd-EL27lXIQDJ93MsngtSJblBPpiDWXnKXLrTWaHHiigtguIVoZEIjNEMBjFeKHCocFbHno11yDF7dlbD4C5-~8aZnG7JL8ynQu6oWIe5J8A__" alt="" />  


                 <div className="logo-relative">
                 <span className="arrow-logo"><i class="bi bi-arrow-down text-white"></i></span>
                    <img className="get-in-logo" src="https://s3-alpha-sig.figma.com/img/8f00/1a92/09072674f52df0e553bd9f14d05219e6?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k9c-IUmas0a4V-1Bb7bP-~nrGrR6qgUqw1FfioqLOdRah31rsFYXvgMZW66gZcvfiNyM3UjfGLx7Bt5vhPxTKr5jZ0~YbSZzks1UCpUjk9uX-piN3Odi8KYRfQNAix9oZVb79JaGMLAxrxXrkpzu1yLoqCC9FRRULf~ZVIC9robCDNekdd8CtZIf7lxyGyykoqTn4-lomJqgah-MnS5oIdRAvKk8dq4EA9yIbB3~~icZfufA56J5hE4LBr0jsKgAeDf3Wn38-UWnaPXKxxCzcsuL6Z9CDVkX6LLmp~CJwpqC3yqf7~p3Ur8~GQbd-7Sz9DZ5IJ-XJHvemcfqhHZ8Rg__" alt="" />
                </div> 
            </div>
            <div className="getIn-data-container">
                <h1 class="text-white">Get in touch with us</h1>
                <input className="input" type="text" placeholder="Name" /> <br />
                <input className="input" type="text" placeholder="Mobile.No" /> <br />
                <input className="input" type="text" placeholder="Email" /> <br />
                <div className="button-submit">
                <button type="button" class="btn btn-dark btn-1 btn-lg w-50 border ">Submit</button>
                </div>
            </div>
        </div>
        </>
    )

}
export default GetInTouch;