const user={
    username: "Anshu",
    logincount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`username: ${this.username}`)
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getUserDetails())
// console.log(this)

function User(username,logincount,isloggedin){
this.username=username
this.logincount=logincount
this.isloggedin=isloggedin

//return this
}

const userone=new  User('anshu',8,true)
const usertwo=new User('Ansiuuu',10,false)
console.log(userone.constructor)
//console.log(usertwo)