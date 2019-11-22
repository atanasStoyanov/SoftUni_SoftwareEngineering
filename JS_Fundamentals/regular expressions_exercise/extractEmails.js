function solve(arr) {
    let text = arr[0];
    let emailPattern = /\s+(?<user>[a-z0-9]+[\.\-_]?[a-z0-9]+)@(?<host>[a-z\-]+(\.[a-z]+)+)/g;
    let emails = text.match(emailPattern);

    if (emails) {
        console.log(emails.join('\n'));
    }

}

solve(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.']);