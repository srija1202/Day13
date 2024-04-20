function details() {
    var res =[];
    res.push(document.getElementById('firstName').value);
    res.push(document.getElementById('middleName').value);
    res.push(document.getElementById('lastName').value);
    res.push(document.getElementById('email').value);
    res.push(document.getElementById('address').value);
    console.log(res);
}