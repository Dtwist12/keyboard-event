
var words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



var SecretLetterPressed ='';
const body= document.querySelector('body');
//  const appendkey =document.createElement('h3');


let randomLetter = words[Math.floor(Math.random()* 26)];
console.log(randomLetter);


for(let i=0; i <randomLetter.length; i++) 

    document.body.addEventListener('keyup', function(event) {
        if(randomLetter=== event.key) {
            const appendkey =document.createElement('h3')
            appendkey.textContent ='SECRET KEY PRESSED';
            body.appendChild(appendkey);
            randomLetter = words[Math.floor(Math.random()* 26)];
             console.log(randomLetter);
             

};

    });
    