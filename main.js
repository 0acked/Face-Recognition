Webcam.set({
height:350,
width:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach( '#camera' );

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kR6l0UPRF/model.json",ModelLoaded);
