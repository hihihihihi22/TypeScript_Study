//Step03 Class / test03.ts

/* */

(function(){
    //static 필드와 메소드 정의가능
    class MyUtil{
        static version:string = "1.0"

        //static 초기화 블럭도 있다. 클래스가 최초 사용될 때 한번만 실행되는 블럭
        static{
            console.log("static 초기화 블럭수행됨!")
            MyUtil.version = "2.0"
        }

        static doSomething(){
            console.log("무언가를 작업해요")
        }
    }

    //static 필드와 메소드는 클래스명에 . 찍어서 사용할 수 있다.
    console.log(MyUtil.version)
    MyUtil.doSomething()

})()