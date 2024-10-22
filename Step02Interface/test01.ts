//Step02Interface/test01.ts

/* 

*/

(function(){
    //type  별칭으로 작서앟면 object 의 모양을 interface 로 만들수도 있다.
    type MyType = {
        num:number
        name:string
        isMan:boolean        
    }

    //object 의 모양을 정의하는 느낌으로 작성하면 된다.
    
    interface Member{
        num:number
        name:string
        isMan:boolean
    }

    // interface 도 type이다.
    let m1 : Member = {
        num:1,
        name:"kim",
        isMan:true
    }

    interface Person{
        firstname:string
        lastname:string
        email?:string //?를 붙이면 optional 이다.
    }

    let p1 : Person = {
        firstname:"kim",
        lastname:"gura",
        email:"aaa@"
    }

    let p2 : Person = {
        firstname:"park",
        lastname:"misun"
    }

    //readonly property 도 설정할 수 있다.
    interface Todo{
        readonly id:number,
        content:string
    }

    const t1 :Todo= {
        id:1,
        content:"공부하기"
    }

    //readonly 가 아니기 때문에 수정가능
    t1.content = "잠자기"

    // readonly 는 읽기전용이기 때문에 수정불가
    // t1.id = 2


    
})()