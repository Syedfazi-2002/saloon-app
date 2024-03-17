import React from "react";
function GroomerCard() {
  return (
    <div>
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row d-flex">
        <div class="card card_1 col-12 col-md-4 col-lg-3 col-xl-2">
          <h1>What Is Groomer?</h1>
          <img
            src="https://s3-alpha-sig.figma.com/img/3ede/70f2/e14daa2cac562d02cb10e979f8d5d581?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9m1ES2nVjhT7ynTeei99zMkPsOu~Wsit6AgtOOnVFrRrsAYGWXGfmHu43~1xCe2rkyZwyJxvIVRSo7~S8eJ4Ap1ZtLeiIs-nzL94y7wlir3sRQNDlOVDQx7zihge1WQNCtnbTbIDGtLUBnBUPQPgVlMNr3BDYUQcNFfV798JdfFmwM2eFP9IyZKPcpYca9T1KKfJTJ4MJ0Yb6RwN3uC3N-ATmvfRVQregKGtSUYGFLd-EL27lXIQDJ93MsngtSJblBPpiDWXnKXLrTWaHHiigtguIVoZEIjNEMBjFeKHCocFbHno11yDF7dlbD4C5-~8aZnG7JL8ynQu6oWIe5J8A__"
            class="card-img1"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text mt-5">
              Crafting tailored styles with precision, passion, and unparalleled
              expertise daily.
            </p>
          </div>
        </div>
        <div class="card card_2 col-12 col-md-4 col-lg-6 col-xl-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/7cc3/48b4/af0f5f343c399dfaa9268241d8dbefb3?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3MDJyYtlN6pvhfIWbMahPTszZ9ENDWOpNEHygdzczpnlzMd4QBkJklaqway8Bkgy~Y1CR997LbbaWQVLO~-iGsKt7U4CTgcjtiG0MkPApn2tbCsHO8OEqGPEsEIgrFeDRcE8UwOHeahuqIWdRHAm8dIXPE-ULLQukWd7WMkYG8-N4gT5SnLcUdLKy7wXg4xYE0wNapWdhkTsR6Fctz3c-NNNcjpuTGGQKhEgkWHaGMjEBmcPCF~00tx-nhDvleoPW3MjLSIwwdyxOOnzXHlkPHu8-I7SLkwMTpiGxrP7BSrm1Xy5LvbhCYBQJQ0LTrR7mOzqHt5k7T8hDKHJ40niQ__"
            class="card-img2"
            alt="..."
          />
        </div>
        <div class="card card_3 col-12 col-md-4 col-lg-3 col-xl-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/5fe5/b118/7099e084442ad3989407b379f498c6a5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C-uIdIgomqs4RQKRSkbRlTHjb0hE1eySRZ-BI4jy8Vqs73gsFCdIl2WNBl93v2EJ-D1qWHbTo2hNCCcBAJVra6K1G5Mb0h51jmL3QCjUFVQU3LjokPaVblKxmxhU~UzGI6LiLny2Li~H5x~cKyTqfMdtFo8ZSrOCcvuapUPHSZ3omCJ4zCJrd5eWuT59mmWYbQ5s4VmzxymoPsp3R9IXzveVQRhCwREqejFhT7LLZKgVZK~fK65vtIPz83OIX8KL4AxTX2JEEIuWEZ-lYT2dgBonCbpAhlOD~2kCf0GWv2VeYo0E5PVgz28m43B9BuAa9gUYyWA5qhcYFWQMDifK6g__"
            class="card-img3"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text mt-5">
              Complete your grooming routine with our platform connecting you to
              top-notch salons and barbershops.
            </p>
          </div>
        </div>
      </div>


    </div>
    <center><button  className="btn-about-us">About us</button></center>
    </div>
  )
}
export default GroomerCard;