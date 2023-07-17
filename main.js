    $(document).ready(function() {

        $('.cadastrar').on('click', function(){
            const nomeTarefa = $('#nomeTarefa').val()
            const li = document.createElement('li')
            li.innerHTML = `${nomeTarefa}`
            $('ul').append(li)
            $('#nomeTarefa').val('')
            $(li).click(function() {
            })
        })

        })





