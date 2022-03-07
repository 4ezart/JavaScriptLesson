function isnumber(number) {
    if (!isNaN(parseFloat(number)) && isFinite) { return true; }
    else { return false; };
};

document.querySelector("#t01").onclick = function () {
    let first_number = prompt('Введите первое число', '');
    let two_number = prompt('Введите 2e число', '');
    if (first_number != two_number) {
        if (first_number < two_number) {
            alert(`Первое число - меньше (${first_number})`);
        }
        else {
            alert(`Второе число - меньше (${two_number})`);
        };
    };
};

document.querySelector("#t02").onclick = function () {
    let first_number = prompt('Введите первое число', '');
    let two_number = prompt('Введите 2e число', '');
    if (first_number != two_number) {
        if (first_number > two_number) {
            alert(`Первое число - больше (${first_number})`);
        }
        else {
            alert(`Второе число - больше (${two_number})`);
        };
    };
};

document.querySelector("#t03").onclick = function () {
    let first_number = prompt('Введите число', '');
    if (first_number % 3 == 0 || first_number % 5 == 0 || first_number % 7 == 0) {
        //alert("Кратно")
    }
    else {
        //alert("Не кратно")
    };

    if (first_number % 3 == 0) { alert("Кратно 3") };
    if (first_number % 5 == 0) { alert("Кратно 5") };
    if (first_number % 7 == 0) { alert("Кратно 7") };
};

document.querySelector("#t04").onclick = function () {
    let arr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    let user_promt = prompt("Введите число от 1 до 7");
    if (user_promt >= 1 && user_promt <= 7) { alert(arr[user_promt - 1]) };
};

document.querySelector("#t05").onclick = function () {
    let user_promt = prompt('Выбирите одну из четерех операций: "/" "*" "+" "-"');
    if (user_promt == '/' || user_promt == "*" || user_promt == "+" || user_promt == "-") {
        let first_number = prompt("Введите первое число");
        if (!isNaN(parseFloat(first_number)) && isFinite(first_number)) {
            let two_number = prompt("Введите второе число");
            if (!isNaN(parseFloat(two_number)) && isFinite(two_number)) {
                if (user_promt == '/') { alert(first_number / two_number) };
                if (user_promt == '*') { alert(first_number * two_number) };
                if (user_promt == '+') { alert(first_number + two_number) };
                if (user_promt == '-') { alert(first_number - two_number) };
            };
        };
    };
};

document.querySelector("#t06").onclick = function () {
    let sex = prompt("Пол (м/ж)");
    if (sex == "м" || sex == "М" || sex == "ж" || sex == "Ж") {
        if (sex == "М") { sex = "м" };
        if (sex == "Ж") { sex = "ж" };
        let age = prompt("Возраст");
        if (!isNaN(parseFloat(age)) && isFinite(age)) {
            if (sex == "м") { if (age >= 65) { alert("Пора на пенсию") } else { alert("На пенсию рано") } };
            if (sex == "ж") { if (age >= 55) { alert("Пора на пенсию") } else { alert("На пенсию рано") } };
        };
    };
};

document.querySelector("#t07").onclick = function () {
    let user_temp = prompt("Температура");
    if (isnumber(user_temp)) {
        if (user_temp < 29.5) { alert("Труп") };
        if (user_temp >= 29.5 && user_temp < 36.6) { alert("Низкая") };
        if (user_temp == 36.6) { alert("Норма") };
        if (user_temp > 36.6 && user_temp <= 43.2) { alert("Высокая") };
        if (user_temp > 43.2) { alert("Труп") };
    };
};

document.querySelector("#t08").onclick = function () {
    let figure = prompt("1 - Треугольник\n2 - Прямоугольник");
    if (isnumber(figure) && figure == 1) {
        let a_side = prompt("side a");
        if (isnumber(a_side)) {
            let b_side = prompt("side b");
            if (isnumber(b_side)) {
                let c_side = prompt("side c");
                if (isnumber(c_side)) {
                    let p_abc = ((+a_side + +b_side + +c_side) / 2);
                    let s_abc = Math.sqrt((p_abc * (p_abc - a_side) * (p_abc - b_side) * (p_abc - c_side)));
                    alert("Площадь треугольника = " + s_abc + "\nПериметр треугольника = " + (+a_side + +b_side + +c_side));
                };
            };
        };
    };

    if (isnumber(figure) && figure == 2) {
        let a_side = prompt("ширина");
        if (isnumber(a_side)) {
            let b_side = prompt("длина");
            if (isnumber(b_side)) {
                let s_abc = (a_side * b_side);
                alert("Площадь прямоугольника = " + s_abc + "\nПериметр прямоугольника = " + 2 * (a_side * b_side))
            };
        };
    };
};

document.querySelector("#t09").onclick = function () {
    let birthday = prompt('дата рождения в формате дд-мм-гггг');
    if (isnumber(birthday)) {
        let date_dd = birthday.split("-")[0];
        let date_mm = birthday.split("-")[1];
        let date_yy = birthday.split("-")[2];
        let curr_date = new Date();
        let user_date = new Date(`${date_yy}-${date_mm}-${date_dd}T00:00:01`);
        let result = Math.floor((curr_date - user_date) / (1000 * 3600 * 24));
        alert("Прожито " + result + " д.");
    };
};

document.querySelector("#t10").onclick = function () {
    let amount = prompt('Количество');
    if (isnumber(amount)) {
        let price = prompt('Цена за шт');
        if (isnumber(price)) {
            buy_summ = amount * price;
            switch (true) {
                case (buy_summ >= 100 && buy_summ < 200):
                    alert(`Стоимость со скидкой в 3% = ${buy_summ - (buy_summ / 100 * 3)} грн`);
                    break;
                case (buy_summ >= 200 && buy_summ < 300):
                    alert(`Стоимость со скидкой в 5% = ${buy_summ - (buy_summ / 100 * 5)} грн`);
                    break;
                case (buy_summ >= 300):
                    alert(`Стоимость со скидкой в 7% = ${buy_summ - (buy_summ / 100 * 7)} грн`);
                    break;
                default:
                    alert(`Стоимость = ${buy_summ} грн`);
                    break;
            };
        };
    };
};

document.querySelector("#t11").onclick = function () {
    let num1 = prompt('Первое число');
    if (isnumber(num1)) {
        let num2 = prompt('Второе число');
        if (isnumber(num2)) {
            let num3 = prompt('Третье число');
            if (isnumber(num3)) {
                alert("Наибольшее = " + Math.max(num1, num2, num3));
            };
        };
    };
};