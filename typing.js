if (self.name != 'reload') {
         self.name = 'reload';
         self.location.reload(true);
     }
else self.name = ''; 

$(function(){
  var tag = document.querySelector(".typing1");
  var app = new Hakademy.util.typing(tag, {
      text:[
          "Noh Jun Young"
      ],
      color:{
          apply:false
      },
      appear:{
        startDelay:0,
        processDelay:0.05,
        finishDelay:1,
    },
    exit:{
        startDelay:100000,
        processDelay:0.1,
        finishDelay:1,
    },
      
  });
});

$(function(){
    var tag = document.querySelector(".typing2");
    var app = new Hakademy.util.typing(tag, {
        text:[
            "Hacker and Software Engineer"
        ],
        color:{
            apply:false
        },
        appear:{
          startDelay:1.1,
          processDelay:0.03,
          finishDelay:10,
      },
      exit:{
        startDelay:100000,
        processDelay:0.1,
        finishDelay:1,
    },
        
    });
  });

  $(function(){
    var tag = document.querySelector(".typing3");
    var app = new Hakademy.util.typing(tag, {
        text:[
            "Kookmin Univ. Information Security Cryptography"
        ],
        color:{
            apply:false
        },
        appear:{
          startDelay:2.5,
          processDelay:0.03,
          finishDelay:5,
      },
      exit:{
        startDelay:100000,
        processDelay:0.1,
        finishDelay:1,
    },

    });
  });
