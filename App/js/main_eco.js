async function px(){
    fetch("http://localhost:3000/api")
            .then( response => response.json() )
            .then( data => console.log(typeof(data)) )
            .catch( error => console.log(error) )
}

px()    