 function proper_position() {
     dwarf = document.getElementById("dwarfid");   
     head = document.getElementById("headid");
     beard = document.getElementById("beardid");
     shirt = document.getElementById("shirtid");
     trousers = document.getElementById("trousersid");
     shoes = document.getElementById("shoesid");
     weapon = document.getElementById("weapon");
     fire = document.getElementById("fireid");
     tup_tup = document.getElementById("tup_tupid");
    dwarf.style.top = 'auto';
    dwarf.style.bottom = '100px';
    head.style.top = 'auto';
    head.style.bottom = '320px';
    beard.style.top = 'auto';
    beard.style.bottom = '260px';
    shirt.style.top = 'auto';
    shirt.style.bottom = '190px';
    trousers.style.top = 'auto';
    trousers.style.bottom = '130px';
    shoes.style.top = 'auto';
    shoes.style.bottom = '100px';
    tup_tup.style.top = 'auto';
    tup_tup.style.bottom = '100px';
    if (weapon.classList.contains('minigun_2')) {
      weapon.style.top = 'auto';
      weapon.style.bottom = '100px';
    } else {
      weapon.style.top = 'auto';
      weapon.style.bottom = '190px';
    }
    fire.style.top = 'auto';
    fire.style.bottom = '15px';
    }
  
    speedometer = 3;
      
    var shooting = new Audio('minigun2.mp3');
    var flameing = new Audio('flame2.mp3');
    var jumping = new Audio('hop.mp3');
    var dieing = new Audio('life_lost.mp3');
    

    function interval(func, wait, times){
      var interv = function(w, t){
          return function(){
              if(typeof t === "undefined" || t-- > 0){
                  setTimeout(interv, w);
                  try{
                      func.call(null);
                  }
                  catch(e){
                      t = 0;
                      throw e.toString();
                  }
              }
          };
      }(wait, times);
    setTimeout(interv, wait);
  }; 

  life3 = document.getElementById('life3id');
  life2 = document.getElementById('life2id');
  life = document.getElementById('lifeid');

  fire_index = 0;

  const game_over_back = document.createElement('div');
    game_over_back.classList.add('game_over_back');
  const game_over = document.createElement('div');
    game_over.classList.add('game_over');
  const play_again = document.createElement('div');
    play_again.classList.add('play_again');

  function looser() {
    document.body.appendChild(game_over);
    document.body.appendChild(game_over_back);
    document.body.appendChild(play_again);
  }

  function faint() {
    dwarf = document.getElementById("dwarfid");   
    head = document.getElementById("headid");
    beard = document.getElementById("beardid");
    shirt = document.getElementById("shirtid");
    trousers = document.getElementById("trousersid");
    shoes = document.getElementById("shoesid");
    weapon = document.getElementById("weapon");
    fire = document.getElementById("fireid");
    tup_tup = document.getElementById("tup_tupid");

    interval(function () {
      dwarf.style.opacity = '0.5';
      head.style.opacity = '0.5';
      beard.style.opacity = '0.5';
      shirt.style.opacity = '0.5';
      weapon.style.opacity = '0.5';
      trousers.style.opacity = '0.5';
      shoes.style.opacity = '0.5';
      fire.style.opacity = '0.5';
      tup_tup.style.opacity = '0.5';
      setTimeout(function () {
        dwarf.style.opacity = '1';
        head.style.opacity = '1';
        beard.style.opacity = '1';
        shirt.style.opacity = '1';
        weapon.style.opacity = '1';
        trousers.style.opacity = '1';
        shoes.style.opacity = '1';
        fire.style.opacity = '1';
        tup_tup.style.opacity = '1';
      }, 150)
    }, 300, 3);
  }

  const score = document.createElement('div');

  score.classList.add('score_font');
  score.id = "scoreid"
  points = 0;
  
  idk = 0;
  function add_point() {
    score.classList.add('added_point');
    if (idk == 0) {
      points += 1;
      idk += 1;
      setTimeout(function (){
        idk -= 1;
      },1200);
    } else {
      console.log(idk);
    }
    setTimeout(function () {
      score.classList.remove('added_point');
    }, 1200)
  }
  function take_point() {
    score.classList.add('taken_point');
    if (idk == 0) {
      points -= 1;
      idk += 1;
      setTimeout(function (){
        idk -= 1;
      },1200);
    } else {
      console.log(idk);
    }
    setTimeout(function () {
      score.classList.remove('taken_point');
    }, 1200)
  }

    document.onkeydown = function (e) {
      
      function move_left() {
        if (dwarf.offsetLeft >> 0) {
          var left_pos_d = dwarf.offsetLeft;
          var left_pos_h = head.offsetLeft;
          var left_pos_b = beard.offsetLeft;
          var left_pos_shirt = shirt.offsetLeft;
          var left_pos_t = trousers.offsetLeft;
          var left_pos_shoes = shoes.offsetLeft;
          var left_pos_w = weapon.offsetLeft;
          var left_pos_tup = tup_tup.offsetLeft;
            tup_tup.style.left = (left_pos_tup) - 2 + 'px';
            dwarf.style.left = (left_pos_d) - 2 + 'px';
            head.style.left = (left_pos_h) - 2 + 'px';
            beard.style.left = (left_pos_b) - 2 + 'px';
            shirt.style.left = (left_pos_shirt) - 2 + 'px';
            trousers.style.left = (left_pos_t) - 2 + 'px';
            shoes.style.left = (left_pos_shoes) - 2 + 'px';
            weapon.style.left = (left_pos_w) - 2 + 'px';
        }
      }

      function move_right() {
        if (dwarf.offsetLeft + 150 != window.innerWidth) {
          var left_pos_d = dwarf.offsetLeft;
          var left_pos_h = head.offsetLeft;
          var left_pos_b = beard.offsetLeft;
          var left_pos_shirt = shirt.offsetLeft;
          var left_pos_t = trousers.offsetLeft;
          var left_pos_shoes = shoes.offsetLeft;
          var left_pos_w = weapon.offsetLeft;
          var left_pos_tup = tup_tup.offsetLeft;
            tup_tup.style.left = (left_pos_tup) + 2 + 'px';
            dwarf.style.left = (left_pos_d) + 2 + 'px';
            head.style.left = (left_pos_h) + 2 + 'px';
            beard.style.left = (left_pos_b) + 2 + 'px';
            shirt.style.left = (left_pos_shirt) + 2 + 'px';
            trousers.style.left = (left_pos_t) + 2 + 'px';
            shoes.style.left = (left_pos_shoes) + 2 + 'px';
            weapon.style.left = (left_pos_w) + 2 + 'px';
        }
    }

    function move_up() {
      var top_pos_d = dwarf.offsetTop;
      var top_pos_h = head.offsetTop;
      var top_pos_b = beard.offsetTop;
      var top_pos_shirt = shirt.offsetTop;
      var top_pos_t = trousers.offsetTop;
      var top_pos_shoes = shoes.offsetTop;
      var top_pos_w = weapon.offsetTop;
        dwarf.style.top = (top_pos_d) - 3 + 'px';
        head.style.top = (top_pos_h) - 3 + 'px';
        beard.style.top = (top_pos_b) - 3 + 'px';
        shirt.style.top = (top_pos_shirt) - 3 + 'px';
        trousers.style.top = (top_pos_t) - 3 + 'px';
        shoes.style.top = (top_pos_shoes) - 3 + 'px';
        weapon.style.top = (top_pos_w) - 3 + 'px';
        
  }

  function move_down() {
    var top_pos_d = dwarf.offsetTop;
    var top_pos_h = head.offsetTop;
    var top_pos_b = beard.offsetTop;
    var top_pos_shirt = shirt.offsetTop;
    var top_pos_t = trousers.offsetTop;
    var top_pos_shoes = shoes.offsetTop;
    var top_pos_w = weapon.offsetTop;
      dwarf.style.top = (top_pos_d) + 3 + 'px';
      head.style.top = (top_pos_h) + 3 + 'px';
      beard.style.top = (top_pos_b) + 3 + 'px';
      shirt.style.top = (top_pos_shirt) + 3 + 'px';
      trousers.style.top = (top_pos_t) + 3 + 'px';
      shoes.style.top = (top_pos_shoes) + 3 + 'px';
      weapon.style.top = (top_pos_w) + 3 + 'px';
      
}

      function move_left_inter(){
        interval(function() {
          move_left();          
        }, 10, 10);
      }
      function move_right_inter(){
        interval(function() {
          move_right();          
        }, 10, 10);
      }
      function move_up_inter(){
        interval(function() {
          move_up();          
        }, 1, 100);
      }

      function move_down_inter(){
        interval(function() {
          move_down();          
        }, 1, 100);
      }
  
      
      function jump() {
        var ground = document.getElementById('groundid');
        if (dwarf.offsetTop + 240 == ground.offsetTop) {
          move_up_inter();
          jumping.play();
          runing.pause();
          tup_tup.style.visibility = 'hidden';
            setTimeout(function () {
              move_down_inter();
              setTimeout(function () {
                tup_tup.style.visibility = 'visible';
                runing.play();
              }, 400)
            }, 600)
          }
      }
      
      
      function minigun_shot() {
        var fire = document.getElementById("fireid");
        fire.style.bottom = '-70px';
        fire.classList.add('minigun_shot');
        shooting.play();
      }
      function flamethrower_shot() {
        var fire = document.getElementById("fireid");
        fire.style.bottom = '-50px';
        fire.classList.add('flamethrower_shot');
        flameing.play();
      }

      function check_weapon() {
        if (weapon.classList.contains('flamethrower')) {
          flamethrower_shot();
        } else {
          minigun_shot();
        }
      }
      
        if (e.keyCode == '38') {
          jump();
        } else if (e.keyCode == '37') {
          move_left_inter();
        } else if (e.keyCode == '39') {
          move_right_inter();
        } else if (e.keyCode == '32') {
          check_weapon();
        }
    };
   
    document.onkeyup = function(e) {
      if (e.keyCode == '32') {
        var fire = document.getElementById('fireid');
        fire.className = "";
        fire.classList.add("empty_fire");
        shooting.pause();
        flameing.pause();
      }
    }
    
    function ground_move(){
      var ground = document.getElementById('groundid');
      var ground_2 = document.getElementById('groundid_2');
      var screen_width = (window.screen.width * -1);
      setInterval(function() {
        var left_pos_g = ground.offsetLeft;
        var left_pos_g2 = ground_2.offsetLeft;
        ground.style.left = (left_pos_g) - 1 + 'px';
        ground_2.style.left = (left_pos_g2) - 1 + 'px';
        if (left_pos_g == screen_width) {
          ground.style.left = "100vw";
        } else if (left_pos_g2 == screen_width) {
          ground_2.style.left = "100vw";
        }
      }, speedometer);
    }

    function move_left() {
      var left_pos_d = dwarf.offsetLeft;
      var left_pos_h = head.offsetLeft;
      var left_pos_b = beard.offsetLeft;
      var left_pos_shirt = shirt.offsetLeft;
      var left_pos_t = trousers.offsetLeft;
      var left_pos_shoes = shoes.offsetLeft;
      var left_pos_w = weapon.offsetLeft;
        dwarf.style.left = (left_pos_d) - 1 + 'px';
        head.style.left = (left_pos_h) - 1 + 'px';
        beard.style.left = (left_pos_b) - 1 + 'px';
        shirt.style.left = (left_pos_shirt) - 1 + 'px';
        trousers.style.left = (left_pos_t) - 1 + 'px';
        shoes.style.left = (left_pos_shoes) - 1 + 'px';
        weapon.style.left = (left_pos_w) - 1 + 'px';
  }

    function move_left_inter(){
      interval(function() {
        move_left();          
      }, 1, 1);
    }
 
  
  function spawn_tree() {
      const obstacle1 = document.createElement('div');
      const tree1 = document.createElement('div');
      const bird1 = document.createElement('div');
      const legs1 = document.createElement('div');
      tree1.id = 'treeid1';
        obstacle1.id = "obs" + 1;
        obstacle1.classList.add('obs');
        tree1.classList.add('tree');
        bird1.classList.add('duck');
        legs1.classList.add('legs');
      document.body.appendChild(obstacle1);
      obstacle1.appendChild(bird1);
      obstacle1.appendChild(legs1);
      obstacle1.appendChild(tree1);

      life3 = document.getElementById('life3id');
      life2 = document.getElementById('life2id');
      life = document.getElementById('lifeid');
      store_tab = document.getElementById('store_tabid');
      terrain = document.getElementById('groundid');
      setInterval(function () {
        var obstacle_left = obstacle1.offsetLeft;
        obstacle1.style.left = obstacle_left - 1 + 'px';
        if ((dwarf.offsetTop + 240) <= terrain.offsetTop
          && (dwarf.offsetTop + 240) >= obstacle1.offsetTop
          && tree1.classList.contains('tree')){
          if (dwarf.offsetLeft == obstacle1.offsetLeft
            && life3.classList.contains('life')
            && life2.classList.contains('life')
            && life.classList.contains('life')) {
              life3.classList.remove('life');
              life3.classList.add('life_gray');
              faint();
              dieing.play();
          } else if (dwarf.offsetLeft == obstacle1.offsetLeft
            && life3.classList.contains('life_gray')
            && life2.classList.contains('life')
            && life.classList.contains('life')) {
              life2.classList.remove('life');
              life2.classList.add('life_gray');
              faint();
              dieing.play();
          } else if (dwarf.offsetLeft == obstacle1.offsetLeft
            && life3.classList.contains('life_gray')
            && life2.classList.contains('life_gray')
            && life.classList.contains('life')) {
              life.classList.remove('life');
              life.classList.add('life_gray');
              faint();
              dieing.play();
          } 
        }
      }, speedometer)

       setInterval(function(){
        if ((dwarf.offsetLeft + 250) >= (obstacle1.offsetLeft)
          && dwarf.offsetLeft <= obstacle1.offsetLeft
          && (dwarf.offsetTop + 240) >= obstacle1.offsetTop) {
            if (fire.classList.contains('minigun_shot')) {
              take_point();
                tree1.classList.remove('tree');
                tree1.classList.add('tree_egzecution');
                obstacle1.removeChild(bird1);
                obstacle1.removeChild(legs1);
                setTimeout(function() {
                  tree1.classList.add('tree_shot');
                },500);
            } else if (fire.classList.contains('flamethrower_shot')) {
              take_point();
              tree1.classList.add('tree');
              tree1.classList.add('tree_flamed');
              obstacle1.removeChild(bird1);
              obstacle1.removeChild(legs1);
            }
          }
        },1); 

      setTimeout(function () {
        document.body.removeChild(obstacle1);
      }, 10000)
    }

    function spawn_tree_2() {
      const obstacle2 = document.createElement('div');
      const tree2 = document.createElement('div');
      const bird2 = document.createElement('div');
      const legs2 = document.createElement('div');
        tree2.id = 'treeid2';
        obstacle2.id = "obs" + 2;
        obstacle2.classList.add('obs');
        tree2.classList.add('tree');
        bird2.classList.add('duck_blue');
        legs2.classList.add('legs_blue');
      document.body.appendChild(obstacle2);
      obstacle2.appendChild(bird2);
      obstacle2.appendChild(legs2);
      obstacle2.appendChild(tree2);

      life3 = document.getElementById('life3id');
      life2 = document.getElementById('life2id');
      life = document.getElementById('lifeid');
      store_tab = document.getElementById('store_tabid');
      terrain = document.getElementById('groundid');
      setInterval(function () {
        var obstacle_left = obstacle2.offsetLeft;
        obstacle2.style.left = obstacle_left - 1 + 'px';
        if ((dwarf.offsetTop + 240) <= terrain.offsetTop
          && (dwarf.offsetTop + 240) >= obstacle2.offsetTop
          && tree2.classList.contains('tree')){
          if (dwarf.offsetLeft == obstacle2.offsetLeft
            && life3.classList.contains('life')
            && life2.classList.contains('life')
            && life.classList.contains('life')) {
              life3.classList.remove('life');
              life3.classList.add('life_gray');
              faint();
              dieing.play();
          } else if (dwarf.offsetLeft == obstacle2.offsetLeft
            && life3.classList.contains('life_gray')
            && life2.classList.contains('life')
            && life.classList.contains('life')) {
              life2.classList.remove('life');
              life2.classList.add('life_gray');
              faint();
              dieing.play();
          } else if (dwarf.offsetLeft == obstacle2.offsetLeft
            && life3.classList.contains('life_gray')
            && life2.classList.contains('life_gray')
            && life.classList.contains('life')) {
              life.classList.remove('life');
              life.classList.add('life_gray');
              faint();
              dieing.play();
            }
          }
      }, speedometer)

      setInterval(function(){
        if ((dwarf.offsetLeft + 250) >= (obstacle2.offsetLeft)
          && dwarf.offsetLeft <= obstacle2.offsetLeft
          && (dwarf.offsetTop + 240) >= obstacle2.offsetTop) {
            if (fire.classList.contains('minigun_shot')) {
              add_point();
              tree2.classList.remove('tree');
                tree2.classList.add('tree_egzecution');
                obstacle2.removeChild(bird2);
                obstacle2.removeChild(legs2);
                setTimeout(function() {
                  tree2.classList.add('tree_shot');
                },500);
            } else if (fire.classList.contains('flamethrower_shot')) {
              add_point();
              tree2.classList.add('tree');
              tree2.classList.add('tree_flamed');
              obstacle2.removeChild(bird2);
              obstacle2.removeChild(legs2);
            }
          }
        },1); 

      setTimeout(function () {
        document.body.removeChild(obstacle2);
      }, 10000)
    }

    function spawn_tree_3() {
      const obstacle3 = document.createElement('div');
      const tree3 = document.createElement('div');
      const bird3 = document.createElement('div');
      const legs3 = document.createElement('div');
      tree3.id = 'treeid3';
        obstacle3.id = "obs" + 3;
        obstacle3.classList.add('obs');
        tree3.classList.add('tree');
        bird3.classList.add('duck');
        legs3.classList.add('legs');
      document.body.appendChild(obstacle3);
      obstacle3.appendChild(bird3);
      obstacle3.appendChild(legs3);
      obstacle3.appendChild(tree3);

      life3 = document.getElementById('life3id');
      life2 = document.getElementById('life2id');
      life = document.getElementById('lifeid');
      store_tab = document.getElementById('store_tabid');
      terrain = document.getElementById('groundid');
      setInterval(function () {
        var obstacle_left = obstacle3.offsetLeft;
        obstacle3.style.left = obstacle_left - 1 + 'px';
        if ((dwarf.offsetTop + 240) <= terrain.offsetTop
          && (dwarf.offsetTop + 240) >= obstacle3.offsetTop
          && tree3.classList.contains('tree')){
          if (dwarf.offsetLeft == obstacle3.offsetLeft
            && life3.classList.contains('life')
            && life2.classList.contains('life')
            && life.classList.contains('life')) {
              life3.classList.remove('life');
              life3.classList.add('life_gray');
              faint();
              dieing.play();
          } else if (dwarf.offsetLeft == obstacle3.offsetLeft
            && life3.classList.contains('life_gray')
            && life2.classList.contains('life')
            && life.classList.contains('life')) {
              life2.classList.remove('life');
              life2.classList.add('life_gray');
              faint();
              dieing.play();
          } else if (dwarf.offsetLeft == obstacle3.offsetLeft
            && life3.classList.contains('life_gray')
            && life2.classList.contains('life_gray')
            && life.classList.contains('life')) {
              life.classList.remove('life');
              life.classList.add('life_gray');
              faint();
              dieing.play();
            }
          }
      }, speedometer)

      setInterval(function(){
        if ((dwarf.offsetLeft + 250) >= (obstacle3.offsetLeft)
          && dwarf.offsetLeft <= obstacle3.offsetLeft
          && (dwarf.offsetTop + 240) >= obstacle3.offsetTop) {
            if (fire.classList.contains('minigun_shot')) {
              take_point();
              tree3.classList.remove('tree');
                tree3.classList.add('tree_egzecution');
                obstacle3.removeChild(bird3);
                obstacle3.removeChild(legs3);
                setTimeout(function() {
                  tree3.classList.add('tree_shot');
                },500);
            } else if (fire.classList.contains('flamethrower_shot')) {
              take_point();
              tree3.classList.add('tree');
              tree3.classList.add('tree_flamed');
              obstacle3.removeChild(bird3);
              obstacle3.removeChild(legs3);
            }
          }
        },1); 

    
      setTimeout(function () {
        document.body.removeChild(obstacle3);
      }, 10000)
    }

    function spawn_tree_4() {
      const obstacle4 = document.createElement('div');
      const tree4 = document.createElement('div');
      const bird4 = document.createElement('div');
      const legs4 = document.createElement('div');
      tree4.id = 'treeid4';
        obstacle4.id = "obs" + 4;
        obstacle4.classList.add('obs');
        tree4.classList.add('tree');
        bird4.classList.add('duck_blue');
        legs4.classList.add('legs_blue');
      document.body.appendChild(obstacle4);
      obstacle4.appendChild(bird4);
      obstacle4.appendChild(legs4);
      obstacle4.appendChild(tree4);

      life3 = document.getElementById('life3id');
      life2 = document.getElementById('life2id');
      life = document.getElementById('lifeid');
      store_tab = document.getElementById('store_tabid');
      terrain = document.getElementById('groundid');
      setInterval(function () {
        var obstacle_left = obstacle4.offsetLeft;
        obstacle4.style.left = obstacle_left - 1 + 'px';
        if ((dwarf.offsetTop + 240) <= terrain.offsetTop
          && (dwarf.offsetTop + 240) >= obstacle4.offsetTop
          && tree4.classList.contains('tree')){
          if (dwarf.offsetLeft == obstacle4.offsetLeft
            && life3.classList.contains('life')
            && life2.classList.contains('life')
            && life.classList.contains('life')) {
              life3.classList.remove('life');
              life3.classList.add('life_gray');
              faint();
              dieing.play();
          } else if (dwarf.offsetLeft == obstacle4.offsetLeft
            && life3.classList.contains('life_gray')
            && life2.classList.contains('life')
            && life.classList.contains('life')) {
              life2.classList.remove('life');
              life2.classList.add('life_gray');
              faint();
              dieing.play();
          } else if (dwarf.offsetLeft == obstacle4.offsetLeft
            && life3.classList.contains('life_gray')
            && life2.classList.contains('life_gray')
            && life.classList.contains('life')) {
              life.classList.remove('life');
              life.classList.add('life_gray');
              faint();
              dieing.play();
            }
          }
      }, speedometer)

      setInterval(function(){
        if ((dwarf.offsetLeft + 250) >= (obstacle4.offsetLeft)
          && dwarf.offsetLeft <= obstacle4.offsetLeft
          && (dwarf.offsetTop + 240) >= obstacle4.offsetTop) {
            if (fire.classList.contains('minigun_shot')) {
              add_point();
              tree4.classList.remove('tree');
                tree4.classList.add('tree_egzecution');
                obstacle4.removeChild(bird4);
                obstacle4.removeChild(legs4);
                setTimeout(function() {
                  tree4.classList.add('tree_shot');
                },500);
            } else if (fire.classList.contains('flamethrower_shot')) {
              add_point();
              tree4.classList.add('tree');
              tree4.classList.add('tree_flamed');
              obstacle4.removeChild(bird4);
              obstacle4.removeChild(legs4);
            }
          }
        },1); 
      setTimeout(function () {
        document.body.removeChild(obstacle4);
      }, 10000)
    }

    function randomize_tree_spawn() {
      var rand = (Math.random() * (4 - 1) + 1); 
      spawn_trees();
      setTimeout(randomize_tree_spawn, rand * 1500);
    }

    function spawn_trees() {
      var random = Math.floor(Math.random() * 4) + 1;
      if (random == 1) {
        spawn_tree();
      }  else if (random == 2) {
        spawn_tree_2();
      } else if (random == 3) {
        spawn_tree_3();
      } else if (random == 4) {
        spawn_tree_4();
      }
    }
   
    setInterval(function () {
      score.innerHTML = points;
      if (points >> 5) {
        speedometer = speedometer / (points);
      }
    }, 5);
  