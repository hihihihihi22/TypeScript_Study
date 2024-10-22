//Step04GenericType / test01.ts

(function(){
    
    //generic type 하나를 전달받는 함수
    function getData<T>(item:T):T{
        return item
    }

    //generic 선언하는 위치 확인
    const getData2 = function<T>(item:T){
        return item
    }

    //generic 선언하는 위치확인
    const getData3 = <T>(item:T)=>{
        return item
    }

    const result:number = getData<number>(999)
    const result2:string = getData<string>("kim")
})()