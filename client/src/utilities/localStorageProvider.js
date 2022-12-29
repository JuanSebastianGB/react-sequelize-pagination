function localStorageProvider() {
  const map = new Map(JSON.parse(localStorage.getItem('key-cache')) || '[]');

  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('key-cache', appCache);
  });

  return map;
}

export { localStorageProvider };
