const generateArray = function (amount) {
    let returnArray = [];

    /*
    let amountConverted=parseInt(amount);
    amount=amountConverted;
    */
    amount = parseInt(amount);
    //console.log(amount);
    //console.log(typeof amount);

    //Number.isNaN(amount)!==true
    if (!Number.isNaN(amount)) {

        for (let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);
            //console.log(returnArray);
        }
    } else {
        returnArray.push("Error");
    }

    //console.log(returnArray);
    return returnArray;
}

function loadEvent() {
    console.log('the page has loaded');

    /*
    console.log(generateArray("kiskutya"));
    console.log(generateArray("1 kiskutya"));
    console.log(generateArray(100));
    console.log(generateArray("100"));
    console.log(generateArray([100]));
    */

    const root=document.getElementById("root");

    root.insertAdjacentHTML("beforeend",`<div id="cards"></div>`);
    const cards=document.getElementById("cards");

    root.insertAdjacentHTML("beforeend",`<div id="tools"></div>`);
    const tools=document.getElementById("tools");

    const list=generateArray("20");
    console.log(list);
    if (list[0]!=="Error") {
        tools.insertAdjacentHTML("afterbegin",`<input placeholder="Írd ide a számokat.">`)

        for (const item of list) {
            cards.insertAdjacentHTML("beforeend", `<div>${item}</div>`)
        }
    }

}

window.addEventListener("load", loadEvent);

/*
window.addEventListener("load", function(){
    Ez is egy valid megoldás
});

window.addEventListener("load", () =>
{
    Ez is egy valid megoldás
});

window.addEventListener("load", _ =>
{
    Ez is egy valid megoldás
});
*/
