$(document).ready(function() {
    let utm_source = localStorage.utm_source;
    let utm_medium = localStorage.utm_medium;
    let utm_content = localStorage.utm_content;
    let utm_campaign = localStorage.utm_campaign;
    let utm_term = localStorage.utm_term;

    if (utm_source != "" || utm_medium != "" || utm_content != "" || utm_campaign != "" || utm_term != "") {

        let url_final = 'https://barrionativa.cl/gracias-formulario/?utm_source='+utm_source+'&utm_medium='+utm_medium+'&utm_content='+utm_content+'&utm_campaign='+utm_campaign+'&utm_term='+utm_term;
        localStorage.clear()
        location.href = url_final;

     } else {
        location.href = "https://barrionativa.cl/gracias-formulario/";
     }
})