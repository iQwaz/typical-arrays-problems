exports.min = function min (array) {
  if (Array.isArray(array) && array.length > 0) {
    // Вычисление min-значения
    let result = array[0];
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] < result) {
        result = array[i];
      }
    }
    return result;
  }
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length > 0) {
    // Вычисление max-значения
    let result = array[0];
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > result) {
        result = array[i];
      }
    }
    return result;
  }
  return 0;
}


exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length > 0) {
    // Вычисление среднего значения
    let result = 0;
    for (let i = 0; i < array.length; i += 1) {
      result += array[i];
    }
    return (result / array.length);
  }
  return 0;
}