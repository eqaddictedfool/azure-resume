Window.addeventlistener('domcontentloaded', (event) =>{
    getvisitcount();
})

const functionapi = ``;

const getvisitcount = () => {
    let count = 30;
    fetch(functionapi).then(Response) => {
        return Response.json()

    }).then(Response =>{
        console.log("Website called function API");
        count = Response.count;
        document.getElementById("counter").innertext = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}