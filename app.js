const mainImage = document.querySelector('.card img');
const thumbnails = Array.from(document.querySelectorAll('.thumbnails img'));

thumbnails.forEach((thumbnail) => {
  if(thumbnail.src === mainImage.src){
    thumbnail.classList.add('active');
  }
  thumbnail.addEventListener('click' , () => {
    setTimeout(()=>{
      mainImage.classList.remove('animate');
    },500);
    mainImage.src = thumbnail.src;
    thumbnail.classList.add('active');
    mainImage.classList.add('animate');
    const filteredImages = thumbnails.filter((image) => image.src !== mainImage.src);
    filteredImages.forEach((image) => {
      image.classList.remove('active');
    })
  })
})
