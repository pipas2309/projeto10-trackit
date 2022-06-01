export default function local(newLocal, newUser) {
    if(newLocal) {
        const serial = JSON.stringify(newUser);
        console.log(serial);
        localStorage.setItem("user",serial);
        return;
    }

    const userS = localStorage.getItem("user");

    if(userS) {
        const user = JSON.parse(userS);
        console.log(user)
        return user;
    }

    return null;
}