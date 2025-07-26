const BASE_URL="https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json"

const dropdowns= document.querySelectorAll(".dropdown select");


for (let select of dropdowns){
    for (currCode in countryList) {
    let newOption= document.createElement("option");
    newOption.innerText=currCode;
    newOption.value=currCode;
    if (select.name==="from" && currCode=== "USD"){
        newOption.selected="selected";
    }else if (select.name==="To" && currCode==="NPR"){
        newOption.selected="selected";
    }
    select.append(newOption);

}
}




