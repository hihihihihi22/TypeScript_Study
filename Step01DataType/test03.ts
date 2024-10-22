//test03.ts

/* 
    [ array type ]

    데이터 type[] 형식으로 만들 수 있다.

    number[], string[], boolean[], object[] ...
*/

(function(){
    //number 배열
    let nums:number[] = [10,20,30]
    //string 배열
    let names:string[] = ["kim", "lee", "park"]

    nums.push(40)
    // nums.push("kim") type이 맞지 않아서 에러가 난다
    
    names.push("kim")
    // names.push(40) type이 맞지 않아서 에러가 난다.

    let num0 = nums[0] //nums때문에 num0 type 확정
    //숫자는 대입가능 하지만
    num0 = 99
    //다른 type 은 대입할 수 없다.
    // num0 = "kim"

    //혼합 (union) 배열
    let anything : (number | string)[]
    anything = [10, "kim", "park", 20]

})()