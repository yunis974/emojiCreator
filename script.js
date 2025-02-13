const canvas = document.getElementById('emojiCanvas');
const ctx = canvas.getContext('2d');

ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas avant de dessiner

// Crée un nouvel élément img
const imgTop = new Image();
const imgMid = new Image();
const imgBot = new Image();



let imgTopSrc = [
    "images/face/face_g176_face.svg",
    "images/face/face_g175_face.svg",
    "images/face/face_g177_face.svg",
    "images/face/face_g178_face.svg",
    "images/face/face_g179_face.svg",
    "images/face/face_g180_face.svg",
    "images/face/face_g181_face.svg",
    "images/face/face_g182_face.svg",
    "images/face/face_g183_face.svg",
    "images/face/face_g184_face.svg",
    "images/face/face_g185_face.svg",
    "images/face/face_g186_face.svg",
    "images/face/face_g187_face.svg",
    "images/face/face_g188_face.svg",
    "images/face/face_g189_face.svg",
    "images/face/face_g190_face.svg",
    "images/face/face_g191_face.svg",
    "images/face/face_g192_face.svg",
    "images/face/face_g193_face.svg",
    "images/face/face_g194_face.svg",
    "images/face/face_g195_face.svg",
    "images/face/face_g196_face.svg",
    "images/face/face_g198_face.svg",
    "images/face/face_g199_face.svg",
    "images/face/face_g200_face.svg",
    "images/face/face_g201_face.svg",
    "images/face/face_g202_face.svg",
    "images/face/face_g203_face.svg",
    "images/face/face_g204_face.svg",
    "images/face/face_g205_face.svg"
];

let imgMidSrc = [
    'images/body/body_g206_body.svg',
    'images/body/body_g209_body.svg',
    'images/body/body_g210_body.svg',
    'images/body/body_g211_body.svg',
    'images/body/body_g212_body.svg',
    'images/body/body_g213_body.svg',
    'images/body/body_g214_body.svg',
    'images/body/body_g215_body.svg',
    'images/body/body_g216_body.svg',
    'images/body/body_g217_body.svg',
    'images/body/body_g218_body.svg',
    'images/body/body_g219_body.svg',
    'images/body/body_g220_body.svg',
    'images/body/body_g221_body.svg',
    'images/body/body_g222_body.svg',
    'images/body/body_g223_body.svg',
    'images/body/body_g224_body.svg',
    'images/body/body_g225_body.svg',
    'images/body/body_g226_body.svg',
    'images/body/body_g227_body.svg',
    'images/body/body_g228_body.svg'
];

let imgBotSrc = [
    'images/mouth/mouth_g257_mouth.svg',
    'images/mouth/mouth_g229_mouth.svg',
    'images/mouth/mouth_g230_mouth.svg',
    'images/mouth/mouth_g231_mouth.svg',
    'images/mouth/mouth_g232_mouth.svg',
    'images/mouth/mouth_g233_mouth.svg',
    'images/mouth/mouth_g234_mouth.svg',
    'images/mouth/mouth_g235_mouth.svg',
    'images/mouth/mouth_g236_mouth.svg',
    'images/mouth/mouth_g237_mouth.svg',
    'images/mouth/mouth_g238_mouth.svg',
    'images/mouth/mouth_g239_mouth.svg',
    'images/mouth/mouth_g240_mouth.svg',
    'images/mouth/mouth_g241_mouth.svg',
    'images/mouth/mouth_g242_mouth.svg',
    'images/mouth/mouth_g243_mouth.svg',
    'images/mouth/mouth_g244_mouth.svg',
    'images/mouth/mouth_g245_mouth.svg',
    'images/mouth/mouth_g246_mouth.svg',
    'images/mouth/mouth_g247_mouth.svg',
    'images/mouth/mouth_g248_mouth.svg',
    'images/mouth/mouth_g249_mouth.svg',
    'images/mouth/mouth_g250_mouth.svg',
    'images/mouth/mouth_g251_mouth.svg',
    'images/mouth/mouth_g253_mouth_g298_mouth.svg',
    'images/mouth/mouth_g254_mouth_g299_mouth.svg',
    'images/mouth/mouth_g255_mouth.svg',
    'images/mouth/mouth_g256_mouth.svg',
    'images/mouth/mouth_g258_mouth.svg',
    'images/mouth/mouth_g259_mouth.svg',
    'images/mouth/mouth_g260_mouth.svg',
    'images/mouth/mouth_g261_mouth.svg',
    'images/mouth/mouth_g262_mouth.svg',
    'images/mouth/mouth_g263_mouth.svg'
];

let imgTopIndex = 0;
let imgMidIndex = 0;
let imgBotIndex = 0;

let imgIndexArray = [imgTopIndex, imgMidIndex, imgBotIndex ];
let imgSrcArray = [imgTopSrc, imgMidSrc, imgBotSrc];
let imgArray = [imgTop, imgMid, imgBot];



let canvasHeight = canvas.height;
let canvasWidth = canvas.width;

imgTop.src = imgTopSrc[0];
imgMid.src = imgMidSrc[0];
imgBot.src = imgBotSrc[0];



function drawImages() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    
    
    ctx.drawImage(imgMid, canvasWidth / 2 - imgMid.width * 4 / 2, canvasHeight / 2 - imgMid.height * 4 / 2, imgMid.width * 4, imgMid.height * 4);
    ctx.drawImage(imgBot, canvasWidth / 2 - imgBot.width * 3 / 2, canvasHeight / 2 + imgBot.height * 3 / 2 - 70 , imgBot.width * 3 , imgBot.height * 3);
    ctx.drawImage(imgTop, canvasWidth / 2 - imgTop.width * 3 / 2, canvasHeight / 2 - imgTop.height * 3 / 2 - 25, imgTop.width * 3, imgTop.height * 3 );
}

// Initial draw after images load
imgTop.onload = drawImages;
imgMid.onload = drawImages;
imgBot.onload = drawImages;




function incArray(imgNumb){
    imgIndexArray[imgNumb] ++;
    console.log(imgIndexArray[imgNumb])
    if(imgIndexArray[imgNumb] > imgSrcArray[imgNumb].length - 1){
        imgIndexArray[imgNumb] = 0;
    };

    imgArray[imgNumb].src = imgSrcArray[imgNumb][imgIndexArray[imgNumb]]; 

    imgArray[imgNumb].onload = drawImages;  // Redraw all images when one changes


}



function decArray(imgNumb){
    imgIndexArray[imgNumb] --;
    console.log(imgIndexArray[imgNumb])
    if(imgIndexArray[imgNumb] < 0){
        imgIndexArray[imgNumb] = imgSrcArray[imgNumb].length - 1;
    };

    imgArray[imgNumb].src = imgSrcArray[imgNumb][imgIndexArray[imgNumb]]; 

    imgArray[imgNumb].onload = drawImages;  // Redraw all images when one changes

}

function resetCanvas(){
    window.location.reload();

}


