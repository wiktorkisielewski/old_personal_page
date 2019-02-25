const weapons = document.createElement('div');
weapons.innerHTML = `<div class="weapon_backdrop">
<div class="destruction_instruction">
        In a moment you will be allowed to shoot, <br>
        try to destroy as many elements as possible in a given time. <br>
        Extra combos will give you bonus seconds. <br>
        Be quick and accurate! <br><br>
        Choose your weapon!
        <div class="weapon_lobby">
                <div class="weapon_image ak" onclick="start()"></div>
                <div class="weapon_image minigun" onclick="start()"></div>
                <div class="weapon_image sniper" onclick="start()"></div>
                <div class="weapon_image flamethrower" onclick="start()"></div>
                <div class="weapon_image rpg" onclick="start()"></div>
                <div class="weapon_image shotgun" onclick="start()"></div>
        </div>
    <div class="close_it" onclick="document.body.removeChild(weapons)">x</div>
    </div>
</div>`

const counter = document.createElement('div');
counter.innerHTML = `<div class="weapon_backdrop">
<div id="countdown"></div>
</div>`

function destruction_menu() {
    document.body.appendChild(weapons);
}


function start() {
    document.body.removeChild(weapons);
    document.body.appendChild(counter);
    count_it = document.getElementById('countdown');
    count_it.innerHTML = '5';
    count_it.style.animation = 'countdown 1000ms infinite';
    document.body.style.cursor = 'crosshair';
    setTimeout(function() {
        count_it.innerHTML = '4';
        setTimeout(function() {
            count_it.innerHTML = '3';
            setTimeout(function() {
                count_it.innerHTML = '2';
                setTimeout(function() {
                    count_it.innerHTML = '1';
                    count_it.style.animation = '';
                    setTimeout(function() {
                        document.body.style.cursor = '';
                        counter.innerHTML = `
                        <div class="weapon_backdrop">
                            <div class="destruction_instruction">
                                Sorry, I was just kidding :/<br><br>
                                My websites are <strong>INDESTRUCTIBLE!</strong><br><br>If you are looking for some
                                fun I suggest looking for games in my portfolio.
                                <div class="close_it" onclick="document.body.removeChild(counter)">x</div>
                            </div>
                        </div>`;
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}