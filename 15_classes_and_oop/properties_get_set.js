function User(email, password) {
    this.email = email;
    this.password = password;

Object.defineProperty(this,"email",{
    get: function(){
        return this._email.toUpperCase()
    },
    set: function(newEmail){
        this._email = newEmail
    }
})

}

const anshu= new User('anshu.ai','absc123')
console.log(anshu.password) // absc123
console.log(anshu.email) // ANSHU.AI