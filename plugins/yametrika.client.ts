export default defineNuxtPlugin(() => {
  if (process.client) {
    // Проверяем, не вставлялся ли скрипт раньше
    if (!document.querySelector('script[src="https://mc.yandex.ru/metrika/tag.js"]')) {
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){
          (m[i].a=m[i].a||[]).push(arguments);
        };
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) { return; }
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,
        k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      // Инициируем метрику
      (window as any).ym(103296773, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
      });
    }
  }
});