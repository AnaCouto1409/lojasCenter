(function ($) {
    'use strict';

    $(function () {
  var instance = new Date();

  var month =["Jan","Fev","Mar", "Abr","Mai","Jun", "Jul","Ago","Set", "Out","Nov","Dez"];

  var day = (!! instance.getDate().toString()[1]) ? instance.getDate() : '0' + instance.getDate();
  var month_index = instance.getMonth();
  var year = instance.getFullYear();

  var date = [ day, month[month_index], year ].join(" ");

  document.getElementById('datapromo').value = date;


        $('#form-content').on('submit', function (event) {

          var data = {
            npromotor: $('#npromotor').val(),
          cpromotor: $('#cpromotor').val(),
            cargoantigo: $('#cargoantigo').val(),
            cargoatual: $('#cargoatual').val(),
            npromovido: $('#npromovido').val(),
            tag: $('#tag').val(),
            datapromo: $('#datapromo').val(),
            motivos: $('#motivos').val(),
            permissao: '',
            termos: ' x ',
          };

          if ($('#permissao').val() === '') {
            data.permissao = 'N/A.';
          } else {
            data.permissao = $('#permissao').val();
          }
       
          event.preventDefault();
          setTimeout(function () {
                $.post('/post', {
                    t: 3,
                    message: [
            '[center][b][color=#ff0000]Modelo I - Promoção[/color][/b][/center]',
            '',
                    '[b]Seu posto e nickname:[/b] ' + data.cpromotor + ' ' + data.npromotor,
                    '[b]Promoção:[/b] ' + data.cargoantigo + ' a ' + data.cargoatual,
                    '',
                    '[b]' + data.npromovido + ' [' + data.tag + '] ' + data.datapromo + '[/b]',
                    '',
                    '[b]Motivos para a promoção:[/b] ' + data.motivos,
                    '[b]Permissão:[/b] ' + data.permissao,
                    '',
                    '(' + data.termos + ') Li e concordo com as normas de promoção.',
                    ].join('\n'),
                    mode: 'reply',
                    tid: $('[name="tid"]:first').val(),
                    post: 1,
                    attach_sig: 'on'
                }).done(function () {
                    alert('Postado com sucesso. Você será redirecionado para o tópico...');
              location.href = '/forum';
                }).fail(function () {
                    alert('Houve um erro! Tente novamente!');
                });
          }, 600);
        });
    });
  }(jQuery));