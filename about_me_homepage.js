// the variables

let introH3 = document.getElementsByClassName('intro')[0];
let employmentH3 = document.getElementsByClassName('employment')[0];
let hobbiesH3 = document.getElementsByClassName('hobbies')[0];

let introP = document.getElementById('intro');
let employmentP = document.getElementById('employment');
let hobbiesP = document.getElementById('hobbies');

// the functions

// ABOUT ME GRID

introP.hidden = true;
employmentP.hidden = true;
hobbiesP.hidden = true;

introH3.onmouseover = function() {
    introP.hidden = false;
};

introH3.onmouseout = function() {
    introP.hidden = true;
};

employmentH3.onmouseover = function() {
    employmentP.hidden = false;
};

employmentH3.onmouseout = function() {
    employmentP.hidden = true;
};

hobbiesH3.onmouseover = function() {
    hobbiesP.hidden = false;
};

hobbiesH3.onmouseout = function() {
    hobbiesP.hidden = true;
};