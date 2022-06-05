var lineDiv = document.getElementById('grafica');
let minDiario = document.getElementById('minDato');
let maxDiario = document.getElementById('maxDato');
let promDiario = document.getElementById('promDato');
let desvDiario = document.getElementById('desvDato');

var minHum = [2,10];var minTem = [2,10];
var minC02 = [2,10];var minPh = [2,10];
var maxHum = [2,10];
var valorMinHum = Math.min(...minHum);
var valorMaxHum = Math.max(...maxHum);
var promHum = (parseFloat(minHum));


var trace1  = {
    x: [2,10], //Aqui va el tiempo
    y: [40,50],  //Aqui va el valor medido
    name: 'Humedad',
    type: 'bar'
};
var trace2  = {
    x: [2,10], //Aqui va el tiempo
    y: [45,55],  //Aqui va el valor medido
    name: 'Co2',
    type: 'bar'
};
var trace3  = {
    x: [2,10], //Aqui va el tiempo
    y: [49,59],  //Aqui va el valor medido
    name: 'PH',
    type: 'bar'
};
var trace4  = {
    x: [2,10], //Aqui va el tiempo
    y: [47,57],  //Aqui va el valor medido
    name: 'Temperatura',
    type: 'bar'
};


//Por ahora solo pruebo los valores con Humedad
minDiario.innerHTML = valorMinHum;
maxDiario.innerHTML = valorMaxHum;
promDiario.innerHTML = promHum;
desvDiario.innerHTML = dev(minHum);


var data = [trace1,trace2,trace3,trace4];
var layout = {barmode: 'group'};


Plotly.newPlot( lineDiv, data, layout);

$('#grafica-scatter-btn').click(function(){

    var trace1  = {
        x: [2,6,10,12,14], //Aqui va el tiempo
        y: [40,50,21,30,14],  //Aqui va el valor medido
        name: 'Humedad',
        type: 'scatter'
    };
    var trace2  = {
        x: [2,10,14,28,29], //Aqui va el tiempo
        y: [45,55,56,58,88],  //Aqui va el valor medido
        name: 'Co2',
        type: 'scatter'
    };
    var trace3  = {
        x: [2,11,18,24,39], //Aqui va el tiempo
        y: [45,49,50,57,58],  //Aqui va el valor medido
        name: 'PH',
        type: 'scatter'
    };
    var trace4  = {
        x: [2,15,16,29,30], //Aqui va el tiempo
        y: [45,52,53,57,60],  //Aqui va el valor medido
        name: 'Temperatura',
        type: 'scatter'
    };
    var data = [trace1,trace2,trace3,trace4];
    var layout = {barmode: 'group'};
    
    
    Plotly.newPlot( lineDiv, data, layout);

});

$('#grafica-bar-btn').click(function(){
    var trace1  = {
        x: [2,10], //Aqui va el tiempo
        y: [40,50],  //Aqui va el valor medido
        name: 'Humedad',
        type: 'bar'
    };
    var trace2  = {
        x: [2,10], //Aqui va el tiempo
        y: [45,55],  //Aqui va el valor medido
        name: 'Co2',
        type: 'bar'
    };
    var trace3  = {
        x: [2,10], //Aqui va el tiempo
        y: [49,59],  //Aqui va el valor medido
        name: 'PH',
        type: 'bar'
    };
    var trace4  = {
        x: [2,10], //Aqui va el tiempo
        y: [47,57],  //Aqui va el valor medido
        name: 'Temperatura',
        type: 'bar'
    };
    var data = [trace1,trace2,trace3,trace4];
    var layout = {barmode: 'group'};
    
    
    Plotly.newPlot( lineDiv, data, layout);
});

function dev(arr){
    // Creating the mean with Array.reduce
    let mean = arr.reduce((acc, curr)=>{
    return acc + curr
    }, 0) / arr.length;
    // Assigning (value - mean) ^ 2 to every array item
    arr = arr.map((k)=>{
      return (k - mean) ** 2
    })
    // Calculating the sum of updated array
    let sum = arr.reduce((acc, curr)=> acc + curr, 0);
    
   // Calculating the variance
    let variance = sum / arr.length
    
   // Returning the Standered deviation
    return Math.sqrt(sum / arr.length)
}  




