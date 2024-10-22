//test08.ts

/* 
    type 별칭 부여하기

    type 별칭 = type
*/

(function(){
    //string type 을 Name type 으로 사용하겠다.
    type Name=string

    const firstName:Name = "kim"
    const lastName:Name = "gura"

    /* 
        num, name, addr 이라는 key 값을 가지고 있는 object type 을 정의하고
        그 type 을 MemberDto 라는 이름으로 사용하겠다.
    */
    
    type MemberDto = {
        num:number
        name:string
        addr:string
    }

    const m1:MemberDto = {
        num:1,
        name:"kim",
        addr:"노량진"
    }
    
    const m2:MemberDto = {
        num:2,
        name:"lee",
        addr:"행신동"
    }

    //number 와 string 의 합집합(Union) type
    type NumString = number | string

    //NumString type 에는 숫자, 문자 모두 담을 수 있다.
    let data : NumString = 1
    data = "kim"
    data = 999

    //name 과 age 를 담을수 있는 PErson type
    type Person = {
        name:string
        age:number
    }

    //phone과 email 을 담을수있는 Contact type    
    type Contact = {
        phone:string
        email?:string //?선택적
    }

    //Person 과 Contact 의 교집합 type 
    type PersonInfo = Person & Contact

    const p1 : PersonInfo = {
        name:"kim",
        age:50,
        phone:"010"
        // ,email:"aa@a.a"
    }

    const p2 : Person & Contact = p1

    let aaa : number | string | boolean = 1
    aaa = "xxx"
    aaa = "true"

})()