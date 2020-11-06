var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: null,
      userPick: null,
      randPick: null,
      userScore: 0,
      computerScore: 0,
	  lc_userScore: 0,	
      lc_computerScore: 0,
      number: null,
      not_removed: true
    };
  }, 
  methods: {
  	
    choose: function (pick) {
      this.userPick = pick;
      const picks = ['rock', 'paper', 'scissors'];
      this.randPick = picks[Math.floor(Math.random() * picks.length)];
      this.setScore();
    },
    setScore: function () {
    	if ((this.randPick == 'paper' && this.userPick == 'rock') || (this.randPick == 'scissors' && this.userPick == 'paper') || (this.randPick == 'rock' && this.userPick == 'scissors')) {
	      this.message = 'Computer wins';
	      console.log('Computer wins');
	      this.computerScore++;
	      if ( this.number == this.computerScore ) { setTimeout( ()=>{ alert("You are lose in the game");this.userScore = 0; this.computerScore = 0; this.message = null; this.not_removed = true; this.userPick = null; this.randPick = null; this.number = null; }, 100 ) };
	    } else if ((this.randPick == 'scissors' && this.userPick == 'rock') || (this.randPick == 'paper' && this.userPick == 'scissors') || (this.randPick == 'rock' && this.userPick == 'paper')) {
	      console.log('User wins');
	      this.message = 'User wins';
	      this.userScore++;
	      if ( this.number == this.userScore ) { setTimeout( ()=>{ alert("You are win in the game");this.userScore = 0; this.computerScore = 0; this.message = null; this.not_removed = true; this.userPick = null; this.randPick = null;this.number = null; }, 100 ) };
	    } else {
	      console.log('Draw');
	      this.message = 'Draw';
	    }
    },
    remove_input: function() {
    	this.not_removed = false;
    },
  },
  computed: {
    computedUser: function () {
      return {
        // "fa-circle-o-notch fa-spin": this.userPick === null,
        "fa-hand-rock-o": this.userPick === "rock",
        "fa-hand-paper-o": this.userPick === "paper",
        "fa-hand-scissors-o": this.userPick === "scissors"
      };
    },
    computedRand: function () {
      return {
        // "fa-circle-o-notch fa-spin": this.randPick === null,
        "fa-hand-rock-o": this.randPick === "rock",
        "fa-hand-paper-o": this.randPick === "paper",
        "fa-hand-scissors-o": this.randPick === "scissors"
      };
    },
    
  },
});
