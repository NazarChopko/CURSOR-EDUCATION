function hello(){
    console.log('Hello',this)
};

hello()


const person ={
    name:'Nazar',
    age:25,
    sayHello:hello,
    sayHelloWindow:hello.bind(window),
    logInfo:function(job){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
    }
}

const lena ={
    name:'Lena',
    age:23
}

     //person.logInfo.bind(lena,'pornostar')();
    //person.logInfo.call(lena,'terapevt')
    person.logInfo.apply(lena,['photographer'])

     ////=====================================

     const array = [1,2,3,4,5]

     Array.prototype.multBy = function(n){
         console.log('Nazar',this)
     }

     array.multBy(2)