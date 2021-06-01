let url = "datos.json"
$('#miboton').click(function (e) { 
    e.preventDefault();

    $.ajax({
        type: "get",
        url: url,
        data: "data",
        dataType: "json",
       })
       .done((data)=>{
    
        
    data.forEach((info)=>{
        $("#1").append(`<h4>${info.campeon}</h4><h4>${info.rol}</h4><tr>`)
    })
       })
       .fail(()=>{
    console.log("Error")
       })
    
});
