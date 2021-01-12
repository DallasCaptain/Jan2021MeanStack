$(document).ready(
    $.get("https://pokeapi.co/api/v2/pokemon/7/", function(data){     
        console.log(data)
        //change the value of our h1 to data.name

        $('#favpoki').text(data.name)
        for(let i = 0; i<data.types.length; i++){
            $('#favpoki').after('<h3>'+data.types[i].type.name+'</h3>')
        }
    })
)

