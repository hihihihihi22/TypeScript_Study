//test05.ts

/* 
    [ any type ]
    - java 의 Object 와 비슷한 type
    - any type 을 남발하면 typeScript 의 장점이 사라진다.
    - 경우에 따라 사용 못하도록 설정할 수도 있다.
*/

(function(){
    let anything : any

    anything = 10
    anything ="kim"
    anything = true
    
    //json 문자열을 파싱하면 any type  이 리턴된다.
    let json:string = `
        {
            "num":1,
            "name":"김구라",
            "isMan":true
        }
    `
    let result :any = JSON.parse(json)
})()