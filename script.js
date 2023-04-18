// Movimiento Decoder
$(document).ready(function () {
    $(".desplazar").click(function () {
        $(".decode-container").toggleClass("show hide");
    });
});

// Decoder functionality
$(document).ready(function () {
    $('#decodificar').click(function (e) {
        e.preventDefault();
        var binaryInput = $('#codigo').val().replace(/\s+/g, '');
        var textOutput = '';

        for (var i = 0; i < binaryInput.length; i += 8) {
            var byte = binaryInput.substr(i, 8);
            textOutput += String.fromCharCode(parseInt(byte, 2));
        }

        $('#result').text(textOutput);
    });
});

// Copy-paste container
$(document).ready(function () {
    $('.copy-button').on('click', function () {
        var $temp = $('<textarea>');
        var $container = $(this).parent();
        var $textToCopy = $container.find('.text-to-copy');
        var $copiedText = $container.find('.copied-text');
        $('body').append($temp);
        $temp.val($textToCopy.text()).select();
        document.execCommand('copy');
        $temp.remove();
    });
});
