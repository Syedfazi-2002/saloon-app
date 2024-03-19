import React from "react";
function NewCard(){
    function image1(){
        alert("h1")
    }
    return (
        <div>
            
            
            <section className="gallery">
                <div className="card-container-lg">
                        <div class="row row-cols-sm-2 row-cols-md-3">
                            <div class="col">
                                 <div className="gallery-image-container">
                                   <img onClick={()=>{image1()}} width={300} className="gallery-item" src="https://s3-alpha-sig.figma.com/img/15da/db12/118d30f5d46ee8ce07e5fa265c120d05?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HsuJHiFqFdEVaFabn71QDhOoLxV84MEfoZxkUeE-6O0Z1JqjSt9nrY9ScPCFk2YvQfAhwV5k8Y47iGYN7VxPJSCgEsj-VA0SuHQ59mtx-XRiyjY0IT6uDPp7rghMDHK5owJ0i-Zc~cezdQMOiTI8bWwhtMs7QUn1nYJJNeIamKHiLgyOh2S7L6PGppFj4SWkigaHWM42OqTfyFeu1uo0~GKzcOWMWP-EK6dy5HLLL2AJF3fEwiuOKODTQ-wREEDEDqMaDKtigOm-Cizd6medoh-4pMEMP-AYyXm6ybq2tSSrjg-pN9oI3RnuyxlY0tTcW-Xo-UA4IogPSHWSn8nIuQ__" alt="" />
                                   <div class="card-body">
                                        <h5 style={{ color: "white" }} class="card-title">Bubbles</h5>
                                        <p style={{ color: "white" }} class="card-text">spa | manis & pedis | facials</p>
                                        <p style={{ color: "white" }}>₹ 240 / person  <span><i style={{ color: "white" }} class="bi bi-arrow-right-circle"></i></span></p>
                                    </div>
                                 </div>
                                 {/* second */}
                                 <div className="gallery-image-container">
                                   <img width={300} className="gallery-item" src="https://s3-alpha-sig.figma.com/img/15da/db12/118d30f5d46ee8ce07e5fa265c120d05?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HsuJHiFqFdEVaFabn71QDhOoLxV84MEfoZxkUeE-6O0Z1JqjSt9nrY9ScPCFk2YvQfAhwV5k8Y47iGYN7VxPJSCgEsj-VA0SuHQ59mtx-XRiyjY0IT6uDPp7rghMDHK5owJ0i-Zc~cezdQMOiTI8bWwhtMs7QUn1nYJJNeIamKHiLgyOh2S7L6PGppFj4SWkigaHWM42OqTfyFeu1uo0~GKzcOWMWP-EK6dy5HLLL2AJF3fEwiuOKODTQ-wREEDEDqMaDKtigOm-Cizd6medoh-4pMEMP-AYyXm6ybq2tSSrjg-pN9oI3RnuyxlY0tTcW-Xo-UA4IogPSHWSn8nIuQ__" alt="" />
                                   <div class="card-body">
                                        <h5 style={{ color: "white" }} class="card-title">Bubbles</h5>
                                        <p style={{ color: "white" }} class="card-text">spa | manis & pedis | facials</p>
                                        <p style={{ color: "white" }}>₹ 240 / person  <span><i style={{ color: "white" }} class="bi bi-arrow-right-circle"></i></span></p>
                                    </div>
                                 </div>
                                 {/* third */}
                                 <div className="gallery-image-container">
                                   <img width={300} className="gallery-item" src="https://s3-alpha-sig.figma.com/img/15da/db12/118d30f5d46ee8ce07e5fa265c120d05?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HsuJHiFqFdEVaFabn71QDhOoLxV84MEfoZxkUeE-6O0Z1JqjSt9nrY9ScPCFk2YvQfAhwV5k8Y47iGYN7VxPJSCgEsj-VA0SuHQ59mtx-XRiyjY0IT6uDPp7rghMDHK5owJ0i-Zc~cezdQMOiTI8bWwhtMs7QUn1nYJJNeIamKHiLgyOh2S7L6PGppFj4SWkigaHWM42OqTfyFeu1uo0~GKzcOWMWP-EK6dy5HLLL2AJF3fEwiuOKODTQ-wREEDEDqMaDKtigOm-Cizd6medoh-4pMEMP-AYyXm6ybq2tSSrjg-pN9oI3RnuyxlY0tTcW-Xo-UA4IogPSHWSn8nIuQ__" alt="" />
                                   <div class="card-body">
                                        <h5 style={{ color: "white" }} class="card-title">Bubbles</h5>
                                        <p style={{ color: "white" }} class="card-text">spa | manis & pedis | facials</p>
                                        <p style={{ color: "white" }}>₹ 240 / person  <span><i style={{ color: "white" }} class="bi bi-arrow-right-circle"></i></span></p>
                                    </div>
                                 </div>
                                 {/* fourth */}
                                 <div className="gallery-image-container">
                                   <img width={300} className="gallery-item" src="https://s3-alpha-sig.figma.com/img/15da/db12/118d30f5d46ee8ce07e5fa265c120d05?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HsuJHiFqFdEVaFabn71QDhOoLxV84MEfoZxkUeE-6O0Z1JqjSt9nrY9ScPCFk2YvQfAhwV5k8Y47iGYN7VxPJSCgEsj-VA0SuHQ59mtx-XRiyjY0IT6uDPp7rghMDHK5owJ0i-Zc~cezdQMOiTI8bWwhtMs7QUn1nYJJNeIamKHiLgyOh2S7L6PGppFj4SWkigaHWM42OqTfyFeu1uo0~GKzcOWMWP-EK6dy5HLLL2AJF3fEwiuOKODTQ-wREEDEDqMaDKtigOm-Cizd6medoh-4pMEMP-AYyXm6ybq2tSSrjg-pN9oI3RnuyxlY0tTcW-Xo-UA4IogPSHWSn8nIuQ__" alt="" />
                                   <div class="card-body">
                                        <h5 style={{ color: "white" }} class="card-title">Bubbles</h5>
                                        <p style={{ color: "white" }} class="card-text">spa | manis & pedis | facials</p>
                                        <p style={{ color: "white" }}>₹ 240 / person  <span><i style={{ color: "white" }} class="bi bi-arrow-right-circle"></i></span></p>
                                    </div>
                                 </div>
                    
                            </div>
                            <div class="col">
                                 <img className="gallery-item" src="" alt="" />
                            </div>
                            <div class="col">
                                 <img className="gallery-item" src="" alt="" />
                            </div>
                            <div class="col">
                                 <img className="gallery-item" src="" alt="" />
                            </div>
                        </div>
                </div>
            </section>
        </div>
    )
}
export default NewCard;