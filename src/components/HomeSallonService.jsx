import React from "react";
function HomeSaloon() {

    return (
        <div>
            <center>
                <div className="space-container">

                </div>
            </center>
            <div className="HomeSaloon-container">
                <div>
                    <img className="HomeSaloon-Image-container" src="https://s3-alpha-sig.figma.com/img/ae7e/45e3/0c4f5123a1084fad4ae129cca35770a5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bUkRcz0Kp~WFaJ-nSWqWbxRDqRugbIGWbENERLCjYDyO2onc1cpPvp5Y9I7GU-UZiwPz8ajcyHeA5T-sHu0gocDpAQaK2gkGifBaKKZOtF9f52d6L8SToOQ8lLEKPcXCSGRtK9dHsBkCTXURfTSOL9VFCdVScHrc49o32alogsiwExxO1fXjS5iccFZdWKfefPISL8WpCXdhUhgwvyyabSMepEJcr8MfsT4cHBlU1tBGZhyaIHmKjgFwEI3roJrruqjMRLFH93eY4lhRxmpYJ4UjRYN-3A9yxB4B8NbSiKnx5X05x8XLYmVcKhXRTf7w7czXP5xfm0uuzVoccicUqQ__" alt="" />

                </div>
                <div style={{ border: "1px solid gold", width: "500px" }}>
                    <h1 style={{ color: "white" }}>Home salon services</h1>
                    <p style={{ color: "white" }}> Indulge in luxury and convenience with our home salon service. Our expert stylists bring personalized grooming to your doorstep, providing top-notch haircuts and styling in the comfort of your own home.
                    </p>
                    <p style={{ color: "white" }}>
                        Elevate your self-care routine and book your appointment today for a pampering experience without leaving home!
                    </p>
                    <button class="btn btn-home-saloon">Book Now</button>
                </div>
            </div>
        </div>
    )

}
export default HomeSaloon;