self.addEventListener('hashchange', () => {
  document.title = "DOSYAGO.COM -> " + document.location.hash.slice(1);
});
