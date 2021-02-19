window.addEventListener('DOMContentLoaded', function () {
    let div1 = document.createElement('div');
    div1.className = "header-container";
    let header1 = document.createElement('h1'); // create a <h2> element
    let headerText1 = document.createTextNode('This is an h1'); // create the header content
    header1.className = "h1";
    header1.appendChild(headerText1);

    header1.addEventListener('dblclick',function(){
        header1.style.color = randomColor();
    });
    // header1.style.color = randomColor();

    div1.appendChild(header1);
    let header2 = document.createElement('h2'); // create a <h2> element
    let headerText2 = document.createTextNode('This is an h2'); 
    header2.className = "h2";
    header2.appendChild(headerText2);

    header2.addEventListener('dblclick',function(){
        header2.style.color = randomColor();
    });

    div1.appendChild(header2);
    let header3 = document.createElement('h3'); // create a <h2> element
    let headerText3 = document.createTextNode('This is an h3'); 
    header3.className = "h3";
    header3.appendChild(headerText3);

    header3.addEventListener('dblclick',function(){
        header3.style.color = randomColor();
    });

    div1.appendChild(header3);
    let header4 = document.createElement('h4'); // create a <h2> element
    let headerText4 = document.createTextNode('This is an h4'); 
    header4.className = "h4";
    header4.appendChild(headerText4);

    header4.addEventListener('dblclick',function(){
        header4.style.color = randomColor();
    });

    div1.appendChild(header4);
    let header5 = document.createElement('h5'); // create a <h2> element
    let headerText5 = document.createTextNode('This is an h5'); 
    header5.className = "h5";
    header5.appendChild(headerText5);

    header5.addEventListener('dblclick',function(){
        header5.style.color = randomColor();
    });

    div1.appendChild(header5);
    let header6 = document.createElement('h6'); // create a <h2> element
    let headerText6 = document.createTextNode('This is an h6'); 
    header6.className = "h6";
    header6.appendChild(headerText6);

    header6.addEventListener('dblclick',function(){
        header6.style.color = randomColor();
    });

    div1.appendChild(header6);


    var listNo = 1;

    function listIncre(e) {
        // Can we create a list item without creating an unordered list? YES! 
        var li = document.createElement("li");
        var liText = document.createTextNode("This is list item " + listNo);
        li.appendChild(liText);
        li.addEventListener("click", function(){
            li.style.color = randomColor();
        });
        li.addEventListener("dblclick", function() {
            document.body.removeChild(li);
        });
        document.body.appendChild(li);
        listNo++;
    }

    let buttons = document.getElementById('button-list');
    buttons.addEventListener('click',listIncre);




    function randomColor() {
        let colarr = ['red','orange','yellow','green','lightblue','blue','indigo','violet'];
        let rnNo = Math.floor(Math.random() * 8);
        // hd.style.color = colarr[rnNo];
        return colarr[rnNo];
    }

    let cells = document.querySelectorAll('.ol-li ');

    for(let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function(){
            cells[i].style.color = randomColor();
        });
        cells[i].addEventListener('dblclick', function(){
            cells[i].parentElement.removeChild(cells[i]);
        });
    }

document.body.appendChild(div1);
});
