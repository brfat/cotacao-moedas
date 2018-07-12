$( document ).ready(function() {

$("a.submit-ajax").click(function () {
    $(this).text("Carregando...");

    const root = 'https://api.promasters.net.br/cotacao/v1/valores';

    $.ajax({
        url: root,
        dataType: 'json',
        crossDomain: true,
        contentType: "application/json",
        success: function (data) {
            $("a.submit-ajax").text("Carregado");
            console.log(data);
            const $bitcoin = $(".bitcoin");
            const $nome = $('<h2>').text(data.valores['BTC'].nome);
            const $valor = $('<h3>').text('R$' + data.valores['BTC'].valor);
            const $fonte = $('<p>').text('Fonte:' + data.valores['BTC'].fonte);

            $($bitcoin).append($nome);
            $($bitcoin).append($valor);
            $($bitcoin).append($fonte);

            ////////////////////////////////////////

            const $dolar = $(".dolar");
            const $dolar_name = $('<h2>').text(data.valores['USD'].nome);
            const $dolar_valor = $('<h3>').text('$' + data.valores['USD'].valor);
            const $dolar_fonte = $('<p>').html('Fonte:' + data.valores['USD'].fonte);

            $($dolar).append($dolar_name);
            $($dolar).append($dolar_valor);
            $($dolar).append($dolar_fonte);

            ///////////////////////////////////////

            const $euro = $(".euro");
            const $euro_name = $('<h2>').text(data.valores['EUR'].nome);
            const $euro_valor = $('<h3>').text('$' + data.valores['EUR'].valor);
            const $euro_fonte = $('<p>').text('Fonte:' + data.valores['EUR'].fonte);

            $($euro).append($euro_name);
            $($euro).append($euro_valor);
            $($euro).append($euro_fonte);

            ///////////////////////////////////////

            const $libra = $(".libra");
            const $libra_name = $('<h2>').text(data.valores['GBP'].nome);
            const $libra_valor = $('<h3>').text('R$' + data.valores['GBP'].valor);
            const $libra_fonte = $('<p>').text('Fonte:' + data.valores['GBP'].fonte);

            $($libra).append($libra_name);
            $($libra).append($libra_valor);
            $($libra).append($libra_fonte);

        }
    });
});
 
});
