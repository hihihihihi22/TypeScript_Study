// test01.ts
/*
    실시간으로 compile 되게 하고 싶으면
    tsc -w
    로 실행한다.
*/

(function(){
    //number type
    let num:number = 1
    //string type
    let myName:string = "김구라"
    //boolean type
    let isMan:boolean=true

    console.log(`num:${num} myName:${myName} isMan:${isMan}`)
})()