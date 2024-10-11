let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); 
}
<img src="anniver.jpg"  id="imgId" alt="" width="100vw" height="100vh">

<script>
    var slide1=['anniver.jpg','dhoti.jpg','event1.jpg'];
    var imageindex=0
    var imgId=document.getElementById("imgId")
    function nextslide() {
        imageindex++
        if(imageindex>=slide1.length){
            imageindex=0
        }
        imgId.src=slide1[imageindex]
        
    }
    setInterval(nextslide,2000);
</script>