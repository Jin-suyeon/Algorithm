function solution(cacheSize, cities) {
  let cnt = 0;
  let cache = [];

  if (cacheSize === 0) return cities.length * 5;

  while (cities.length) {
    let city = cities.shift().toLowerCase();

    if (cache.indexOf(city) !== -1) {
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
      cnt += 1;
    } else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(city);
      cnt += 5;
    }
  }
  return cnt;
}
