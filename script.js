const startButton = document.getElementById("startButton");
const backgroundMusic = document.getElementById("backgroundMusic");

const opening = document.getElementById("opening");
const cerita = document.getElementById("cerita");

startButton.addEventListener("click", function () {

    backgroundMusic.play();

    opening.style.display = "none";
    cerita.style.display = "flex";

});

const envelope = document.getElementById("envelope");
const envelopeHint = document.getElementById("envelopeHint");
const openLetterButton = document.getElementById("openLetterButton");

envelope.addEventListener("click", function () {

    envelope.classList.add("open");

    envelopeHint.textContent = "Amplopnya sudah terbuka ❤️";

    setTimeout(function () {
        openLetterButton.style.display = "inline-block";
    }, 900);

});

const toSuratButton = document.getElementById("toSuratButton");
const surat = document.getElementById("surat");

toSuratButton.addEventListener("click", function () {

    cerita.style.display = "none";
    surat.style.display = "flex";

});

const isiSurat = document.getElementById("isiSurat");

openLetterButton.addEventListener("click", function () {

    // Hilangkan halaman amplop
    surat.style.display = "none";

    // Tampilkan halaman surat
    isiSurat.style.display = "flex";

    // Jalankan animasi kertas
    setTimeout(function () {
        isiSurat.classList.add("show");
    }, 100);

});

// =========================
// GALERI KITA
// =========================

const galeri = document.getElementById("galeri");
const galleryButton = document.getElementById("galleryButton");

const galleryPhoto = document.getElementById("galleryPhoto");
const photoCaption = document.getElementById("photoCaption");
const photoContainer = document.getElementById("photoContainer");

const nextPhotoButton = document.getElementById("nextPhotoButton");
const galleryEnding = document.getElementById("galleryEnding");


// DATA FOTO

const photos = [

    {
        image: "images/foto1.jpg",
        caption: "Awal dari cerita kita."
    },

    {
        image: "images/foto2.jpg",
        caption: "Inget gak pernah nulis sepanjang ini?"
    },

    {
        image: "images/foto3.jpg",
        caption: "Jawabanku hehe."
    },

    {
        image: "images/foto4.jpg",
        caption: "Manggil ayang buat pertama kalinya."
    },

    {
        image: "images/foto5.jpg",
        caption: "Manusia aesthetic."
    },

    {
        image: "images/foto6.jpg",
        caption: "Temenin kamu bikin skck buat kerja."
    },

    {
        image: "images/foto7.jpg",
        caption: "Kamu waktu bocilll."
    },

    {
        image: "images/foto8.jpg",
        caption: "Pertama kalinya kita ke blok m."
    },

    {
        image: "images/foto9.jpg",
        caption: "Salah satu foto favoritku."
    },

    {
        image: "images/foto10.jpg",
        caption: "Sandaran ternyaman."
    },

    {
        image: "images/foto11.jpg",
        caption: "Genggaman yang gak ingin aku lepas selamanya."
    },

    {
        image: "images/foto12.jpg",
        caption: "Kamu pas belajar motorr, beli motorr donkkkkkk."
    },

    {
        image: "images/foto13.jpg",
        caption: "Maennya gak jauh jauh ketaman."
    },

    {
        image: "images/foto14.jpg",
        caption: "Taman lagiiii..."
    },

    {
        image: "images/foto15.jpg",
        caption: "Aku suka banget momen ini, karena sesimpel muter muter dan jajan, gak mikirin outfit, ayo dong gini lagi dengan outfit gembel kita."
    },

    {
        image: "images/foto16.jpg",
        caption: "Foto favoritkuuu, ngeliat fotonya aja bikin makin sayang sama orangnya."
    },

    {
        image: "images/foto17.jpg",
        caption: "Ngapain kita ya?"
    },

    {
        image: "images/foto18.jpg",
        caption: "Kita, dengan segala cerita kita."
    },

    {
        image: "images/foto19.jpg",
        caption: "2 Makhluk yang bikin aku selalu ingin bertahan didunia ini."
    },

    {
        image: "images/foto20.jpg",
        caption: "POTONG PENDEK LAGI DONGGGGGGGGGGGGGG!!!!"
    },

    {
        image: "images/foto21.jpg",
        caption: "Salah satu foto favoritku."
    },

    {
        image: "images/foto22.jpg",
        caption: "Nemenin aku service motor hehe."
    },

    {
        image: "images/foto23.jpg",
        caption: "Kondangan mulu, kapan ya kita bikin kondangan itu."
    },

    {
        image: "images/foto24.jpg",
        caption: "Kita naik bianglala pasar malem."
    },

       {
        image: "images/foto25.jpg",
        caption: "Kamu selalu lucu saat coba cobain sesuatu."
    },

    {
        image: "images/foto26.jpg",
        caption: "PLISSS PENDEKIN RAMBUTNYAAA AARRGGHHH GEMES BANGET."
    },

    {
        image: "images/foto27.jpg",
        caption: "Selalu cantik deh, gak cape apa kak?."
    },

    {
        image: "images/foto28.jpg",
        caption: "Princesskuuuuuu."
    }
];

let currentPhoto = 0;


// MASUK KE GALERI

galleryButton.addEventListener("click", function () {

    isiSurat.style.display = "none";

    galeri.style.display = "flex";

    showPhoto();

});


// MENAMPILKAN FOTO

function showPhoto() {

    const photo = photos[currentPhoto];

    photoContainer.classList.remove("show");

    setTimeout(function () {

        galleryPhoto.src = photo.image;
        photoCaption.textContent = photo.caption;

        photoContainer.classList.add("show");

    }, 200);

}


// FOTO BERIKUTNYA

nextPhotoButton.addEventListener("click", function () {

    currentPhoto++;

    if (currentPhoto < photos.length) {

        showPhoto();

    } else {

        photoContainer.style.display = "none";
        nextPhotoButton.style.display = "none";

        galleryEnding.style.display = "block";

    }

});

// =========================
// ROULETTE HADIAH
// =========================

const roulette = document.getElementById("roulette");
const surpriseButton = document.getElementById("surpriseButton");

const wheelCanvas = document.getElementById("wheelCanvas");
const wheelCtx = wheelCanvas.getContext("2d");

const spinButton = document.getElementById("spinButton");
const spinMessage = document.getElementById("spinMessage");

const prizePopup = document.getElementById("prizePopup");
const prizeName = document.getElementById("prizeName");
const closePrizeButton = document.getElementById("closePrizeButton");


// HADIAH

const prizes = [
    "Ambil didompetku",
    "1jt",
    "Voucher chikuro 10x",
    "Voucher make up 500k",
    "Voucher sushi tei 2x",
    "Voucher outfit 500k",
    "Ambil didompetku",
    "Request sendiri"
];


// WARNA SEKTOR

const wheelColors = [
    "#F7C6D0",
    "#F9DDE2",
    "#EFA9B5",
    "#FBE9EC",
    "#E8A0AE",
    "#F5D1D8",
    "#D98C9A",
    "#F8E1E5"
];


const centerX = 175;
const centerY = 175;
const radius = 165;

const sectorAngle = (Math.PI * 2) / prizes.length;

let currentRotation = 0;
let spinning = false;


// GAMBAR RODA

function drawWheel() {

    wheelCtx.clearRect(
        0,
        0,
        wheelCanvas.width,
        wheelCanvas.height
    );

    for (let i = 0; i < prizes.length; i++) {

        const startAngle =
            currentRotation +
            i * sectorAngle;

        const endAngle =
            startAngle +
            sectorAngle;


        // Sektor

        wheelCtx.beginPath();

        wheelCtx.moveTo(centerX, centerY);

        wheelCtx.arc(
            centerX,
            centerY,
            radius,
            startAngle,
            endAngle
        );

        wheelCtx.closePath();

        wheelCtx.fillStyle = wheelColors[i];

        wheelCtx.fill();


        // Garis sektor

        wheelCtx.strokeStyle = "#ffffff";
        wheelCtx.lineWidth = 3;

        wheelCtx.stroke();


        // Tulisan

        wheelCtx.save();

        wheelCtx.translate(centerX, centerY);

        wheelCtx.rotate(
            startAngle + sectorAngle / 2
        );

        wheelCtx.textAlign = "right";
        wheelCtx.fillStyle = "#6b444b";
        wheelCtx.font = "bold 14px Georgia";

        wheelCtx.fillText(
            prizes[i],
            radius - 12,
            5
        );

        wheelCtx.restore();

    }


    // Lingkaran tengah

    wheelCtx.beginPath();

    wheelCtx.arc(
        centerX,
        centerY,
        35,
        0,
        Math.PI * 2
    );

    wheelCtx.fillStyle = "#ffffff";

    wheelCtx.fill();

    wheelCtx.strokeStyle = "#D98C9A";
    wheelCtx.lineWidth = 4;

    wheelCtx.stroke();


    wheelCtx.font = "22px Arial";
    wheelCtx.textAlign = "center";
    wheelCtx.textBaseline = "middle";

    wheelCtx.fillText(
        "❤️",
        centerX,
        centerY
    );

}

drawWheel();


// MASUK KE ROULETTE

surpriseButton.addEventListener("click", function () {

    galeri.style.display = "none";

    roulette.style.display = "flex";

    drawWheel();

});


// PUTAR RODA

spinButton.addEventListener("click", function () {

    if (spinning) return;

    spinning = true;

    spinButton.disabled = true;

    spinMessage.textContent =
        "Rodanya sedang berputar... 🎡";


    // PILIH HADIAH

    const selectedIndex =
        Math.floor(Math.random() * prizes.length);


    /*
        Kita hitung sudut supaya sektor
        yang dipilih berhenti tepat di
        bawah pointer.
    */

    const targetAngle =
        -Math.PI / 2 -
        (selectedIndex * sectorAngle) -
        (sectorAngle / 2);


    const extraSpins =
        6 + Math.floor(Math.random() * 3);


    const finalRotation =
        targetAngle +
        extraSpins * Math.PI * 2;


    const startRotation = currentRotation;

    const totalRotation =
        finalRotation - startRotation;


    const duration = 5000;

    const startTime = performance.now();


    function animateWheel(currentTime) {

        const elapsed =
            currentTime - startTime;

        let progress =
            Math.min(elapsed / duration, 1);


        // Ease out:
        // awal cepat → akhir pelan

        const eased =
            1 - Math.pow(1 - progress, 4);


        currentRotation =
            startRotation +
            totalRotation * eased;


        drawWheel();


        if (progress < 1) {

            requestAnimationFrame(
                animateWheel
            );

        } else {

            currentRotation =
                finalRotation;

            drawWheel();

            spinning = false;

            spinButton.disabled = false;

            spinMessage.textContent =
                "✨ Kamu mendapatkan hadiah! ✨";


            showPrize(
                prizes[selectedIndex]
            );

        }

    }


    requestAnimationFrame(
        animateWheel
    );

});


// POPUP HADIAH

function showPrize(prize) {

    prizeName.textContent = prize;

    prizePopup.classList.add("show");

    createHearts();

}


// TUTUP POPUP

closePrizeButton.addEventListener(
    "click",
    function () {

        prizePopup.classList.remove("show");

    }
);


// HATI BERTERBANGAN

function createHearts() {

    for (let i = 0; i < 15; i++) {

        const heart =
            document.createElement("div");

        heart.textContent = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom = "0";

        heart.style.fontSize =
            15 + Math.random() * 20 + "px";

        heart.style.zIndex = "200";

        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 2s ease, opacity 2s ease";

        document.body.appendChild(heart);


        setTimeout(function () {

            heart.style.transform =
                `translateY(-${300 + Math.random() * 400}px) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 50);


        setTimeout(function () {

            heart.remove();

        }, 2100);

    }

}

