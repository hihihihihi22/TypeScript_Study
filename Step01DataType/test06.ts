//test06.ts

/* 
    [ function type ]

    함수 만드는 방법

    function 함수명(매개변수명:type, 매개변수명2:type, ...):리턴type{
    
    }
*/

(function(){
    //number type 2개를 전달받아서 number type을 리턴해주는 함수
    function sum(num1:number, num2:number):number{
        return num1+num2
    }

    //string type 1개를 전달받고 어떤 데이터도 리턴해주지 않는 함수
    function printMsg(msg:string):void{
        console.log(msg)
    }

    //return type 을 명시하지 않으면 return type 을 infer 한다.
    function getMsg(){ 
        return "hello"
    }

    //result 는 string type 으로 infer 된다.
    let result:string = getMsg()
    //다른 type 대입불가
    // result = 10

})()