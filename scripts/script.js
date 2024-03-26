let question = [...document.querySelectorAll(".question")];
let answer = [...document.querySelectorAll(".answer")];
let show_btn = [...document.querySelectorAll(".show")];
let isFAQopened = true; //Checking if FAQ is opened
for (let i = 0; i < question.length; i++) {
    show_btn[i].addEventListener("click", () => {
        for (let j = 0; j < question.length; j++) {
            $(answer[j]).slideUp('fast');
            show_btn[j].firstChild.src = "../assets/images/icon-plus.svg";
            isFAQopened = true;
        }
        if (isFAQopened) {
            show_btn[i].firstChild.src = "../assets/images/icon-minus.svg";
            isFAQopened = false;
            $(answer[i]).slideDown('fast');
        }
    });
}
