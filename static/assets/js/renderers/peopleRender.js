import { parseHTML } from "../utils/parseHTML.js";
import { peopleAPI } from "../API/people.js";

document.addEventListener ("DOMContentLoaded", main );

function main(){
    
    peopleAPI.getLabCollabs()
    .then(str => labCollabsRender(str))

    peopleAPI.getLabMembers()
    .then(str => labMembersRender(str))

};

function labCollabsRender(str){

    let ls = JSON.parse(str);

    let i = 0;

    let labCollabsContainer = document.getElementById('labCollaborationsContainer');

    let row = parseHTML('<div class="row mt-4 justify-content-center"></div>');

    labCollabsContainer.appendChild(row);

    for(let j = 0; j<ls.length; j++){

        let html = `<div class="col-4">
                        <div class="card border-0">
                            <div class="card-body">
                                <h5 class="card-title text-center">${ls[j].fields.name}</h5>
                                <p class="card-text text-center">${ls[j].fields.place}</p>
                            </div>
                        </div>
                    </div>`;

        row.appendChild(parseHTML(html));

        i+=1;

        if(i%2===0){
            row = parseHTML('<div class="row mt-4 justify-content-center"></div>');
            labCollabsContainer.appendChild(row);
        };

    };
    return labCollabsContainer;
}

function labMembersRender(str){

    let ls = JSON.parse(str);

    let i = 0;

    let currentLabMembersContainer = document.getElementById('currentLabMembersContainer');

    let row = parseHTML('<div class="row mt-4 justify-content-center"></div>');

    currentLabMembersContainer.appendChild(row);

    for(let j = 0; j<ls.length; j++){

        let html = `<div class="col-3">
                        <div class="card border-0">
                            <img class="card-img-top" height="300" src="media/${ls[j].fields.photo}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title text-center">${ls[j].fields.name}</h5>
                                <p class="card-text text-center">${ls[j].fields.position}</p>
                            </div>
                        </div>
                    </div>`;

        row.appendChild(parseHTML(html));

        i+=1;

        if(i%3===0){
            row = parseHTML('<div class="row mt-4 justify-content-center"></div>');
            currentLabMembersContainer.appendChild(row);
        };

    };
    return currentLabMembersContainer;
}