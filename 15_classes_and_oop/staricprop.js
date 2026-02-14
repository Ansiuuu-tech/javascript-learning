class user{
    constructor(username)
    {
        this.username=username;
    }

    logMe()
    {
        console.log("Username is",this.username)
    }

   static createId()
    {
        return '123'
    }
}

const anshu=new user("Anshu")
//console.log(anshu.createId());

class teacher extends user{
    constructor(username,email)
    {
        super(username);
        this.email=email;
    }
}

const ans=new teacher("Chai","chai@example")
ans.logMe();