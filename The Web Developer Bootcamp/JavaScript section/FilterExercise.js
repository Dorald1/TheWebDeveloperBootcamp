function validUserNames(usernames) {
    // your code here
    let valids = usernames.filter(element => {
        if (element.length < 10) {
            return element;
        }
    })
    return valids
}