let no = document.getElementById('no');
let go = document.getElementById('go');
let but = document.getElementById('but');
let text = '';
let numb = 'Подсчет цены: ';
let del = document.getElementById('dell');
let str = document.getElementById('str');
let vid = document.querySelectorAll('.vid');
let first = 0;
let second = 0;
let threed = 0;
let sum = 0;
let neob = document.getElementById('neob');
let tt = document.getElementById('ob');
let finish = 'Спасибо за пакупку!!!';

but.addEventListener('click', function () {
    del.style.display = "none";
    but.style.display = "none";

    let schet = document.querySelector('.colich').value;

    no.style.display = "block";
    no.innerHTML = "Заказ сделан.";
    go.style.display = "block";
    go.innerHTML = "Вы купили:";

    if (schet > 1) { text += schet + ' Струн по 30руб. '; numb += 30 * schet + 'руб '; first = 30 * schet; }
    else { text += '1 пачка струн по 30руб. '; numb += 30 + 'руб. '; first = 30; }

    if (vid[0].checked) { text += '+  доставка за 20руб. '; numb += '+ ' + 20 + 'руб.(за доставку) '; threed = 20; }
    else { text += '+ без доставки'; }

    sum = first + threed;

    document.querySelector('.text').innerHTML = text;
    document.querySelector('.pay').innerHTML = numb;
    document.querySelector('.text2').innerHTML = "И в итоге: " + sum + " рублей";
    document.getElementById('senk').innerHTML = finish;
})