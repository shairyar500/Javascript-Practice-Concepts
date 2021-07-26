//The this Keyword ..............................................................................................................
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    city: 'karachi',
    provideInfo() { 
      return `I am ${this.model} and my current energy level is ${this.energyLevel} manufactured in ${city}.`
    },
};
  console.log(robot.provideInfo());

//Arrow Functions and this ......................................................................................................
const roboot = {
    energyLevel: 100,
    checkEnergy(){
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  roboot.checkEnergy();

//Privacy ........................................................................................................................
const rrobot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  rrobot._energyLevel = "high";
  rrobot.recharge();

//Getters ........................................................................................................................
