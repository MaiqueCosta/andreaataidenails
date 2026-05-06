self.addEventListener('install', event => {
    console.log('Service Worker instalado');
  });
  
  self.addEventListener('fetch', event => {
    // Pode evoluir depois com cache
  });