export default function local(newLocal, newUser) {
    if(newLocal) {
        const serial = JSON.stringify(newUser);
        localStorage.setItem("user",serial);
        return;
    }
    const userS = localStorage.getItem("user");
    if(userS) {
        const user = JSON.parse(userS);
        return user;
    }

    return null;
}