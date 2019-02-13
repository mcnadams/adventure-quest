const accept = document.getElementById('accept');
const start = document.getElementById('start');
const name = document.getElementById('name');
const form = document.getElementById('user');

accept.addEventListener('click', function() {
    start.hidden = false;
    accept.hidden = true;
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    let house = formData.get('house');
    if(house === 'other') {
        house = document.getElementById('your-house').value;
    }

    const title = name.value + ' of house ' + house;
    
    const user = {
        name: title,
        dragons: 0,
        army: 6000,
        alive: true
    };
    const completed = {
        kingsLanding: false,
        beyond: false,
        dothrak: false
    };
    const userJson = JSON.stringify(user);
    const completedJson = JSON.stringify(completed);
    window.localStorage.setItem('user', userJson);
    window.localStorage.setItem('completed', completedJson);
    window.location = 'map.html';
});
