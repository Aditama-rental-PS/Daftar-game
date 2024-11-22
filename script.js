let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Ubah gambar setiap 3 detik
}

function zoomImage(event) {
  let zoomModal = document.getElementById("zoomModal");
  let zoomedImage = document.getElementById("zoomedImage");
  let zoomCaption = document.getElementById("zoomCaption");
  
  zoomModal.style.display = "flex";
  zoomedImage.src = event.target.src;
  
  // Menampilkan penjelasan gambar yang sesuai dengan gambar yang di-zoom
  let caption = event.target.nextElementSibling.textContent;
  zoomCaption.textContent = caption;
}

function closeZoom() {
  let zoomModal = document.getElementById("zoomModal");
  zoomModal.style.display = "none";
}

document.querySelectorAll('.slide-image').forEach(image => {
  image.addEventListener('click', zoomImage);
});

document.getElementById("closeZoom").addEventListener("click", closeZoom);

showSlides();
