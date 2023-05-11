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

str.addEventListener('click', function () {
    if (str.checked) { neob.style.display = "none"; tt.style.display = "block"; tt.innerHTML = "Струн столько же сколько гитар"; }
    else { neob.style.display = "block"; tt.style.display = "none"; }
})

but.addEventListener('click', function () {
    del.style.display = "none";
    but.style.display = "none";

    let schet = document.querySelector('.colich').value;
    let strun = document.querySelector('.struna').value;

    no.style.display = "block";
    no.innerHTML = "Заказ сделан.";
    go.style.display = "block";
    go.innerHTML = "Вы купили:";

    if (schet > 1) { text += schet + ' гитары по 600руб. '; numb += 600 * schet + 'руб.(за гитары) '; first = 600 * schet; }
    else { text += '1 гитара по 600руб. '; numb += 600 + 'руб.(за гитару) '; first = 600; }

    if (str.checked) { text += '+ ' + schet + ' пачек струн по 40руб. '; numb += '+ ' + 40 * schet + 'руб.(за струны) '; second = 40 * schet; }
    else {
        if (strun > 0) { text += '+ ' + strun + ' пачек струн по 40руб. '; numb += '+ ' + 40 * strun + 'руб.(за струны) '; second = 40 * strun; }
        else { text += '+ без струн '; }
    }

    if (vid[0].checked) { text += '+  доставка за 20руб. '; numb += '+ ' + 20 + 'руб.(за доставку) '; threed = 20; }
    else { text += '+ без доставки'; }

    sum = first + second + threed;

    document.querySelector('.text').innerHTML = text;
    document.querySelector('.pay').innerHTML = numb;
    document.querySelector('.text2').innerHTML = "И в итоге: " + sum + " рублей";
    document.getElementById('senk').innerHTML = finish;
})