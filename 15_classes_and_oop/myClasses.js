//ES 6
class User{
    constructor(username, email,password){
        this.email=email;
        this.password=password;
        this.username=username;
    }

    encryptPassword(){
        return `encrypted ${this.password}`;


}
changeUsername(){
   return `${this.username.toUpperCase()}`;
}
}

const chai=new User("Chai","chai@example","12345")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//Behind the scenes, the above code is similar to the following code using function constructors and prototypes:
function User(username, email,password){
    this.email=email;
    this.password=password;
    this.username=username;
}
User.prototype.encryptPassword=function(){
    return `encrypted ${this.password}`;
}
const tea=new User("Tea","chai@example","123")
console.log(tea.encryptPassword());
// console.log(tea.changeUsername());