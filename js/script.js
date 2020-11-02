var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: null,
      userPick: null,
      randPick: null,
      userScore: 0,
      computerScore: 0,
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
      if (this.userPick == 'rock') {
        if (this.randPick == 'paper') {
          this.message = 'Computer wins';
          console.log('Computer wins');
          this.computerScore++;
        } else if (this.randPick == 'scissors') {
          console.log('User wins');
          this.message = 'User wins';
          this.userScore++;
          this.lc_userScore = localStorage.userScore;
        } else {
          console.log('Draw');
          this.message = 'Draw';
        }
      } else if (this.userPick == 'paper') {
        if (this.randPick == 'rock') {
          console.log('User wins');
          this.message = 'User wins';
          this.userScore++;
        } else if (this.randPick == 'scissors') {
          console.log('Computer wins');
          this.message = 'Computer wins';
          this.computerScore++;
        } else {
          console.log('Draw');
          this.message = 'Draw';
        }
      } else {
        if (this.randPick == 'rock') {
          console.log('Computer wins');
          this.message = 'Computer wins';
          this.computerScore++;
        } else if (this.randPick == 'paper') {
          console.log('User wins');
          this.message = 'User wins';
          this.userScore++;
        } else {
          console.log('Draw');
          this.message = 'Draw';
        }
      }
    }
  },
  computed: {
    computedUser: function () {
      return {
        "fa-circle-o-notch fa-spin": this.userPick === null,
        "fa-hand-rock-o": this.userPick === "rock",
        "fa-hand-paper-o": this.userPick === "paper",
        "fa-hand-scissors-o": this.userPick === "scissors"
      };
    },
    computedRand: function () {
      return {
        "fa-circle-o-notch fa-spin": this.randPick === null,
        "fa-hand-rock-o": this.randPick === "rock",
        "fa-hand-paper-o": this.randPick === "paper",
        "fa-hand-scissors-o": this.randPick === "scissors"
      };
    }
  }
});
