import React from "react";
function Footer(){
 return (
    <div   class="d-flex justify-content-evenly w-75 p-20 ">
        <div className="footer-container" >
            <img width={250} src="https://s3-alpha-sig.figma.com/img/9b6d/4635/87e2bdd08a238545fd0a6f284cb8670b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZPJ19Y2SBZyRtFdbquuZWmIvefmLCNWLB1L5W~J7ZReRq8tOMD9nMhHtPvwhnPjht0gFqs3C7V1ZMhTKuJUSXNyh4FKmqFLRMlT9VT~bhNUgfEy101vP42UJ5YQgZ5s7RqGz0Md2vfXTTv6dTy8upec5D703Cnybxu3yCDegq8BHdA30rlpdsWYrW5JUAsGtU-R1XxoOt2GwE9nebSTxTiG8X-3-7RHXUj6U0pSq8jRzT7J0TVMjO5lMkQy4t7exksJ4Bs94lf-NDgN7kcdDM~mPMl4FOfg51JwmHB4Bej5-WEW1Zq78ZJbDITqYfnkAgEzTJph3YVZFQngozXJsKg__" alt="" />
            <p >
               <span><i style={{color:"white",padding:"10px"}} class="bi bi-instagram p-10"> </i> </span>
               <span><i style={{color:"white",padding:"10px"}} class="bi bi-twitter-x  p-10"></i> </span> 
               <span><i style={{color:"white",padding:"10px"}} class="bi bi-linkedin  p-10"></i></span>
            </p>
        
        
        </div>
        <div className="footer-container">
            <p style={{paddingTop:"80px"}}> <i style={{color:"white",}} class="bi bi-envelope "></i> <span class="text-white">Groomer.online@gmail.com</span></p>
            <p>  <i style={{color:"white"}} class="bi bi-telephone"></i> <span class="text-white">+91 9876543210</span></p>
            <p> <i style={{color:"white"}} class="bi bi-geo-alt"></i> <span class="text-white">Hi-tech city, Hyderabad</span></p>
        </div>
        <div className="footer-container" >
            <p style={{paddingTop:"80px"}} class="text-white">Terms and Conditions</p>
            <p class="text-white">Privacy and Policy</p>
        </div>
    </div>
 )
}
export default Footer;