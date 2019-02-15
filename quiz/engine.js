(function() {
    const language = document.createElement('div');
    const language_text = document.createElement('div');
    const lang_pl = document.createElement('div');
    const lang_en = document.createElement('div');
    const crypto_box = document.createElement('div');
    const fiat_box = document.createElement('div');
    const bar = document.createElement('div');
    const indicator = document.createElement('div');
    const text = document.createElement('div');
    const welcome = document.createElement('div');
    const start = document.createElement('div');
    const welcome_text = document.createElement('div');
    const crypto_text = document.createElement('div');
    const fiat_text = document.createElement('div');
    const end_div = document.createElement('div');
    const results = document.createElement('div');
    const results_box = document.createElement('div');


    function add_class(el_name, cl_name) {
        el_name.classList.add(cl_name);
    }

    add_class(language, 'lang_box');
    add_class(language_text, 'lang_font');
    add_class(lang_pl, 'pl_box');
    add_class(lang_en, 'en_box');
    add_class(bar, 'bar');
    add_class(indicator, 'indicator');
    add_class(text, 'text_bottom');
    add_class(welcome, 'welcome');
    add_class(start, 'start');
    add_class(welcome_text,'w_text');
    add_class(crypto_text, 'text');
    add_class(fiat_text, 'text');
    add_class(end_div, 'end_div');
    add_class(results, 'results');
    add_class(results_box, 'results_box')
    add_class(crypto_box, 'crypto_box');
    add_class(fiat_box, 'fiat_box');
    
    document.body.appendChild(language);
    document.body.appendChild(language_text);
    language.appendChild(lang_pl);
    language.appendChild(lang_en);

    language_text.innerHTML = 'Please' + '</br>' + 'choose' + '</br>' + 'your' + '</br>' + 'language';

    function lang_choosen() {
        document.body.removeChild(language);
        document.body.removeChild(language_text);
        language.removeChild(lang_pl);
        language.removeChild(lang_en);
        document.body.appendChild(welcome);
        welcome.appendChild(welcome_text);
        document.body.appendChild(start);
        start.innerHTML = 'START!';
    }

    function mind_fuck() {
        var randomizer = Boolean(Math.round(Math.random()));
        console.log(randomizer);
        if (randomizer == true) {
            document.body.style.flexDirection = 'row-reverse';
        } else {
            document.body.style.flexDirection = 'row';
        }
    }

    lang_index = 0;

    lang_en.addEventListener('click', function(e){
        e.stopPropagation();
        lang_choosen();
        text.innerHTML = 'WHAT DO YOU PREFER?';
        welcome_text.innerHTML = '<span style="font-weight: 600">' + 'Are you a mindful user of the monetary system?' + '</span>' + '</br>' + 'Take this short quiz and decide what type of currency meets your needs.';
    }, false)

    lang_pl.addEventListener('click', function(e){
        e.stopPropagation();
        lang_choosen();
        text.innerHTML = 'CO JEST LEPSZE?';
        lang_index += 1;
        welcome_text.innerHTML = '<span style="font-weight: 600">' + 'Czy jesteś świadomym użytkownikiem systemu pieniężnego?' + '</span>' + '</br>' + 'Odpowiedz na kilka pytań i zdecyduj jaki rodzaj waluty jest dla Ciebie najlepszy.';
    }, false) 
    
    start.addEventListener('click', function(e){
        e.stopPropagation();
        document.body.removeChild(start);
        document.body.removeChild(welcome);
        document.body.appendChild(crypto_box);
        document.body.appendChild(fiat_box);
        crypto_box.appendChild(crypto_text);
        fiat_box.appendChild(fiat_text);
        document.body.appendChild(bar);
        document.body.appendChild(text);
        bar.appendChild(indicator);
        display_crypto(c_num);
        display_fiat(f_num);
        mind_fuck();
    }, false)

    function move_indicator() {
        indicator.style.width = indicator.offsetWidth + (document.body.offsetWidth / 12) + 'px';
        indicator.style.transition = 300 + 'ms' ;
    }

    c_num = 0;
    function display_crypto(c_num) {
        c_features_en = [
            'This currency value is set by a free market.',
            'This currency is secured by unbreakable and unchangeable mathematics laws.',
            'About 2-3% of this currency supply is used for money laundering and funding terrorism.',
            'Money issue is precisely set for the next 100 years and it has a limited supply.',
            'This type of currency struggles when it comes to universal acceptation.',
            'Based on an open system that allows anyone to join, could be accessed anonymously.',
            'It is a global system with no exceptions, international money transfer takes from seconds to a few minutes.',
            'Works 24 hours a day, every day. Had never stopped working.',
            'Its technical details are available for everyone and it is open-sourced.',
            "Had never been robbed (or hacked) directly from the user's account.",
            'Transactions made with this currency are impossible to reverse.',
            'This currency is resistant to any kind of centralized control, it is fully managed by users in a democratic way.',
            'Based on an immune database, thousands of backups are distributed around the globe and updated every 10 minutes.'];
        c_features_pl = [
            'Wartość tej waluty ustalana jest przez wolny rynek.',
            'Waluta ta jest zabezpieczona prawami matematyki, nie da się ich złamać ani zmienić.',
            'Około 2-3% zasobów tej waluty jest wykorzystywana do prania brudnych pieniędzy i finansowania teroryzmu.',
            'Emisja nowych jednostek jest precyzyjnie określona na nastepne 100 lat, ich maksymalna ilość również.',
            'Ta waluta boryka się z problemem powszechnej akceptacji.',
            'Oparta na otwartym systemie, każdy może z niej korzystać. Możliwe jest anonimowe użytkowanie tej waluty.',
            'Działa globalnie, bez żadnych wyjątków. Przelew międzynarodowy zajmuje od kilku sekund do kilkunastu minut.',
            'Działa 24 godziny na dobę, siedem dni w tygodniu. Nigdy nie odnotowano przerwy w pracy.',
            'Jej wszystkie szczegóły techniczne są publicznie dostępne, jest tworzona przez wiele niezależnych osób.',
            "Nigdy nie odnotowano przypadku kradzieży lub skutecznego 'hackowania' konta użytkownika.",
            'Transkacje wykonane przy jej pomocy są nieodwracalne.',
            'Ta waluta nie może być centralnie sterowana, to użytkownicy mają kontrolę i sprawują ją w sposób demokratyczny.',
            'Oparta na niezmiennej i niezniszczalnej bazie danych. Jej kopie zapasowe rozsiane są w tysiącach sztuk po całym świecie, co 10 minut są aktualizowane.'];
        if (lang_index == 0) {
            crypto_text.innerHTML = c_features_en[c_num];
        } else if (lang_index == 1) {
            crypto_text.innerHTML = c_features_pl[c_num];
        }
    }

    f_num = 0;
    function display_fiat(f_num) {
        f_features_en = [
            "The value of this one is based on the local government's power.",
            'This currency is secured by laws established by humans, possible to be broken or changed.',
            'Approximately 19-23% of its capitalization is used for immoral purposes (terrorism and money laundering).',
            'Future money issue is impossible to be estimated, supply is unlimited.',
            'This currency is widely accepted around the world.',
            'Joining its system is possible after meeting many requirements and revealing users identity.',
            'Some countries are detached from this currency ecosystem, international transfer takes at least a few days (except high fee transfers).',
            'Works mostly 16 hours a day, excepting weekends and holidays when it does not work. Had a few shutdowns in the past.',
            'This system mechanics are highly classified.',
            'There were few incidents of highjacking it from private accounts or main vaults.',
            'There is a possibility of reversing the transaction once it was already sent.',
            'This currency is controlled by local governments and its own users have tiny impact on it.',
            'This currency uses a database which is not immune to changes. Amount of existing copies, their location and update frequency is classified.'];
        f_features_pl = [
            'Jej wartość jest ściśle powiązana z siłą i stabilnością lokalnego rządu.',
            'Ta waluta korzysta z praw ustalonych przez człowieka, możliwe jest ich złamanie lub zmiana',
            'Szacunkowo 19-23% jest wykorzystywane niezgodnie z prawem.',
            'Przyszła emisja nowych jednostek jest niemożliwa do przewidzenia, maksymalna ilość jest nieograniczona.',
            'Ten rodzaj waluty jest powszechnie akceptowany na całym świecie.',
            'Dołączenie do sytemu pieniężnego jest możliwe po spęłnieniu szeregu kryteriów i ujawnieniu swojej tożsamości.',
            'Niektóre kraje są pozbawione możliwości korzystania z tej waluty. Transfer środków między dwoma państwami zajmuje kilka dni (chyba że zapłacisz sporą prowizję).',
            'Działa 16 godzin na dobę, z wyjątkiem weekendów i świąt gdy nie działa w ogóle. Odnotowano sporadyczne przypadki awarii i przerw w działaniu.',
            'Detale dotyczące jej działania są ściśle tajne',
            'Sporadycznie dochodzi do wykradania środków z prywatnych kont i głównych sejfów.',
            'Istnieje możliwość odwrócenia transakcji, nawet po jej wysłaniu.',
            'Ta waluta jest kontrolowana przez lokalne rządy, uzytkownicy maja nieznaczny wpływ na jej działanie.',
            'Ta korzysta z bazy danych podatnej na zmiany. Liczba istniejących kopii zapasowych, ich położenie i czestotliwość aktualizacji są utajnione.'];
        if (lang_index == 0) {
            fiat_text.innerHTML = f_features_en[f_num];
        } else if (lang_index == 1) {
            fiat_text.innerHTML = f_features_pl[f_num];
        }
    }

    crypto_points = 0;
    fiat_points = 0;

    function spread_the_virus() {
        if (crypto_points >= fiat_points) {
            if (lang_index == 0) {
                results_box.innerHTML = 'Looks like you prefer Bitcoin, learn how it works and start using it every day.' + '</br>' + '</br>' + 'Discover basic technical datails:' + '</br>' + '<a href="https://bitcoin.org/en/how-it-works"><div class="btc"></div></a>' + '</br>' + 'Exchange your FIAT for Bitcoin here:' + '</br>' + '<a href="https://www.coinbase.com/join/5a8492aed5eb5705ecab8e0c"><div class="coinbase"></div></a>' + '</br>' + ',or find the nearest BTC ATM:' + '</br>' + '<a href="https://coinatmradar.com"><div class="coin_radar"></div></a>' + '</br>';
            } else if (lang_index == 1) {
                results_box.innerHTML = 'Wygląda na to, że Bitcoin odpowiada na twoje potrzeby najlepiej. Dowiedz się jak działa i zacznij z niego korzystać' + '</br>' + '</br>' + 'Odkryj sposób działania:' + '</br>' + '<a href="https://bitcoin.org/pl/jak-to-dziala"><div class="btc"></div></a>' + '</br>' + 'Wymień swoje pieniądze na Bitcoina tutaj:' + '</br>' + '<a href="https://www.coinbase.com/join/5a8492aed5eb5705ecab8e0c"><div class="coinbase"></div></a>' + '</br>' + ',lub znajdź najblizszy Bitomat:' + '</br>' + '<a href="https://coinatmradar.com"><div class="coin_radar"></div></a>' + '</br>';
            }
        } else if (fiat_points >= crypto_points) {
            if (lang_index == 0) {
                results_box.innerHTML = 'It seems like you are a fortunate person, FIAT currencies are the most popular way of exchanging value.';
            } else if (lang_index == 1) {
                results_box.innerHTML = 'Wygląda na to, że jesteś szczęśliwym użytkownikiem walut fiducjarnych. To obecnie najpopularniejsza metoda wymiany wartości.';
            }
        }
    }

    function end_screen() {
        document.body.removeChild(crypto_box);
        document.body.removeChild(fiat_box);
        crypto_box.removeChild(crypto_text);
        fiat_box.removeChild(fiat_text);
        document.body.removeChild(bar);
        document.body.removeChild(text);
        bar.removeChild(indicator);
        document.body.appendChild(end_div);
        end_div.appendChild(results);
        end_div.appendChild(results_box);
        fiat_score = (Math.floor(fiat_points * 7.6));
        crypto_score = (Math.floor(crypto_points * 7.6));
            var missing_score = (100 - crypto_score - fiat_score);
            crypto_score = crypto_score + (missing_score / 2) + '%';
            fiat_score = fiat_score + (missing_score / 2) + '%';
                if (lang_index == 0) {
                    results.innerHTML = 'Here are your results:' + '</br>' + 'FIAT currencies ($USD, €EURO, etc.) suits ' + '<span style="color: #FD6A02">' + fiat_score + '</span>' + ' of your needs.' + '</br>' + 'Cryptocurrency (₿BITCOIN) covers ' + '<span style="color: #FD6A02">' + crypto_score + '</span>' + ' of it.'
                } else if (lang_index == 1) {
                    results.innerHTML = 'Twoje podsumowanie: ' + '</br>' + 'Waluty fiducjarne ($USD, złPLN) spełniają ' + '<span style="color: #FD6A02">' + fiat_score + '</span>' + ' twoich potrzeb.' + '</br>' + 'Kryptowaluta (₿BITCOIN) spełnia ' + '<span style="color: #FD6A02">' + crypto_score + '</span>' + ' z nich.'
                }
        spread_the_virus();
    }

    crypto_box.addEventListener('click',  function(e){
        e.stopPropagation();
        add_class(crypto_box, 'clicked');
        setTimeout(function() {
            move_indicator();
            mind_fuck();
            display_crypto(c_num);
            display_fiat(f_num);
            crypto_box.classList.remove('clicked');
        }, 301)
        c_num += 1;
        f_num += 1;
        crypto_points += 1;
        if (crypto_points + fiat_points >= 13) {
            end_screen();
        }
    }, false)

    fiat_box.addEventListener('click',  function(e){
        e.stopPropagation();
        add_class(fiat_box, 'clicked');
        setTimeout(function() {
            mind_fuck();
            fiat_box.classList.remove('clicked');
            move_indicator();
            display_crypto(c_num);
            display_fiat(f_num);
        }, 301)
        f_num += 1;
        c_num += 1;
        fiat_points += 1;
        if (crypto_points + fiat_points >= 13) {
            end_screen();
        }
    }, false)
}());