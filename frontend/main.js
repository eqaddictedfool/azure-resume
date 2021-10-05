window.addEventListener('DOMContentLoaded', (event) =>{
    getvisitcount();
})

const functionApiUrl = 'https://gfaygetresumecounter.azurewebsites.net/api/Getresumecounter?code=tGw0Uj//PhgXyBDJoXQCpi0lVMUZ7M45WnHy6f07cfiOIXUwaVEwCQ=='
const localfunctionApi = `http://localhost:7071/api/Getresumecounter`;

const getvisitcount = () => {
    let Count = 30;
    fetch(functionApiUrl).then(Response => {
        return Response.json()

    }).then(Response =>{
        console.log("Website called function API");
        Count = Response.count;
        document.getElementById("counter").innerText = Count;
    }).catch(function(error){
        console.log(error);
    });
    return Count;
}