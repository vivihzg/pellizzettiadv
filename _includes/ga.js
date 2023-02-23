/*Esta função carregará o script e chamará o callback assim que o script for carregado*/

function loadScriptAsync(scriptSrc, callback) {
  if (typeof callback !== 'function') {
      throw new Error('Not a valid callback for async script load');
  }
  var script = document.createElement('script');
  script.onload = callback;
  script.src = scriptSrc;
  document.head.appendChild(script);
}

/*Esta é a parte em que você chama a função definida acima e "chama de volta" seu código que é executado após o carregamento do script */

loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=UA-93058555-1', function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'UA-93058555-1', { 'anonymize_ip': true });
})
