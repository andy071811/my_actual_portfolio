// the variables
let introH3 = document.getElementsByClassName('intro')[0];
let employmentH3 = document.getElementsByClassName('employment')[0];
let hobbiesH3 = document.getElementsByClassName('hobbies')[0];

let introP = document.getElementsByClassName('intro')[1];
let employmentP = document.getElementsByClassName('employment')[1];
let hobbiesP = document.getElementsByClassName('hobbies')[1];

// the functions

introP.hidden = true;
employmentP.hidden = true;
hobbiesP.hidden = true;

introH3.onclick = function() {
    introP.hidden = false;
}

