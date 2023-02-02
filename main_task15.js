
//15 Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:


let ladder = {
    step: 0,
    up: function () {
       this.step++;
	   return this;
    },
    down: function () {
       this.step--;
	   return this;
    },
    showStep: function () {
       alert(this.step);
	   return this;
    }
};

//ladder.up();
//ladder.up();
//ladder.down();
//ladder.showStep();
 
ladder.up().up().up().down().showStep().up().up().showStep();