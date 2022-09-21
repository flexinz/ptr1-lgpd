function getCookies(){
    var alt = document.getElementById('campo').value;
    // console.log(alt);
    // Get all cookies
    chrome.cookies.getAll({}, function(cookies) {         				
        chrome.tabs.query({'active': true}, function (tabs) {
            var domain = '';
            var url = tabs[0].url;
            // alert(url)            
            domain = url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];

            for (var i in cookies) {
                
                    // console.log(cookies[i].domain);
                    // console.log(cookies[i].name);
                    // let form = document.createElement('form');
                    let div = document.createElement('div');
                    let div2 = document.createElement('div');
                    let div3 = document.createElement('div');

                    // form.style = 'display:table;width:auto;background-color:#eee;border:1pxsolid#666666;border-spacing:5px;';
                    // div.class = 'div-table';
                    // div2.class = 'div-table-row'; 
                    // div3.class = 'div-table-col';
                    
                    // div3.textContent = 'LINHA';

                    // form.appendChild(div);
                    // div.appendChild(div2);
                    // div2.appendChild(div3);
                    // document.body.appendChild(form);
                    // document.body.appendChild(div);
                    // document.body.appendChild(div2);
                    // document.body.appendChild(div3);
                    
                    // create a new heading and add it to the div
                    // let p = document.createElement('p');
                    // p.textContent = (cookies[i].domain);
                    // let p2 = document.createElement('p');
                    // p2.textContent = cookies[i].value;
                    // div.appendChild(p);
                    // div.appendChild(p2);
                    // // add div to the document
                    // document.body.appendChild(div);
                    // document.body.appendChild(div3);
                    // console.log(cookies[i].value);
            
                
            }    
            // creates a <table> element and a <tbody> element
            const tbl = document.createElement("table");
            const tblBody = document.createElement("tbody");

            // creating all cells
            for (var i in cookies) {
                // creates a table row
                const row = document.createElement("tr");

                for (let j = 0; j < 2; j++) {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                const cell = document.createElement("td");

                let val1 = cookies[i].domain;
                let val2 = cookies[i].value;

                const cellText = document.createTextNode(`${val1}|||||${val2}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
                }

                // add the row to the end of the table body
                tblBody.appendChild(row);
            }

            // put the <tbody> in the <table>
            tbl.appendChild(tblBody);
            // appends <table> into <body>
            document.body.appendChild(tbl);
            // sets the border attribute of tbl to '2'
            tbl.setAttribute("border", "2");
            
        });			
    });

    

}   

document.querySelector('#get-cookie').addEventListener('click', getCookies);