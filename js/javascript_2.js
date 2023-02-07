



$('input[name="tipo_vinculo"]').change(function () {
    if ($('input[name="tipo_vinculo"]:checked').val() === "aventura") {
        $('.aventura').show();
        $('.acao').hide();
        $('.comedia').hide();
        $('.terror').hide();
            
    }
    else if ($('input[name="tipo_vinculo"]:checked').val() === "acao") {
        $('.acao').show();
        $('.aventura').hide();
        $('.comedia').hide();
        $('.terror').hide();
    }
    else if ($('input[name="tipo_vinculo"]:checked').val() === "comedia") {
        $('.comedia').show();
        $('.aventura').hide();
        $('.acao').hide();
        $('.terror').hide();
    }
    else if ($('input[name="tipo_vinculo"]:checked').val() === "terror") {
        $('.terror').show();
        $('.aventura').hide();
        $('.acao').hide();
        $('.comedia').hide();
    }
    else {
        $('.terror').show();
        $('.aventura').show();
        $('.acao').show();
        $('.comedia').show();

    }
});



