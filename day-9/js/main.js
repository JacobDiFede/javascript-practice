
function api(endpoint = '', data) {
    return fetch('https://93871b15454e.ngrok.io/' + endpoint, {
        method: data ? "POST" : "GET",
        body: data,
        headers:{'content-type': 'application/json'},
    })
    .then(function(response) {
        return response.json();
})
}

const getUsersButton = document.querySelector('#getUsers');
const sendUserNameInput = document.querySelector('#sendUserNameInput');
const sendUserButton = document.querySelector('#sendUserButton');


sendUserButton.innerText = 'Send User';


getUsersButton.addEventListener( 'click', () => {
    api('users')
    .then ( data => data.users)
    .then (users => console.log(users))
});

sendUserButton.addEventListener('click', () => {
    const username = sendUserNameInput.value;
    console.log(username);

    if (!username) {
        return;
    }



    console.log('This wont happen unless there is a username', username);
    

    api('users', JSON.stringify({user: {username, gender: 'Male', age: 53, quote: 'You underestimate my power'}}) ).then( data => console.log('post', data));
});

