project_info = document.getElementById('project_info');
project_text = document.getElementById('project_text');
project_tech = document.getElementById('project_tech');
github_link = document.getElementById('github_link');
live_link = document.getElementById('live_link');

info_flag = 0;
function display_project(num) {
    if (info_flag == 0) {
        project_text.innerHTML = ``;
        project_tech.innerHTML = ``;
        github_link.style.opacity = '0';
        live_link.style.opacity = '0';
    };
    project_info.style.opacity = "1";
    project_info.style.visibility = "visible";
    if (num == 0) {
        project_info.style.backgroundImage = "url(screens/dwarf_screen_1.png)";
    } else if (num == 1) {
        project_info.style.backgroundImage = "url(screens/bs_screen.png)";
    } else if (num == 2) {
        project_info.style.backgroundImage = "url(screens/bitpredictor_screen.png)";
    } else if (num == 3) {
        project_info.style.backgroundImage = "url(screens/quiz_screen.png)";
    } else if (num == 4) {
        project_info.style.backgroundImage = "url(screens/portfolio.png)";
    }
}

function display_info(num) {
    project_info.style.backgroundImage = "";
    info_flag += 1;
    github_link.style.opacity = '1';
    live_link.style.opacity = '1';
    if (num == 0) {
        project_text.innerHTML = `A simple run&shoot platform game with an 8-bit style graphics.
        Endless gameplay focused on stacking points by killing blue birds while avoiding trees.
        Avatar customization and weapon selections possible.`
        project_tech.innerHTML = `Vanilla JS / HTML / CSS`;
        github_link.setAttribute('href', 'https://github.com/wiktorkisielewski/DWARF_THE_GAME');
        live_link.setAttribute('href', 'https://github.com/wiktorkisielewski/DWARF_THE_GAME');
    } else if (num == 1) {
        project_text.innerHTML = `Web app made to visualize the blockchain database structure. 
        Allows standard block creation as well as custom data input. Includes fork function with 
        a sidechain production. Simulates hash function.`
        project_tech.innerHTML = `Vanilla JS / HTML / CSS`;
        github_link.setAttribute('href', 'https://github.com/wiktorkisielewski/BLOCKCHAIN_SANDBOX');
        live_link.setAttribute('href', 'https://github.com/wiktorkisielewski/DWARF_THE_GAME');
    } else if (num == 2) {
        project_text.innerHTML = `This website collects bitcoin price prediction and address.
        Every submission requires a short usage of users CPU to generate a tiny amount of 
        cryptocurrency by the mining process. Mined currency is cumulated into prize and 
        distributed to the correct prediction owner.`
        project_tech.innerHTML = `PHP / Vanilla JS / HTML / CSS`;
        github_link.setAttribute('href', 'https://github.com/wiktorkisielewski/Bitpredictor.org');
        live_link.setAttribute('href', 'https://github.com/wiktorkisielewski/DWARF_THE_GAME');
    } else if (num == 3) {
        project_text.innerHTML = `A or B, quiz-like application. It was made to allow an easy comparison 
        between standard (FIAT) money and cryptocurrencies. After finishing this quiz user gets his score 
        and suggestions depending on what the results were. For now two languages available.`
        project_tech.innerHTML = `Vanilla JS / HTML / CSS`;
        github_link.setAttribute('href', 'https://github.com/wiktorkisielewski/currency_quiz');
        live_link.setAttribute('href', 'https://github.com/wiktorkisielewski/DWARF_THE_GAME');
    } else if (num == 4) {
        project_text.innerHTML = `My own portfolio, the one you are currently exploring. Designed
        for both, desktop and mobile.  Background that interacts with users mouse moves and a few hidden easter-eggs.`
        project_tech.innerHTML = `Vanilla JS / HTML / CSS`;
        github_link.setAttribute('href', 'https://github.com/wiktorkisielewski/DWARF_THE_GAME');
        live_link.setAttribute('href', 'https://github.com/wiktorkisielewski/DWARF_THE_GAME');
    }
}
function hide() {
    if (info_flag == 0) {
        project_text.innerHTML = ``;
        project_info.style.opacity = "0";
    } else {
        info_flag -= 1;
        
    }
}

(function() {
    window.addEventListener('scroll', function(e) {
        e.stopPropagation();
        hide();
    }, false)
})();



neon_flag = 0;
        function neon() {
            if (neon_flag == 0) {
                document.getElementById('neon_dot').style.left = '20px';
                document.getElementById('welcome_text').style.animation = 'colors 300ms infinite';
                document.getElementById('box_header').style.animation = 'colors 300ms infinite';
                document.getElementById('box_header_2').style.animation = 'colors 300ms infinite';
                document.getElementById('box_header_3').style.animation = 'colors 300ms infinite';
                neon_flag += 1;
            } else {
                document.getElementById('neon_dot').style.left = '4px';
                document.getElementById('welcome_text').style.animation = '';
                document.getElementById('box_header').style.animation = '';
                document.getElementById('box_header_2').style.animation = '';
                document.getElementById('box_header_3').style.animation = '';
                neon_flag -= 1;
            }
        }
        document.getElementById('click').addEventListener('click', function (e) {
            e.stopPropagation();
            document.getElementById("check_menu").checked = false;
            document.getElementById('click').style.display = 'none';
        });