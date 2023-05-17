$(document).ready(function () {
  $(window).scroll(function () {
    let positionTop = $(document).scrollTop();
    console.log(positionTop);


    if (positionTop > 100) {
      $(".header").addClass("active")
    } else {
      $(".header").removeClass("active")
    }


  })
})




  
// $(document).ready(function () {
//   $(window).scroll(function () {
//     let positionTop = $(document).scrollTop();
//     console.log(positionTop);
//     if ((positionTop > 200) && (positionTop < 51 )) {
//       alert("yes")
//       $(".text h1").addClass("animate__animated animate__bounce")
//     }

//   })
// })
  

