const newBtn = document.querySelector('#js-new-quote')
newBtn.addEventListener('click', getQuote);

// API endpoint to get response from 
const endpoint = 'https://icanhazdadjoke.com';

async function getQuote() {
    //console.log('Test');

    try {
        const response = await fetch(endpoint,{
            headers: {
                "Accept": "application/json"
            }
        });
        // if !response.ok is "if the response ISN'T okay (status code 200)"
        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log(json);
        
        displayQuote(json['joke']);
        changeBG();
    }
    catch(err) {
        console.log(err);
        alert('Failed to catch new joke');
    }
}

function displayQuote(question){
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;
}

function changeBG() {
    function getRandomColor(){
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random()* 16)];
        }
        return color;
    }
    let color = getRandomColor();
    newBtn.style.background = color;
}
// for this generator I kept most of the same functions, and I added a joke generator API. With each click the background color of the button changes as a new joke appears in the box. 

getQuote();
