//test02.ts

/* 
    object type 은 javascript 의 기본 dataType 을 제외한 모든 type 을 담을 수 있다.
    number, string, boolean, null, undefined 등등 이 기본 dataType 이다.
*/

(function(){
    let mem : object
    //object type 에 우리가 알고있는 object 를 대입할 수 있다.
    mem = {
        num:1,
        name:"김구라",
        addr:"노량진"
    }

    let arr : object
    //object type 에 배열도 대입할 수 있다.
    arr=[]

    let action : object
    //object type 에 함수도 대입할 수 있다.
    action = function(){}

})()