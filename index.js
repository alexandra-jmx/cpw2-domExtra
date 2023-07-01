const imageArray = [
    "unsplash-cat-1.jpg",
    "unsplash-cat-2.jpg",
    "unsplash-cat-3.jpg",
    "unsplash-cat-4.jpg",
    "unsplash-cat-5.jpg",
    "unsplash-cat-6.jpg",
    "unsplash-cat-7.jpg",
    "unsplash-cat-8.jpg",
    "unsplash-cat-9.jpg",
    "unsplash-cat-10.jpg",
    "unsplash-cat-11.jpg",
    "unsplash-cat-12.jpg",
    "unsplash-cat-13.jpg",
    "unsplash-cat-14.jpg",
    "unsplash-cat-15.jpg",
    "unsplash-cat-16.jpg",
    "unsplash-cat-17.jpg",
];

const imagens = document.querySelector('.images');

function getRandomNr(){
    return Math.floor(Math.random() * imageArray.length);
}

function loadImages(numImages = 17)
{
    let i = 0;
    while (i < numImages){
        const img = document.createElement('img');
        img.src = `./images/${imageArray[getRandomNr()]}`;
        imagens.appendChild(img);
        i++
    }   
      
};

loadImages();

window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
       loadImages();
    }
})