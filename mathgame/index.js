var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var result = document.getElementById('result');
var submit = document.getElementById('submit')
var show = document.getElementById('show');
var stat = document.getElementById('stat');

let data = populate();
let status = []

function populate(){
    var number1 = getRandomInt(100);
    var number2 = getRandomInt(100);
    
    n1.textContent = number1;
    n2.textContent = number2;
    
    var expectedResult = number1 + number2;
    return {
        number1: number1,
        number2: number2,
        expected: expectedResult
    }
}

function showStat(){
    stat.textContent = '';
    status.map((currentValue) => stat.innerHTML += '<p>' + currentValue+ '</p>');
}
result.addEventListener('keyup',function(event){
    if (event.keyCode === 13) {
    afterSubmit();
    }
})

submit.addEventListener('click',function(event){
    afterSubmit()
})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function afterSubmit(){
    if(data.expected == result.value){
        show.textContent = 'Well done!'
    }else{
        show.textContent = 'Failed. '+ 'Expected ' + data.expected+ ' but was ' + result.value; 
    }
    data = populate();
    status.push(show.textContent);
    showStat();
    result.value = '';
}




