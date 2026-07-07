
let deferredInstallPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;});
function installApp(){
  if(deferredInstallPrompt){deferredInstallPrompt.prompt();deferredInstallPrompt.userChoice.finally(()=>deferredInstallPrompt=null);return;}
  showInstallToast('Android: меню Chrome → Установить приложение. iPhone: Safari → Поделиться → На экран Домой.');
}
function showInstallToast(msg){const t=document.getElementById('install-toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.__it);window.__it=setTimeout(()=>t.classList.remove('show'),4500);}
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
