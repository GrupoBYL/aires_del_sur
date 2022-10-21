$(".contacto").click(function () {
    $("#modalContacto").addClass("is-active");
});

$("#closeContacto").click(function () {
    $("#modalContacto").removeClass("is-active");
})

$('.close').click(function () {
    $('.modal').removeClass('is-active');
})

$('.linkTipoA').click(function(event){
   $("#modalContacto").removeClass("is-active");
   $('#tipo_depto').val("tipoA")
   event.preventDefault();

   
})

$('.linkTipoB').click(function(event){
   $("#modalContacto").removeClass("is-active");
   $('#tipo_depto').val("tipoB")
   event.preventDefault();

   
})
$('.linkTipoC').click(function(event){
   $("#modalContacto").removeClass("is-active");
   $('#tipo_depto').val("tipoC")
   event.preventDefault();

   
})
$('.linkTipoD').click(function(event){
   $("#modalContacto").removeClass("is-active");
   $('#tipo_depto').val("tipoD")
   event.preventDefault();

   
})
$('.linkTipoE').click(function(event){
   $("#modalContacto").removeClass("is-active");
   $('#tipo_depto').val("tipoE")
   event.preventDefault();

   
})

  




$(document).ready(function () {
 //popups
 /*
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {

    //mobile
    $.fancybox.open({
      src: "https://www.loga.cl/wp-content/uploads/2022/01/popup-terra-mobile.jpg",
      type: "image",
      opts: {
        animationEffect: "zoom-in-out",
        animationDuration: 400,
        smallBtn: true,
        clickContent: function () {
          // $(location).attr('href',"#section6");
        }
      }
    });

  } else {

    //desktop
    $.fancybox.open({
      src: "https://www.loga.cl/wp-content/uploads/2022/01/popup-terra-desktop.jpg",
      type: "image",
      opts: {
        animationEffect: "zoom-in-out",
        animationDuration: 400,
        smallBtn: true,
        clickContent: function () {
          // $(location).attr('href',"#section6");
        }
      }
    });

  }
*/



     $("#tellamamos").validate({
      rules: {
         llamada: {
            required: true,
         }
      },
      messages: {
         llamada: "Por favor ingrese un teléfono.",
      },

      submitHandler: function (form) {
         let datosFormulario = new FormData(form);

         $.ajax({
            url: "assets/php/contacto2.php",
            method: "POST",
            data: datosFormulario,
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function () { },
            success: function (response) {
               if (response == "success") {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                     event: "envioTelefono"
                  });

                  $.fancybox.open({
                     src: '<div class="mensaje-form" style="background: rgba(0,0,0,0);color: #FFF"><h2 class="has-text-centered">Envío Exitoso</h2><p>Pronto estaremos en contacto</p></div>',
                     type: "html",
                     opts: {
                        afterClose: function () {
                           $("#form-cotizar").trigger("reset");
                        },
                        smallBtn: false
                     }
                  });
                  $("#tellamamos").trigger("reset");
                  // window.dataLayer = window.dataLayer || [];
                  // dataLayer.push ({
                  //     'event' : 'formulario',
                  //     'Origen' : 'Huantajaya'
                  // })
               } else {
                  $.fancybox.open({
                     src: '<div class="mensaje-form" style="background: rgba(0,0,0,0);color: #FFF"><h2 class="has-text-centered">Error</h2><p>Lo sentimos, por favor intentalo nuevamente.</p></div>',
                     type: "html",
                     opts: {
                        afterClose: function () {
                           $("#tellamamos").trigger("reset");
                        },
                        smallBtn: false
                     }
                  });
                  $("#tellamamos").trigger("reset");
               }
            }
         });
      }
   });

    // contacto
    $("#contacto").validate({
        rules: {
            nombre: "required",
            rut: {
                validateRut: true,
                required: true
            },
            telefono: "required",
            email: {
                email: true,
                required: true
            },
            sector: "required",
            canal: "required",
            tipo_depto:"required"

        },
        messages: {
            nombre: "Por favor ingrese su nombre",
            rut: {
                validateRut: "Por favor ingrese un rut válido",
                required: "Por favor ingrese un rut"
            },
            telefono: "Por favor ingrese un teléfono",
            email: {
                email: "Por favor ingrese un email válido",
                required: "Por favor ingrese un email"
            },
            sector: "Seleccione como llego a la pagina ",
            canal: "Seleccione  por donde  quiere ser contactado",
            tipo_depto: "Seleccione el tipo de Departamento",

        },
        submitHandler: function (form) {
         let datosFormulario = new FormData(form);
         $.ajax({
            url: "assets/php/contacto.php",
            method: "POST",
            data: datosFormulario,
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function () {
               $.fancybox.open({
                  src: '<div class="mensaje-form" style="background: rgba(0,0,0,0);color: #FFF"><h2 class="has-text-centered">Enviando...</h2></div>',
                  type: "html",
                  opts: {
                     modal: true,
                     smallBtn: false,
                     afterClose: function () {
                        setTimeout(() => {
                           $.fancybox.close();
                        }, 2000);
                     }
                  }
               });
            },
            success: function (response) {
               console.log(response)
               if (response[0]) {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                     event: "envioFormulario"
                  });

                  $.fancybox.open({
                     src: '<div class="mensaje-form" style="background: rgba(0,0,0,0);color: #FFF"><h2 class="has-text-centered">Mensaje enviado.</h2><p>Pronto estaremos en contacto</p></div>',
                     type: "html",
                     opts: {
                        closeExisting: true,
                        modal: true,
                        afterLoad: function () {
                           console.log('cerrar fancy')
                           setTimeout(() => {
                              $.fancybox.close();

                           }, 2000);
                        }
                     }
                  });
                  $("#contacto").trigger("reset");
               } else {
                  $.fancybox.open({
                     src: '<div class="mensaje-form" style="background: rgba(0,0,0,0);color: #FFF"><h2 class="has-text-centered">Error</h2><p>Lo sentimos, por favor intentalo nuevamente.</p></div>',
                     type: "html",
                     opts: {
                        closeExisting: true,
                        modal: true,
                        afterLoad: function () {
                           setTimeout(() => {
                              $.fancybox.close();
                           }, 3000);
                        }
                     }
                  });
                  $("#contacto").trigger("reset");
               }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
               alert("some error " - errorThrown);
            }
         });
      }
    })
})


//  Methods
$.validator.addMethod("validateRut", function () {
    if (validateR($("#rut")
        .val())) {
        let rutFormateado = format($("#rut")
            .val());
        $("#rut")
            .val(rutFormateado);
        return true;
    } else {
        return false;
    }
});


//Función para Rut
function clean(elrut) {

    return typeof elrut === "string" ? elrut.replace(/^0+|[^0-9kK]+/g, "")
        .toUpperCase() : "";
}


function validateR(elrut) {
    if (typeof elrut !== "string") {
        return false;
    }
    if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(elrut)) {
        return false;
    }

    elrut = clean(elrut);

    var t = parseInt(elrut.slice(0, -1), 10);
    var m = 0;
    var s = 1;

    while (t > 0) {
        s = (s + (t % 10) * (9 - (m++ % 6))) % 11;
        t = Math.floor(t / 10);
    }

    var v = s > 0 ? "" + (s - 1) : "K";
    return v === elrut.slice(-1);
}

function format(elrut) {
    elrut = clean(elrut);

    var result = elrut.slice(-4, -1) + "-" + elrut.substr(elrut.length - 1);
    for (var i = 4; i < elrut.length; i += 3) {
        result = elrut.slice(-3 - i, -i) + "." + result;
    }

    return result;
}


