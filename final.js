let day = new Date().getDay(); 
// let reply;

console.log('Day: ' + day); 

if (day == 1 ) { 
    reply = 'Another Monday of watching my website;) What brings you here today?';
} else if (day == 2) { 
    reply = 'Another Tuesday of watching my website;) What brings you here today?';
} else if (day == 3) { 
    reply = 'Another Wednesday of watching my website;) What brings you here today?';
} else if (day == 4) { 
    reply = 'Another Thrusday of watching my website;) What brings you here today?';
} else if (day == 5) { 
    reply = 'Another Friday of watching my website;) What brings you here today?';
} else if (day == 6) { 
    reply = 'Another Saturday of watching my website;) What brings you here today?';
} else { 
    reply = 'Another Sunday of watching my website;) What brings you here today?';
  } 

console.log(reply);
let answer = document.getElementById('answer');
answer.textContent = reply;



let hour = new Date().getHours(); 
console.log(hour); 

if (hour >= 20 || hour < 7) { 
  const background = document.querySelector('body'); 
  background.style.backgroundColor = '#570d0d'; 
  background.style.color = 'white'; 

}


var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("mouseout", mySecondFunction);
  
function myFunction() {
    document.getElementById("demo").innerHTML += "2021 Susan Zhang from Intro to Web Design. All rights reserved.<br>";
}

function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Thank your for your interest in this website:)<br>";
}