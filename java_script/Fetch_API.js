const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#para");
const btn = document.querySelector("#btn");


const getFactss = async () => {
    console.log("Fetching Data...");
    let responce = await fetch(URL);
    console.log(responce); 
    // console.log(responce.status);  // For fetching status
    let data = await responce.json();
    factPara.innerText=data[1].text;
    console.log(data);
    

}
btn.addEventListener("click",getFactss);