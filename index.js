// code solution here
class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

  veto() {
    return "NO!"
  }

  passBill() {
    return "You can do that!"
  }

  doCharity() {
    return "I like to help people."
  }

  conductPressInterview(){
    return "I am proud to be an American."
  }

  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
  }
}

// constructor(name, politicalParty, yearsInOffice, homeState)
var georgie = new President('George Washington', "Wig", 16, "Virginia");
var abe = new President('Abraham Lincoln', "Gangsta", 3, "New York");
var dick = new President('Richard Nixon', "Corrupt", 5, "Alabama");
var jimmy = new President('Jimmy Carter', "Whig", 7, "Ohio");