"use strict";
//Step03 Class / test01.ts
/* */
(function () {
    //클래스
    class Car {
        //생성자
        constructor(name) {
            //필드
            this.name = ""; //초기화를 반드시 하거나 혹은 생성자에서 값을 넣어주는 코드가 있어야한다.
            this.name = name;
        }
        //메소드
        drive() {
            console.log(this.name + "이 달려요!");
        }
    }
    const c1 = new Car("소나타");
    const c2 = new Car("아반떼");
    c1.drive();
    c2.drive();
    //참고로 알기
    //c1 객체가 가지고 있는 drive 라는 함수를 f1 에 담기
    const f1 = c1.drive;
    //호출하면 뭐가 달릴까
    f1();
})();
