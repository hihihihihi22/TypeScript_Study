// Step03 Class / test05.ts

(function(){
    class Engine{}

    class Car{
        private engine:Engine
        constructor(engine:Engine){
            this.engine=engine
        }
        drive(){
            console.log("달려요")
        }
    }

    class MyCar extends Car{
        constructor(engine:Engine){
            super(engine)//부모생성자에 값을 전달하기
        }
        myDrive(){
            console.log("알아서 달려요!")
        }
    }

    const c1 = new MyCar(new Engine())
    c1.drive()
    c1.myDrive()

    //다형성확인
    const c2:MyCar = new MyCar(new Engine())
    //부모 type 으로 받아보기
    const c3:Car = c2
    //부모 type을 다시 자식 type으로 받아보기
    const c4:MyCar = c3 as MyCar //as 이용해서 casting 한다
})()