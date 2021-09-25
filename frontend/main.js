Window.addeventlistener('DOMContentLoaded', (event) =>{
    getvisitcount();
})

const functionApi = `http://localhost:7071/api/Getresumecounter`;

const getvisitcount = () => {
    let Count = 30;
    fetch(functionApi).then(Response => {
        return Response.json()

    }).then(Response =>{
        console.log("Website called function API");
        Count = Response.count;
        document.getElementById("Counter").innertext = Count;
    }).catch(function(error){
        console.log(error);
    });
    return Count;
}