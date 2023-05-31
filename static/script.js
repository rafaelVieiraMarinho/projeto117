$(document).ready(function(){
    console.log('Ready')

    let date_time = new Date()
    let current_date = date_time.toLocaleDateString()
    //colocar nome do id da tag data
    $('#date').text("Data: " + current_date)
    //colocar nome do id da tag do botao
    $('#button').click(function(){
        //colocar nome do id da tag campo de texto
        let review = $('#text').val()
        console.log(review)

        let input_data = {'customer_review' : review}
        console.log(input_data)

        $.ajax({
            //colocar o mesmo nome da rota da classe app e metodo
            url : "/predict",
            type : "POST",
            //colocar nome da variavel JSON da linha 14 que passara os dados para o app.py
            data : JSON.stringify(input_data),
            dataType : 'json',
            contentType : 'application/json',
            success : function(result){
                let prediction = result.prediction
                let emoji_url = result.url
                console.log(emoji_url)

                $('#sentiment').text(prediction)
                $('#sentiment').show()

                $('#emoji').attr('src' , emoji_url)
                $('#emoji').show()
            },
            error : function(result){
                console.log(result)
            }
        })

        $('#text').val("")
        
    })
})