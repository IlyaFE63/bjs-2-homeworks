//Задача № 1
const hasingText = "какой-нибудь текст";
console.log(md5(hasingText)); // 8d1d3ecc455a4220590e6d27e6c1a267
console.log(md5([10, 20, 30])); // 7f49b84d0bbc38e96493718013baace6

const addAndMultiply = (a, b, c) => (a + b) * c;
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args); // получаем правильный хеш c помощью функции md5
    let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
    if (objectInCache) {
      // если элемент найден
      console.log("Из кеша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кеша: " + objectInCache.value;
    }

    let result = func(...args); // в кеше результата нет — придётся считать
    cache.push({ hash, value: result }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый)
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}
const upgraded = cachingDecoratorNew(addAndMultiply);
upgraded();

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeOutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args) {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    if (!timeOutId) {
      func(...args);
      wrapper.count++;
    }
    timeOutId = setTimeout(() => {
      func(...args)
      wrapper.count++
    }, delay);
    wrapper.allCount++;
  }
  return wrapper;
}