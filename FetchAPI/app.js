// const url="https://potterapi-fedeperin.vercel.app/en/spells";
const url=" https://api.thecatapi.com/v1/images/search";
const factpara=document.querySelector("#fact");
const btn=document.querySelector("#button");

// sending request to api
const getFacts=async () =>{
    console.log("getting data..........");
    let response= await fetch(url);
    console.log(response);// JSON format
    let data =await response.json();
    factpara.src=data[0].url;
};
//btton ma click gare pachhi api ko data html ma print hun x 
btn.addEventListener("click", getFacts);


// =============================================================================
// next example:

// const url = "https://potterapi-fedeperin.vercel.app/en/spells";
// const factpara = document.querySelector("#fact");
// const btn = document.querySelector("#button");

// // sending request to API
// const getFacts = async () => {
//     try {
//         console.log("Getting data...");
//         let response = await fetch(url);
//         let data = await response.json();
        
//         // Choose random spell
//         let randomIndex = Math.floor(Math.random() * data.length);
//         let spell = data[randomIndex];

//         // Display spell name and usage
//         factpara.innerText = `${spell.spell}: ${spell.use}`;
//     } catch (error) {
//         factpara.innerText = "Failed to fetch spell. Please try again.";
//         console.error("Error fetching data:", error);
//     }
// };

// // Button click triggers getFacts
// btn.addEventListener("click", getFacts);

// ================================================================================================




















