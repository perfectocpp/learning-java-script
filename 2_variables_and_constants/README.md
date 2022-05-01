## JavaScript Declare Variables
* In JavaScript, we use either var or let keyword to declare variables. For example,
```
    var x;
    let y;
```
* Here, x and y are variables.

## let, const, var

### let
dasturimiz ishlash davomida o'zgarishi mumkin bo'lgan o'zgaruvchilarni e'lon qilish uchun foydalaniladi
```
    let age = 23;
    age = 24;
```

### const
dasturimiz ishlash davomida o'zgarmaydigan o'zgaruvchilarni e'lon qilish uchun foydalaniladi

*const* - key wordi bilan elon qiliniga idf lar doim boshlang'ish qiymatga ega bo'lishi kerak
```
    const a = 5;
```
### var
ES6 ga qadar o'zgaruvchilarni e'lon qilish uchun ishlatilgan kalit so'z. let bilan deyarli bir-hil ish bajargan 

### let va var
 let va var o'zxshash bo'lishiga qaramasdan ma'lum bir farqi mavjud

 var yordamida e'lon qilingan o'zgaruvchi ko'rinish ko'lami (scope) funksiya darajasida bo'ladi

 ### strict mode
 strict mode yordamida yozayotgan ko'dimizda xatolardan qochish imkoniyati mavjud
 'use strict'