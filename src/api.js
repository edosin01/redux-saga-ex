export function fetchNumber() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 30));
        }, 3000)
        // clearTimeout(timeOut);
    });
}

export function fetchUser() {
    const users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => users);
    if(users)
        return users;
}