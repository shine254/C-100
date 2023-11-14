var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

var Content = event.results[0][0].transcript;
    console.log(Content);
    if( Content =="take my selfie")
    {
        console.log("taking selphie --- ");
        speak();
    }

    document.getElementById("textbox").innerHTML = Content;
    speak();
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisisUtterance(speak_data);

    speechSynthesis.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document,getSelection("camera");

function take_snapshot()
{
    webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_url+'">';
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.herf = image;
    link.click();
}
