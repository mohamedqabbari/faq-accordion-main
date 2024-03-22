let question = [...document.querySelectorAll(".question")];
let answer = [...document.querySelectorAll(".answer")];
let show_btn = [...document.querySelectorAll(".show")];
let isFQAopened = true; //Checking if FAQ is opened
for (let i = 0; i < question.length; i++) {
    show_btn[i].addEventListener("click", () => {
        $(answer[i]).slideToggle('fast');
        if (isFQAopened) {
            show_btn[i].firstChild.src = "../assets/images/icon-minus.svg";
            isFQAopened = false; //If FQA was opened, image was changed and value of isFAQopened is changed to false
        } else {
            show_btn[i].firstChild.src = "../assets/images/icon-plus.svg";
            isFQAopened = true; //If FAQ was already opened, isFAQopened has a false value, so skip true statement and change image to initial state
        }
    });
    
}
