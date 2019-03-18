console.log("testing testing 1 2 3.")

// function to display the navBar

var toggleNavBar = () => {
    document.getElementById("navBar").classList.toggle('active');
}

// ====================================
// CONTACT PAGE


//close the modal
var closeModal = () =>{
    console.log("work");
    document.getElementById("contactModalContainer").style.display = "none";
}

// validate contact form
var validateContactForm = () => {
    var input = document.forms["contactForm"] ["yourName"].value;
    var input2 = document.forms["contactForm"] ["yourEmail"].value;
    var input3 = document.forms["contactForm"] ["yourMessage"].value;
    if(input == ""){
        alert("You must fill out your name");
        return false;
    }
    else if (input2 == "") {
        alert("You must fill out your email");
        return false;
    }
    else if (input3 == ""){
        alert("You must leave a message");
        return false;
    }
    //display a modal when submit is clicked
    else{
        document.getElementById("contactModalContainer").style.display = "block";
        //this will prevent the modal from coming off the screen
        event.preventDefault();
    }
}
//close the modal
var closeModal = () =>{
    console.log("work");
    document.getElementById("contactModalContainer").style.display = "none";
}

// IMAGE SLIDESHOW BTS((

//create new array of images 
var allBTSPhotos =["../images/BTS1.PNG", "../images/BTS2.PNG", "../images/BTS3.PNG", "../images/BTS4.PNG", "../images/BTS5.PNG", "../images/BTS7.PNG", "../images/BTS8.PNG", "../images/BTS9.PNG", "../images/BTS10.PNG", "../images/BTS11.PNG", "../images/BTS12.PNG", "../images/BTS13.PNG", "../images/BTS14.PNG"];
//images length will always be the last image in the array
var imagesLength = allBTSPhotos.length-1;
// our current photo will be the position that we are at 
var currentPhoto =0;

var changePhoto = (foto) => {
    console.log("buttons work");
    currentPhoto += foto;
    if (currentPhoto > imagesLength) {
        currentPhoto = 0;
    }
    else if (currentPhoto < 0){
        currentPhoto = imagesLength;
    }
    document.getElementById("bts1").src = allBTSPhotos[currentPhoto];


}



// HOME FADEIN
$(".homepagePhoto").hide().fadeIn(3000);
// $(".pagetitle").hide().animation(2000);
$("h2").hide().fadeIn(5000);

// GALLERY
$("article").hide().animation(1000);
$("article").hide().hover();