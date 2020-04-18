
let arreglo = ['1', '2', '3', '4', '5'];
//ejercicio 01

function miforeach(arreglo, callback) {
  let mynuevoarray = [];
  for (var i = 0; i < arreglo.length; i++) {
    let dato = arreglo[i];
    callback(dato, i, arreglo);
    console.log(callback(dato, i, arreglo));
    mynuevoarray.push(callback(dato, i, arreglo));
  }
  return mynuevoarray;
}
let recorriendo = miforeach(arreglo, function callback(element) { return element; }
);
console.log("Ejercicio 01", recorriendo);

//ejercicio 02
let arreglonum = [10, 20, 30, 40, 50];


function miMap(arr, fn) {
  let nuevoArray = [];
  for (var i = 0; i < arr.length; i++) {
    nuevoArray.push(fn(arr[i]));
  }
  return nuevoArray;
}

let recorriendomap = miMap(arreglonum, function callback(element) { return element * 10; }
);
console.log("Ejercicio 02", recorriendomap);

//ejercicio 03
let arreglonumfil = [4, 8, 12, 13, 15, 16, 19, 22];


function miFilter(arr, fn) {
  let nuevoArrayFilter = [];

  arr.forEach(function (element, index, arr) {
    if (fn(element, index, arr)) {
      nuevoArrayFilter.push(element);
    }
  }


  );
  return nuevoArrayFilter;
}

let recorriendofilter = miFilter(arreglonumfil, function (element) {
  return element >= 15;
}
);
console.log("Ejercicios 03-filter", recorriendofilter); 


//ejercicio 04
let arreglonumredu = [4, 8, 12, 13, 15, 16, 19, 22];
function miReduce(arr, fn) {
  let nuevoArrayRed = [];
  arr.forEach(function (element, index, arr) {
    if (fn(element, index, arr)) {
      nuevoArrayRed.push(element);
    }
  }
  );
  return nuevoArrayRed;
}
let totalsuma=0;
let recorriendoreduce = miReduce(arreglonumredu, function (element) {
  return totalsuma +=(+element);
}
);
console.log("Ejercicios 04-reduce", recorriendoreduce); 




