class Person{
    constructor(name,job,age){
      this.name:"Somesh"
      this.job:"Apprentice"
      this.age:19
    }
    exercise(){
      console.log(`${this.name} is running,`)
    }
    fetchJob(){
      console.log(`${this.name} is a ${this.job}`)
    }
  }
  class Programer extends Person{
    constructor(name,job,age,languages){
   this.super(name, job, age);
    this.languages:[languages]
    this.busy= true
    };
    completeTask(){
    this.busy=false
    }
    acceptNewTask(){
      this.busy=true
    }
    offerNewTask(){
      if(this.busy==true){
        console.log(`${this.name} is busy and cannot accept new tasks.`)
      }else{
        console.log(`${this.name} is not busy and will accepts new tasks`)
      }
    }
    learnLanguage(language){
      this.languages.push(language)
                          
      console.log(`${this.name} learned a new language. ${this.language}`)
    }
    listLanguages(){
     console.log(`${this.name} knows the following languages: ${this.languages.toString()}.`) 
    }
    }
    const reem= new Programmer("Dixit", "janitor", 12, "c++")