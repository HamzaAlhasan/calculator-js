let btn = document.getElementById('calc');
btn.onclick = function(e){
    e.preventDefault();
    let z ;
    let x = document.getElementById('num1');
    let y = document.getElementById('num2');
    let o = document.getElementById('ope').value;
    if(o =='+'){
        z = parseInt(x.value) + parseInt(y.value);
    }
    if( o == "-"){
        z = x.value - y.value;
    console.log('hi')
    }
    if(o =='*'){
         z = x.value * y.value ;
    console.log('hamza')
    }
    if(o == '/'){
        z = x.value / y.value;
    }
    document.getElementById('res').value=z;
}