const canvas = document.getElementById('emojiCanvas');
const ctx = canvas.getContext('2d');

// Crée un nouvel élément img
const imgTop = new Image();
const imgMid = new Image();
const imgBot = new Image();

let imgTopSrc = ['images/Te1.svg', 'images/T2.svg', 'images/T3.svg'];
let imgMidSrc = ['images/Te1.svg', 'images/T2.svg', 'images/T3.svg'];
let imgBotSrc = ['images/Te1.svg', 'images/T2.svg', 'images/T3.svg'];

let imgTopIndex = 0;
let imgMidIndex = 0;
let imgBotIndex = 0;

let imgIndexArray = [imgTopIndex, imgMidIndex, imgBotIndex ];
let imgSrcArray = [imgTopSrc, imgMidSrc, imgBotSrc];
let imgArray = [imgTop, imgMid, imgBot];


let canvasHeight = canvas.height;
let canvasWidth = canvas.width;



// Lorsque l'image est chargée, la dessiner sur le canvas
/*imgTop.onload = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas avant de dessiner
    ctx.drawImage(imgTop, canvasWidth/2 - 50 , canvasHeight/2 - 50 , 100, 100); // Dessiner l'image sur le canvas
};*/


function incArray(imgNumb){
    console.log(imgSrcArray[imgNumb].length);
    imgIndexArray[imgNumb] ++;
    console.log(imgIndexArray[imgNumb])
    if(imgIndexArray[imgNumb] > imgSrcArray[imgNumb].length - 1){
        imgIndexArray[imgNumb] = 0;
    };

    imgArray[imgNumb].src = imgSrcArray[imgNumb][imgIndexArray[imgNumb]]; 

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgArray[imgNumb], canvasWidth/2 - 50 , canvasHeight/2 + 50 , 100, 100);

}