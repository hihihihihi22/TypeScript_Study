// Step03 Class /test04.ts

(function(){
    
    class Phone{
        call(){
            console.log("전화를 걸어요")
        }
    }

    //extends 예약어를 이용해서 상속을 받을 수 있다.
    class HandPhone extends Phone{
        mobileCall(){
            console.log("이동중에 전화를 걸어요!")
        }
        takePicture(){
            console.log("30만 화소의 사진을 찍어요!")
        }
    }
    
    const p1 = new Phone()
    const p2 = new HandPhone()
    p1.call()
    //p2는 HandPhone type 이기 때문에 2개의 메소드 모두 호출가능
    p2.call()
    p2.mobileCall()
    p2.takePicture()

    class SmartPhone extends HandPhone{
        doInternet(){
            console.log("인터넷을 해요!")
        }
        //HandPhone 클래스에 정의된 메소드 오버라이드(재정의)
        takePicture(): void {
            //재정의 했지만 부모의 메소드도 호출하고 싶으면 super. 해서 호출할 수 있다.
            super.mobileCall()
            console.log("1억 화소의 사진을 찍어요")
        }
    }

    const p3 = new SmartPhone()
    p3.doInternet()
    p3.takePicture()

})()