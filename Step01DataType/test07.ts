//test07.ts

/*
    function 도 data type이기 때문에 함수를 변수에 담을 수 있다.
    그러면 function type 을 담는 변수의 type 은 어떻게 선언해야하나..
*/

(function(){
    //함수를 만들어서
    function printMsg(msg:string):void{
        console.log(msg)
    }

    //변수에 담는다. f1의 type 은 infer 된다.
    let f1 = printMsg
    
    //(a:string)=>void 이런 type 으로 infer 된다.
    let f2:(a:string)=>void = printMsg//리턴값 없음

    f2("hi")

    function printSum(num1:number, num2:number):void{
        console.log(`${num1} + ${num2} = ${num1+num2}`)
    }

    //위의 printSum 이라는 함수를 f3 라는 변수에 담아 보세요. (type 도 명시해서!)
    let f3:(a1:number,a2:number)=>void = printSum
    
    //이름이 없는 익명의 함수를 만들어서 대입
    let f4 = function(){}
    // f5 의 type 을 명시한다면
    let f5:()=>void = function(){}

    //f6의 type 을 명시한다면?
    let f6:(a:number, b:string) =>string =  function(id:number, name:string){
        return "ok!"
    }

    //화살표 함수도 변수에 담을 수 있다.
    let f7 = (id:number, name:string)=>{
        return {id, name}
    }

    //f8의 type 을 명시한단면
    let f8:(a:number, b:string)=>object = (id:Number, name:String)=>{
        return {id, name}
    }
    

})()