class User{
    constructor(username)
    {
        this.username=username;
    }
    logMe()
    {
        console.log("Username is",this.username)
    }
}

class teacher extends User{
    constructor(username,email,password)
    {
           super(username)
        this.email=email;
        this.password=password;
     
    }
    addcourse()
{
    console.log(`Course added by ${this.username}  `)
}
}


const ans=new teacher("Chai","chai@example","12345")
ans.addcourse();
const ans2=new User("Tea")
//ans2.addcourse(); // This will throw an error because the User class does not have the addcourse method.
ans2.logMe(); // This will work because the User class has the logMe method.
console.log(ans instanceof teacher); // true
console.log(ans instanceof User); // true
console.log(ans2 instanceof teacher); // false
console.log(ans2 instanceof User); // true  