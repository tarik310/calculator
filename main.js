/*### Theme 1*/
/*## Backgrounds*/
var body_background_1 = "hsl(222, 26%, 31%)"
var toggle_keypad_background_1 = "hsl(223, 31%, 20%)"
var screen_background_1 = "hsl(224, 36%, 15%)"
/*#### Keys*/
var reset_del_background_1 = "hsl(225, 21%, 49%)"
var reset_del_shadow_1 = "hsl(224, 28%, 35%)"
var equal_switch_background_1 = "hsl(6, 63%, 50%)"
var equal_shadow_1 = "hsl(6, 70%, 34%)"
var keys_background_1 = "hsl(30, 25%, 89%)"
var keys_shadow_1 = "hsl(28, 16%, 65%)"
/*#### Text*/
var text_1 = "hsl(221, 14%, 31%)"
var text_White_1 = "hsl(0, 0%, 100%)"

/*### Theme 2*/
/*## Backgrounds*/
var body_background_2 = "hsl(0, 0%, 90%)"
var toggle_keypad_background_2 = "hsl(0, 5%, 81%)"
var screen_background_2 = "hsl(0, 0%, 93%)"
/*#### Keys*/
var reset_del_background_2 = "hsl(185, 42%, 37%)"
var reset_del_shadow_2 = "hsl(185, 58%, 25%)"
var equal_switch_background_2 = "hsl(25, 98%, 40%)"
var equal_shadow_2 = "hsl(25, 99%, 27%)"
var keys_background_2 = "hsl(45, 7%, 89%)"
var keys_shadow_2 = "hsl(35, 11%, 61%)"
/*#### Text*/
var text_2 = "hsl(60, 10%, 19%)"
var text_White_2 = "hsl(0, 0%, 100%)"

/*##Theme 3*/
/*Backgrounds*/
var body_background_3 = "hsl(268, 75%, 9%)"
var toggle_keypad_background_3 = "hsl(268, 71%, 12%)"
/*#### Keys*/
var reset_del_background_3 = "hsl(281, 89%, 26%)"
var reset_del_shadow_3 = "hsl(285, 91%, 52%)"
var equal_switch_background_3 = "hsl(176, 100%, 44%)"
var equal_shadow_3 = "hsl(177, 92%, 70%)"
var keys_background_3 = "hsl(268, 47%, 21%)"
var keys_shadow_3 = "hsl(290, 70%, 36%)"
/*#### Text*/
var text_3 = "hsl(52, 100%, 62%)"
var text_blue_3 = "hsl(198, 20%, 13%)"
var text_White_3 = "hsl(0, 0%, 100%)"
/********************************************************************************************/
var switch_holders = document.querySelectorAll(".switch_holders")
var keys = document.querySelectorAll(".keys")
var switcher = document.getElementById("switcher")
var theme = 1

keys.forEach(key => {
    key.addEventListener("mousedown", function() {
      this.style.top = "4px";
      this.style.boxShadow = `0px 0px ${keys_shadow_1}`
      

    })
  
    key.addEventListener("mouseup", function() {
      this.style.top = "0";
      this.style.boxShadow = `0px 4px ${keys_shadow_1}`
      
    })
  })
document.getElementById("reset").addEventListener("mousedown", function(){
    this.style.boxShadow = `0px 0px ${reset_del_shadow_1}`
})
document.getElementById("reset").addEventListener("mouseup", function(){
    this.style.boxShadow = `0px 4px ${reset_del_shadow_1}`
})

document.getElementById("del").addEventListener("mousedown", function(){
    this.style.boxShadow = `0px 0px ${reset_del_shadow_1}`
})
document.getElementById("del").addEventListener("mouseup", function(){
    this.style.boxShadow = `0px 4px ${reset_del_shadow_1}`
})

document.getElementById("equal").addEventListener("mousedown", function(){
    this.style.boxShadow = `0px 0px ${equal_shadow_1}`
})
document.getElementById("equal").addEventListener("mouseup", function(){
    this.style.boxShadow = `0px 4px ${equal_shadow_1}`
})


switch_holders[0].onclick = function(){
    
    document.body.style.backgroundColor = `${body_background_1}`
    document.getElementById("head").style = `color${text_White_1}`
    document.getElementById("toggle").style = `background-color: ${toggle_keypad_background_1}`
    document.getElementById("switcher").style = `background-color: ${equal_switch_background_1}`
    document.getElementById("screen").style = `background-color: ${screen_background_1};color: ${text_White_1}`
    document.getElementById("screen_input").style = `background-color: ${screen_background_1};color: ${text_White_1}`
    document.getElementById("cross").style.backgroundColor = `${text_White_1}`
    document.getElementById("keypad").style = `background-color: ${toggle_keypad_background_1}`
    for(var i = 0;i<keys.length;i++){
        keys[i].style = `background-color: ${keys_background_1}; box-shadow: 0px 4px ${keys_shadow_1};color:${text_1}`
    }
    document.getElementById("reset").style = `background-color: ${reset_del_background_1}; box-shadow: 0px 4px ${reset_del_shadow_1};color:${text_White_1}`
    document.getElementById("del").style = `background-color: ${reset_del_background_1}; box-shadow: 0px 4px ${reset_del_shadow_1};color:${text_White_1}`
    document.getElementById("equal").style = `background-color: ${equal_switch_background_1}; box-shadow: 0px 4px ${equal_shadow_1};color:${text_White_1}`
    for(var i =0;i<switch_holders.length;i++){
        switch_holders[i].style = `background-color: ${toggle_keypad_background_1}`
    }
    
    if(theme == 2 || theme == 3){
        switcher.style = `left:5px`
    }
    theme = 1

    keys.forEach(key => {
        key.addEventListener("mousedown", function() {
          this.style.top = "4px";
          this.style.boxShadow = `0px 0px ${keys_shadow_1}`
          
    
        })
      
        key.addEventListener("mouseup", function() {
          this.style.top = "0";
          this.style.boxShadow = `0px 4px ${keys_shadow_1}`
          
        })
      })
    document.getElementById("reset").addEventListener("mousedown", function(){
        this.style.boxShadow = `0px 0px ${reset_del_shadow_1}`
    })
    document.getElementById("reset").addEventListener("mouseup", function(){
        this.style.boxShadow = `0px 4px ${reset_del_shadow_1}`
    })
    
    document.getElementById("del").addEventListener("mousedown", function(){
        this.style.boxShadow = `0px 0px ${reset_del_shadow_1}`
    })
    document.getElementById("del").addEventListener("mouseup", function(){
        this.style.boxShadow = `0px 4px ${reset_del_shadow_1}`
    })
    
    document.getElementById("equal").addEventListener("mousedown", function(){
        this.style.boxShadow = `0px 0px ${equal_shadow_1}`
    })
    document.getElementById("equal").addEventListener("mouseup", function(){
        this.style.boxShadow = `0px 4px ${equal_shadow_1}`
    })


}

switch_holders[1].onclick = function(){
    document.body.style.backgroundColor = `${body_background_2}`
    document.getElementById("head").style = `color: ${text_2}`
    document.getElementById("toggle").style = `background-color: ${toggle_keypad_background_2}`
    document.getElementById("switcher").style = `background-color: ${equal_switch_background_2}`
    document.getElementById("screen").style = `background-color: ${screen_background_2};color: ${text_2}`
    document.getElementById("screen_input").style = `background-color: ${screen_background_2};color: ${text_2}`
    document.getElementById("cross").style.backgroundColor = `${text_2}`
    document.getElementById("keypad").style = `background-color: ${toggle_keypad_background_2}`
    for(var i = 0;i<keys.length;i++){
        keys[i].style = `background-color: ${keys_background_2}; box-shadow: 0px 4px ${keys_shadow_2};color:${text_2}`
    }
    document.getElementById("reset").style = `background-color: ${reset_del_background_2}; box-shadow: 0px 4px ${reset_del_shadow_2};color:${text_White_2}`
    document.getElementById("del").style = `background-color: ${reset_del_background_2}; box-shadow: 0px 4px ${reset_del_shadow_2};color:${text_White_2}`
    document.getElementById("equal").style = `background-color: ${equal_switch_background_2}; box-shadow: 0px 4px ${equal_shadow_2};color:${text_White_2}`
    for(var i =0;i<switch_holders.length;i++){
        switch_holders[i].style = `background-color: ${toggle_keypad_background_2}`
    }
    
    if(theme == 1 || theme == 3 ){
        switcher.style = `left:27px`
    }
    theme = 2


    keys.forEach(key => {
        key.addEventListener("mousedown", function() {
          this.style.top = "4px";
          this.style.boxShadow = `0px 0px ${keys_shadow_2}`
          
    
        })
      
        key.addEventListener("mouseup", function() {
          this.style.top = "0";
          this.style.boxShadow = `0px 4px ${keys_shadow_2}`
          
        })
      })
    document.getElementById("reset").addEventListener("mousedown", function(){
        this.style.boxShadow = `0px 0px ${reset_del_shadow_2}`
    })
    document.getElementById("reset").addEventListener("mouseup", function(){
        this.style.boxShadow = `0px 4px ${reset_del_shadow_2}`
    })
    
    document.getElementById("del").addEventListener("mousedown", function(){
        this.style.boxShadow = `0px 0px ${reset_del_shadow_2}`
    })
    document.getElementById("del").addEventListener("mouseup", function(){
        this.style.boxShadow = `0px 4px ${reset_del_shadow_2}`
    })
    
    document.getElementById("equal").addEventListener("mousedown", function(){
        this.style.boxShadow = `0px 0px ${equal_shadow_2}`
    })
    document.getElementById("equal").addEventListener("mouseup", function(){
        this.style.boxShadow = `0px 4px ${equal_shadow_2}`
    })
}

switch_holders[2].onclick = function(){
    document.body.style.backgroundColor = `${body_background_3}`
    document.getElementById("head").style = `color: ${text_3}`
    document.getElementById("toggle").style = `background-color: ${toggle_keypad_background_3}`
    document.getElementById("screen").style = `background-color: ${toggle_keypad_background_3};color: ${text_3}`
    document.getElementById("screen_input").style = `background-color: ${toggle_keypad_background_3};color: ${text_3}`
    document.getElementById("keypad").style = `background-color: ${toggle_keypad_background_3}`
    document.getElementById("cross").style.backgroundColor = `${text_3}`
    for(var i = 0;i<keys.length;i++){
        keys[i].style = `background-color: ${keys_background_3}; box-shadow: 0px 4px ${keys_shadow_3};color:${text_3}`
    }
    document.getElementById("reset").style = `background-color: ${reset_del_background_3}; box-shadow: 0px 4px ${reset_del_shadow_3};color:${text_White_3}`
    document.getElementById("del").style = `background-color: ${reset_del_background_3}; box-shadow: 0px 4px ${reset_del_shadow_3};color:${text_White_3}`
    document.getElementById("equal").style = `background-color: ${equal_switch_background_3}; box-shadow: 0px 4px ${equal_shadow_3};color:${text_blue_3}`
    
    for(var i =0;i<switch_holders.length;i++){
        switch_holders[i].style = `background-color: ${toggle_keypad_background_3}`
    }

    if(theme == 1 || theme == 2){
        switcher.style = `left:49px;background-color: ${equal_switch_background_3}`
    }
    
    theme = 3


    keys.forEach(key => {
        key.addEventListener("mousedown", function() {
          this.style.top = "4px";
          this.style.boxShadow = `0px 0px ${keys_shadow_3}`
          
    
        })
      
        key.addEventListener("mouseup", function() {
          this.style.top = "0";
          this.style.boxShadow = `0px 4px ${keys_shadow_3}`
          
        })
      })
    document.getElementById("reset").addEventListener("mousedown", function(){
        this.style.boxShadow = `0px 0px ${reset_del_shadow_3}`
    })
    document.getElementById("reset").addEventListener("mouseup", function(){
        this.style.boxShadow = `0px 4px ${reset_del_shadow_3}`
    })
    
    document.getElementById("del").addEventListener("mousedown", function(){
        this.style.boxShadow = `0px 0px ${reset_del_shadow_3}`
    })
    document.getElementById("del").addEventListener("mouseup", function(){
        this.style.boxShadow = `0px 4px ${reset_del_shadow_3}`
    })
    
    document.getElementById("equal").addEventListener("mousedown", function(){
        this.style.boxShadow = `0px 0px ${equal_shadow_3}`
    })
    document.getElementById("equal").addEventListener("mouseup", function(){
        this.style.boxShadow = `0px 4px ${equal_shadow_3}`
    })
}



var screen_input = document.getElementById("screen_input")

function enable_cross(){
  let len = screen_input.value.length
  if (len < 16){
    document.getElementById("cross").style.display = "none"
  }
  else{
    document.getElementById("cross").style.display = "block"
  }
}
enable_cross()

screen_input.onkeydown = function(){enable_cross()} 

screen_input.addEventListener("input", function(event) {
  // Regular expression that matches special characters
  var pattern = /[^0-9\.\+\-\x\/]/;

  // Check if the input value contains any special characters
  if (pattern.test(event.target.value)) {
    // Remove the special character(s) from the input value
    event.target.value = event.target.value.replace(pattern, "");
  }
});





/*document.addEventListener("click", function() {
  screen_input.focus();
});*/




keys[0].addEventListener("click", function() {
    screen_input.value += "7";
    screen_input.focus();
    enable_cross();
  });
keys[1].addEventListener("click", function() {
    screen_input.value += "8";
    screen_input.focus();
    enable_cross()

  });
keys[2].addEventListener("click", function() {
    screen_input.value += "9";
    screen_input.focus();
    enable_cross()
  });
keys[3].addEventListener("click", function() {
  screen_input.value = screen_input.value.substring(0, screen_input.value.length - 1);
  screen_input.focus()
  enable_cross()
  });
keys[4].addEventListener("click", function() {
    screen_input.value += "4";
    screen_input.focus();
    enable_cross()
  });
  keys[5].addEventListener("click", function() {
    screen_input.value += "5";
    screen_input.focus();
    enable_cross()
  });
keys[6].addEventListener("click", function() {
    screen_input.value += "6";
    screen_input.focus();
    enable_cross()
  });
keys[7].addEventListener("click", function() {
    screen_input.value += "+";
    screen_input.focus();
    enable_cross()
  });
keys[8].addEventListener("click", function() {
    screen_input.value += "1";
    screen_input.focus();
    enable_cross()
  });
keys[9].addEventListener("click", function() {
    screen_input.value += "2";
    screen_input.focus();
    enable_cross()
  });
keys[10].addEventListener("click", function() {
    screen_input.value += "3";
    screen_input.focus();
    enable_cross()
  });
keys[11].addEventListener("click", function() {
    screen_input.value += "-";
    screen_input.focus();
    enable_cross()
  });
keys[12].addEventListener("click", function() {
    screen_input.value += ".";
    screen_input.focus();
    enable_cross()
  });
keys[13].addEventListener("click", function() {
    screen_input.value += "0";
    screen_input.focus();
    enable_cross()
  });
keys[14].addEventListener("click", function() {
    screen_input.value += "/";
    screen_input.focus();
    enable_cross()
  });
keys[15].addEventListener("click", function() {
    screen_input.value += "x";
    screen_input.focus();
    enable_cross();
  });

keys[16].addEventListener("click", function() {
    screen_input.value = "";
    screen_input.focus();
    enable_cross()
  });
  var num = 123456789
  var formatt = new Intl.NumberFormat("en-us")
  console.log(formatt.format(num))
keys[17].addEventListener("click", function() {
  if(screen_input.value.includes("x")){
    screen_input.value = screen_input.value.replace(/x/g, "*");
  }
  try{
    if(eval(screen_input.value) == undefined){
      screen_input.value = ""}
      else{
        screen_input.value =formatt.format(eval(screen_input.value)) 
      }
  }
  catch (err){
    screen_input.value = "Syntax Error"
  }
  screen_input.focus();
  enable_cross();
})