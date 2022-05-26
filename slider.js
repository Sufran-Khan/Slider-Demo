var btn1 = document.getElementById('btn1');

let check = true;

btn1.addEventListener('click', checkClick);

function checkClick(){
    console.log('working');



    document.getElementById('btn1').disabled = true;

    if(check){
        document.getElementById('p2').style.transform= 'translateX(872%)';
        document.getElementById('btn1').innerHTML = '<< Move Left';

        check =!check;
    }
    else{
        document.getElementById('p2').style.transform= 'translateX(0%)';
        document.getElementById('btn1').innerHTML = 'Move Right >>';
        
        check =!check;
    }


    setTimeout(() =>{document.getElementById('btn1').disabled = false},5000);



}