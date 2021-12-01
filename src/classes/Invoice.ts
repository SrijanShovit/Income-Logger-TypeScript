export class Invoice{
    //using access specifier we can define the class varibales directly inside constructor
  
      constructor(
          readonly client : string,
          private details : string,
          public amount : number
      ){ }
  
      format(){
          return `${this.client} owes ${this.amount} for ${this.details}`
      }
  }