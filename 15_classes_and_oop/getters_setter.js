class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(newEmail){
        this._email = newEmail
    }
    get password(){
        return this._password
}
set password(newPassword){
    this._password = newPassword

    }
}
const anshu= new User('anshu.ai','absc123')
console.log(anshu.password)
console.log(anshu.email)    