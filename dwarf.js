(function () {
    const dwarf = document.createElement('div');
        dwarf.classList.add('dwarf');
        dwarf.id = "dwarfid";
    const head = document.createElement('div');
        head.classList.add('empty_head');
        head.id = "headid";
    const beard = document.createElement('div');
        beard.classList.add('empty_beard');
        beard.id = "beardid";
    const shirt = document.createElement('div');
        shirt.classList.add('empty_shirt');
        shirt.id = "shirtid";
    const trousers = document.createElement('div');
        trousers.classList.add('empty_trousers');
        trousers.id = "trousersid";
    const shoes = document.createElement('div');
        shoes.classList.add('empty_shoes');
        shoes.id = "shoesid";
    const creation_background = document.createElement('div');
    const weapon_background = document.createElement('div');
    const terrain = document.createElement('div');
        terrain.classList.add('terrain');
        terrain.id = "groundid";
    const terrain_2 = document.createElement('div');
        terrain_2.classList.add('terrain_2');
        terrain_2.id = "groundid_2";
    const sky = document.createElement('div');
        sky.classList.add('sky');
    const manual = document.createElement('div');
        manual.classList.add('manual');
    const fire = document.createElement('div');
        fire.classList.add("empty_fire");
        fire.id = 'fireid';
    const start_cover = document.createElement('div');
        start_cover.classList.add('start_cover');
    const dust = document.createElement('div');
        dust.id = "dustid";
        dust.classList.add('dust');
    const tup_tup = document.createElement('div');
        tup_tup.classList.add('tup_tup');
        tup_tup.id = "tup_tupid";
        document.body.appendChild(tup_tup);
    const instruction = document.createElement('div');
        instruction.classList.add('instruction');
        instruction.id = "instructionid";


        const score_tab = document.createElement('div');
        const life = document.createElement('div');
        const life2 = document.createElement('div');
        const life3 = document.createElement('div');
        
        score_tab.classList.add('score_tab');
            score_tab.id = "score_tabid"
        life.classList.add('life');
            life.id = "lifeid";
        life2.classList.add('life');
            life2.id = "life2id";
        life3.classList.add('life');
            life3.id = "life3id";
        
    

    const head_button = document.createElement('button');
    const beard_button = document.createElement('button');
    const shirt_button = document.createElement('button');
    const trousers_button = document.createElement('button');
    const shoes_button = document.createElement('button');
    const y_button = document.createElement('button');
    const burn_button = document.createElement('button');
    const shot_button = document.createElement('button');
    const play_button = document.createElement('button');
    const start_button = document.createElement('button');
        start_button.classList.add('start_button');

    
    const shoot_img = document.createElement('div');
        shoot_img.classList.add('shoot_img');
    const burn_img = document.createElement('div');
        burn_img.classList.add('burn_img');

    
    const flamethrower = document.createElement('div');
    flamethrower.classList.add('flamethrower');
    const minigun = document.createElement('div');
    minigun.classList.add('minigun')

    head_button.addEventListener('click', function (e) {
        e.stopPropagation();
        change_head();
        dwarf.appendChild(head);
    }, false);
    
    var head_class = [
        {name: "rainbow_head"},
        {name: "hut_head"},
        {name: "beats_head"}
    ];
    var i = 0;
    function change_head() {
        if (i < head_class.length) {
            head.classList.add(head_class[i].name);
            i++;
        } else if (i = 2) {
            head.className = "";
            i -= 2;
        }
    }

    beard_button.addEventListener('click', function (e) {
        e.stopPropagation();
        change_beard();
        dwarf.appendChild(beard);
    }, false);
    var beard_class = [
        {name: "beard_dark"},
        {name: "beard_green"},
        {name: "beard_light"},
        {name: "beard_brown"},
    ];
    var i = 0;
    function change_beard() {
        if (i < beard_class.length) {
            beard.classList.add(beard_class[i].name);
            i++;
        } else if (i = 4) {
            beard.className = "";
            i -= 4;
        }
    }

    shirt_button.addEventListener('click', function (e) {
        e.stopPropagation();
        change_shirt();
        dwarf.appendChild(shirt);
    }, false);
    var shirt_class = [
        {name: "shirt_blue"},
        {name: "shirt_pink"},
        {name: "shirt_green"},
        {name: "shirt_yellow"},
    ];
    var i = 0;
    function change_shirt() {
        if (i < shirt_class.length) {
            shirt.classList.add(shirt_class[i].name);
            i++;
        } else if (i = 3) {
            shirt.className = "";
            i -= 3;
        }
    }

    trousers_button.addEventListener('click', function (e) {
        e.stopPropagation();
        change_trousers();
        dwarf.appendChild(trousers);
    }, false);
    var trousers_class = [
        {name: "trousers_dark"},
        {name: "trousers_gray"},
        {name: "trousers_brown"},
        {name: "trousers_orange"},
    ];
    var i = 0;
    function change_trousers() {
        if (i < trousers_class.length) {
            trousers.classList.add(trousers_class[i].name);
            i++;
        } else if (i = 3) {
            trousers.className = "";
            i -= 3;
        }
    }

    shoes_button.addEventListener('click', function (e) {
        e.stopPropagation();
        change_shoes();
        dwarf.appendChild(shoes);
    }, false);
    var shoes_class = [
        {name: "shoes_dark"},
        {name: "shoes_gold"},
        {name: "shoes_red"},
        {name: "shoes_green"},
    ];
    var i = 0;
    function change_shoes() {
        if (i < shoes_class.length) {
            shoes.classList.add(shoes_class[i].name);
            i++;
        } else if (i = 3) {
            shoes.className = "";
            i -= 3;
        }
    }
    
    
    document.body.appendChild(dwarf);
    document.body.appendChild(head);
    document.body.appendChild(beard);
    document.body.appendChild(shirt);
    document.body.appendChild(trousers);
    document.body.appendChild(shoes);
    dwarf.appendChild(fire);
    document.body.appendChild(head_button);
    document.body.appendChild(beard_button);
    document.body.appendChild(shirt_button);
    document.body.appendChild(trousers_button);
    document.body.appendChild(shoes_button);
    document.body.appendChild(y_button);
    document.body.appendChild(creation_background);

    head_button.classList.add('head_button');
    beard_button.classList.add('beard_button');
    shirt_button.classList.add('shirt_button');
    trousers_button.classList.add('trousers_button');
    shoes_button.classList.add('shoes_button');
    y_button.classList.add('y_button');
    play_button.classList.add('play_button');
    creation_background.classList.add('creation_background');
    weapon_background.classList.add('weapon_background');
    shot_button.classList.add('shot_button');
    burn_button.classList.add('burn_button');

    function weapon() {
        document.body.appendChild(weapon_background);
        document.body.appendChild(burn_button);
        document.body.appendChild(shot_button);
            shot_button.id = "shot_button";
        document.body.appendChild(burn_img);
        document.body.appendChild(shoot_img);
    };
    function weapon_off() {
        document.body.removeChild(weapon_background);
        document.body.removeChild(burn_button);
        document.body.removeChild(shot_button);
        document.body.removeChild(burn_img);
        document.body.removeChild(shoot_img);
        document.body.removeChild(head_button);
        document.body.removeChild(beard_button);
        document.body.removeChild(shirt_button);
        document.body.removeChild(trousers_button);
        document.body.removeChild(shoes_button);
        document.body.removeChild(y_button);
    };

    y_button.addEventListener('click', function (e) {
        e.stopPropagation();
        weapon();
    }, false);

    burn_button.addEventListener('click', function (e) {
        e.stopPropagation();
        weapon_off();
        dwarf.appendChild(flamethrower);
        flamethrower.id = 'weapon';
        document.body.appendChild(play_button);
        document.body.appendChild(manual);
    }, false);
    
    shot_button.addEventListener('click', function (e) {
        e.stopPropagation();
        weapon_off();
        dwarf.appendChild(minigun);
        minigun.id = 'weapon';
        weapon_no = 1;
        minigun.classList.add('minigun_2');
        document.body.appendChild(play_button);
        document.body.appendChild(manual);
    }, false);

    play_button.addEventListener('click', function (e) {
        e.stopPropagation();
        document.body.appendChild(dust);
        document.body.appendChild(terrain);
        document.body.appendChild(terrain_2);
        document.body.removeChild(play_button);
        document.body.removeChild(manual);
        document.body.appendChild(sky);
        document.body.appendChild(score_tab);
        score_tab.appendChild(score);
        score_tab.appendChild(life);
        score_tab.appendChild(life2);
        score_tab.appendChild(life3);
        proper_position();
        document.body.appendChild(start_button);
        document.body.appendChild(start_cover);
    }, false);
    
    start_button.addEventListener('click', function (e) {
        e.stopPropagation();
        document.body.removeChild(start_button);
        document.body.appendChild(instruction);
        setTimeout(function() {
            document.body.removeChild(instruction);
            document.body.removeChild(start_cover);
            ground_move();
            randomize_tree_spawn();
            tup_tup.style.visibility = ('visible');
        }, 2000);
    }, false);
    
    points = 0;

    setInterval(function() {
        if (life3.classList.contains('life_gray')
        && life2.classList.contains('life_gray')
        && life.classList.contains('life_gray')) {
          looser();
        } else if (points <= -10) {
          looser();
        }
    }, 1);
    
    
}());