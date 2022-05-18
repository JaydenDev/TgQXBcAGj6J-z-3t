function savePassword() {
    let wsite = document.querySelector('#wsite').value;
    let usr = document.querySelector('#usr').value;
    let passwd = document.querySelector('#passwd').value;
    if (amnt = '0') {
        // create a data table in div by id 'data'
        let table = document.createElement('table');
        table.id = 'data';
        document.querySelector('#data').appendChild(table);
        // create a table header row
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.innerHTML = 'Website';
        tr.appendChild(th);
        th = document.createElement('th');
        th.innerHTML = 'Username';
        tr.appendChild(th);
        th = document.createElement('th');
    }
}

