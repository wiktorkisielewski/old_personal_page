(function () {

create_button = document.getElementById('create_icon');
block_creator = document.getElementById('block_creator');
blocks = document.getElementById('blocks');
side_blocks = document.getElementById('side_blocks');

menu_button = document.getElementById('menu_button');
menu = document.getElementById('menu');

info_box = document.getElementById('info_box');
info_text = document.getElementById('info_text');
basics = document.getElementById('basics');
about_hash = document.getElementById('about_hash');
explore_more = document.getElementById('explore_more');

newchain_button = document.getElementById('newchain_button');
sidechain_button = document.getElementById('sidechain_button');
merge_button = document.getElementById('merge_button');
block_button = document.getElementById('block_button');
data_button = document.getElementById('data_button');
side_block_button = document.getElementById('side_block_button');
side_data_button = document.getElementById('side_data_button');

input_data = document.createElement('div');
input_data.innerHTML = '<div id="data"><input type="text" id="block_data"><input id="submit_data" type="button" value="Create Block" onclick="data_flag();spawn_block()"></div>';
data_back = document.getElementById('data_back');

instruction_box = document.getElementById('instruction_box');

menu_flag = 0;
info_flag = 0;
creation_flag = 0;
sidechain_flag = 0;
newchain_flag = 0;



function show_info(text) {
    if (info_flag == 0) {
        info_text.innerHTML = text;
        info_box.style.transition = 400 + 'ms';
        info_box.style.top = 0;
        info_box.style.bottom = 0;
        info_flag += 1;
    } else {
        if (info_text.innerHTML.indexOf(text)) {
            info_box.style.top = -100 + '%';
            info_box.style.bottom = 100 + '%';
            info_flag -= 1;
            info_text.innerHTML = '';
            setTimeout(function () {
                info_text.innerHTML = text;
                info_box.style.transition = 400 + 'ms';
                info_box.style.top = 0;
                info_box.style.bottom = 0;
                info_flag -= 1;
            }, 700);
        } else {
            info_box.style.top = -100 + '%';
            info_box.style.bottom = 100 + '%';
            info_flag -= 1;
        }
    }
}

menu_button.addEventListener('click', function (e) {
    e.stopPropagation();
    if (menu_flag == 0) {
        menu.style.transition = 400 + 'ms';
        menu.style.right = 0 + 'px';
        menu_flag += 1;
    } else {
        menu.style.right = -500 + 'px';
        menu_flag -= 1;
    }
},false);

setInterval(function () {
    if (newchain_flag != 0) {
        block_button.disabled = false;
        data_button.disabled = false;
        sidechain_button.disabled = false;
    }
},1);

basics.addEventListener('click', function (e) {
    e.stopPropagation();
            text= " Blockchain was invented by Satoshi Nakamoto in 2008 to serve as the public transaction ledger of the cryptocurrency bitcoin. \n \n Wikipedia definition: \n A blockchain, originally block chain, is a growing list of records,called blocks, which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and custom data. \n \n From this website author: \n Blockchain - not only a cumulative/escalating database, but a decentralized system which verifies information given to the network, through nodes heading to a compatible consensus and (at the end) saving it in as a marked block in an immutable database. \n ";
    show_info(text);
},false);

about_hash.addEventListener('click', function (e) {
    e.stopPropagation();
        text = "What is a hash function (hashing)? \n \n Hashing is used to convert one value into another one (usually shorter). \nThe output of this function is usually a combination of signs and looks more or less like this: \n 00000000000000000016cd29ba79f77d427db4e77c81b4c2c8add3b4364aa5a7 \n \n In this (blockchain) case hashing is used to create blocks fingerprint, which represents all the data contained in it. Every block includes two hashes (self and previous). This ensures that blocks cannot be mixed, edited or deleted without breaking the chain. \n \n There are many hashing algorithms like SHA[x], Blake[x], MD[x] and many more. However, this website only simulates real hashing as it is a CPU consuming process, and implementing it here would be an 'overkill'. \n \n Go to 'explore more' section to find more apecific descriptions and usefull links.";
    show_info(text);
},false);

create_button.addEventListener('click', function (e) {
    e.stopPropagation();
    if (creation_flag == 0) {
        block_creator.style.transition = 400 + 'ms';
        block_creator.style.left = -4 + 'px';
        creation_flag += 1;
    } else {
        block_creator.style.transition = 400 + 'ms';
        block_creator.style.left = -200 + 'px';
        creation_flag -= 1;
    }
}, false);

document.body.addEventListener('click', function(e) {
    if (creation_flag != 0) {
        block_creator.style.transition = 400 + 'ms';
        block_creator.style.left = -200 + 'px';
        creation_flag -= 1;
    }
}, false);

sidechain_button.addEventListener('click', function (e) {
    e.stopPropagation();
    sidechain_creation();
    console.log(side_chain);
    side_block_button.style.display = 'block';
    side_data_button.style.display = 'block';
    merge_button.disabled = false;
}, false);



newchain_button.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'visible';
    instruction_box.innerHTML = 'Creates a brand new chain' + '</br>' + '[if ther is one already existing, it will be removed!]';
}, false);
newchain_button.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'hidden';
    instruction_box.innerHTML = '';
}, false);
newchain_button.addEventListener('click', function (e) {
    e.stopPropagation();
    if (newchain_flag == 0) {
        blocks.innerHTML = '';
        main_counter = 0;
        spawn_block();
        newchain_flag += 1;
    } else {
        location = location;
    }
}, false);

sidechain_button.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'visible';
    instruction_box.innerHTML = 'Creates a side-chain, by spliting currently exisiting chain' + '</br>' + '[it will be parallel to main one, but the amount of blocks and they content may be totally diffrent]';
}, false);
sidechain_button.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'hidden';
    instruction_box.innerHTML = '';
}, false);

merge_button.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'visible';
    instruction_box.innerHTML = 'Connects side-chain back to the main blockchain';
}, false);
merge_button.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'hidden';
    instruction_box.innerHTML = '';
}, false);
merge_button.addEventListener('click', function (e) {
    e.stopPropagation();
    merge();
}, false);

block_button.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'visible';
    instruction_box.innerHTML = 'Creates a basic type of block [it will contain only index, timestamp and two hashes]';
}, false);
block_button.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'hidden';
    instruction_box.innerHTML = '';
}, false);
block_button.addEventListener('click', function (e) {
    e.stopPropagation();
    spawn_block();
}, false);

side_block_button.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'visible';
    instruction_box.innerHTML = 'Creates a basic type of block [it will contain only index, timestamp and two hashes]';
}, false);
side_block_button.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'hidden';
    instruction_box.innerHTML = '';
}, false);
side_block_button.addEventListener('click', function (e) {
    e.stopPropagation();
    spawn_sideblock();
}, false);



data_button.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'visible';
    instruction_box.innerHTML = 'Creates a block with custom data added [it is possible to store any kind of data on the blockchain]';
}, false);
data_button.addEventListener('mouseout', function (e) {
    e.stopPropagation();
    instruction_box.style.visibility = 'hidden';
    instruction_box.innerHTML = '';
}, false);
data_button.addEventListener('click', function (e) {
    e.stopPropagation();
    document.body.appendChild(input_data);
    data.style.visibility = 'visible';
}, false);

}());