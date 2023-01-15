import { parseHTML } from "../utils/parseHTML.js";
import { positionsAPI } from "../API/positions.js";

document.addEventListener ("DOMContentLoaded", main );

function main(){
    
    positionsAPI.getPositions()
    .then(str => positionRenderer(str))

};

function positionRenderer(str){

    let PositionsContainer = document.getElementById("positions");

    let row = parseHTML('<div class="row"></div>');

    PositionsContainer.appendChild(row);

    if(str!="[]"){

        let ls = JSON.parse(str);

        let i = 0;
        
        for(let j = 0; j<ls.length; j++){

            let html = `<div class="col-lg-4 mt-4 mt-lg-0">
                            <div class="icon-box" onclick="window.location='${ls[j].fields.URL}';">
                                <h3>${ls[j].fields.tittle}</h3>
                                <p>${ls[j].fields.text}</p>
                            </div>
                        </div>`;

            row.appendChild(parseHTML(html));

            i+=1

            if(i % 3 === 0){
                row = parseHTML('<div class="row mt-4"></div>');
                PositionsContainer.appendChild(row);
            };

        };
    }else{

        let html = `<div class="col-lg-4">
                    <div class="icon-box">
                        <h3><a href="">No positions available</a></h3>
                        <p>Not for the moment, we´ll add new ones soon:)</p>
                    </div>
                </div>`;

        row.appendChild(parseHTML(html));

    }
    return PositionsContainer;
};
