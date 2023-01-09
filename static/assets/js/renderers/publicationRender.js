import { parseHTML } from "../utils/parseHTML.js";
import { publicationsAPI } from "../API/publications.js";

document.addEventListener ("DOMContentLoaded", main );

function main(){
    //publicationsAPI.getQuestions()
    //.then(ls => console.log(ls))
    
    publicationsAPI.getPubHL()
    .then(str => PubHLRenderer(str))

    publicationsAPI.getAllPub()
    .then(str => AllPubRenderer(str))

};

//result = re.split(', |and',str)

function PubHLRenderer(str){

    let ls = JSON.parse(str);

    let i = 0;
    
    let PublicationsHLContainer = document.getElementById("PublicationsHL");

    let row = parseHTML('<div class="row"></div>');

    PublicationsHLContainer.appendChild(row);

    for(let j = 0; j<ls.length; j++){

        let html = `<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div class="member">
                            <img src="${ls[j].fields.photo}" alt="">
                            <h4>${ls[j].fields.journalName}, ${ls[j].fields.year}</h4>
                            <span><a href="${ls[j].fields.URL}">${ls[j].fields.Ref}</a></span>
                            <p>
                                ${ls[j].fields.tittle}
                            </p>
                        </div>
                    </div>`;

        row.appendChild(parseHTML(html));

        i+=1

        if(i % 3 === 0){
            row = parseHTML('<div class="row"></div>');
            PublicationsHLContainer.appendChild(row);
        };

    };
    return PublicationsHLContainer;
};

function AllPubRenderer(str){

    let ls = JSON.parse(str).reverse();

    //console.log(ls)

    let AllPublicationsList = document.getElementById("AllPublicationsList");

    for(let i = 0; i<ls.length; i++){

        let li = parseHTML('<li></li>');

        let p = parseHTML('<p></p>')
        let j = 0;
        for (let elem of ls[i].fields.fatText.split(/,|and/)){
            //console.log(elem)
            j += 1;
        }
        console.log(j)
        p.appendChild(parseHTML(`<strong>${ls[i].fields.fatText}</strong>`));

        p.innerHTML += ('<br>' + ls[i].fields.thinText + '<br>' + 
                        `<a href="${ls[i].fields.URL}"> ${ls[i].fields.URL}</a>`)

        li.appendChild(p);

        AllPublicationsList.appendChild(li);

        //debugger;

    }

    return AllPublicationsList;
}