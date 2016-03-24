Příkazy:
=========

X specifikuje číslo.
Argumenty můžou být různé.
Uvedené příkazy se vyskytují v BasicBotu. Příkazy s hvězdičkou jsou pouze v Hudba je Všetko.*


Manažér
-------

|Příkaz | Argument |  Popis |
|:------:|:---------:|:--------------------------------------:|
|*!bitch | @jméno | Zvolí vybraného uživatele jako osobní bitch. |
|!afklimit | X | Nastaví maximální AFK limit. |
|!botname | (název bota) | Změní jméno bota. |
|!bouncer+ | | Zapnutí/Vypnutí speciálních pravomocí vyhazovačů. |
|!skippos | X | Nastaví X pozici, která přehazuje uživatele ve frontě za pomocí !lockskip |
|!clearchat | | Vymaže chat. |
|!cycle | | Zapnutí/Vypnutí automatického připojení do fronty po dohraní písně. |
|!cycletimer | X | Nastaví maximální počet automatického připojování za předpokladu zapnutého příkazu !cycleguard |
|!language | (jazyk) | Změní jazyk bota. |
|!locktimer | X | Nastaví maximální čas zamknuté fronty za předpokladu zapnutého příkazu !lockguard |
|!maxlength | X | Nastaví maximální délku písně. |
|!logout | | Odhlásí účet bota. |
|!refresh | | Aktualizuje prohlížeč zapnutého bota. |
|!usercmdcd | X | Nastaví cooldown příkazů pro šedé uživatelé. |
|!usercommands | | Zapnutí/Vypnutí příkazů pro šedé uživatelé. |
|!voteskip | (X) | Nastaví počet mehů pro přeskočení písně. |

Vyhazovač+
--------

|Příkaz | Argument |  Popis |
|:------:|:---------:|:--------------------------------------:|
|!add | @jméno | Přidá zvoleného uživatele do fronty. |
|!afkremoval | | Resetuje AFK všem uživatelům. |
|!autoskip | | Po skončení písně automaticky přeskočí ji za předpokladu bugu s DJováním. |
|!deletechat | @jméno | Vymaže zprávy daného uživatele. |
|!lock | | Uzamkne frontu. |
|!lockdown | | Pouze staff můžete chatovat v místnosti. |
|!move | @jméno (X) | Přesune uživatele ve frontě na X pozici. (Defaultní pozice značí 1. místo) |
|!remove | @jméno | Odstraní uživatele z fronty. |
|!roulette | | Zahájení rulety. |
|!songstats | | Zapnutí/Vypnutí statistiky skladeb. |
|!unlock | | Odemkne frontu. |
|!welcome | | Zapnutí/Vypnutí uvítací zprávy. |

Vyhazovač
-------

|Příkaz | Argument |  Popis |
|:------:|:---------:|:--------------------------------------:|
|!active | (X) | Napíše počet zpráv za posledních X minut. (Defaultních minut je 60 bez zadání X) |
|!afkreset | @jméno | Resetuje AFK danému uživateli. |
|!afktime | @jméno | Zobrazí, jak dlouho je uživatel AFK. |
|!autodisable | | Zapnutí/Vypnutí autodisable systému. |
|!ban | @jméno | Zabanuje uživatele na 24 hodin. |
|!blacklist / !bl | Jméno blacklistu | Přidá song do zadaného blacklistu. |
|!commanddeletion | | Zapnutí/Vypnutí mazání zpráv botem. |
|!blinfo | | Vypíše informace o zařazení do blacklistu. |
|!cycleguard | | Zapnutí/Vypnutí cycleguard systému. |
|!dclookup / !dc | (@jméno) | Vrátí zpět zadaného uživatele na předešlé místo ve frontě před přerušením spojení. |
|!english | @jméno | Napíše zadanému uživateli, aby psal pouze anglicky v chatu. |
|!eta | (@jméno) | Zjištění doby uživatele k zahrání písně. Pokuď není zadáno @jméno, dozvídá se konkrétní uživatel svojí dobu. |
|!filter | | Zapnutí/Vypnutí filtru sprostých slov nebo žádostí o přeskočení písně. |
|!forceskip | | Rychlé přeskočení písně. |
|!historyskip | | Zapnutí/Vypnutí hlídaní písní v historii místnosti. |
|!jointime | @user | Zobrazí dobu uživatele v místnosti od zapnutí bota. |
|!kick | (X) | Vyhodí uživatele z místnosti na X sekund. (Automaticky udělí unban) |
|!kill | | Vypne bota. |
|!lockguard | | Zapnutí/Vypnutí lockguard systému. |
|!lockskip | (důvod) | Přeskočí, zamkne frontu a vrátí uživatele na zvolenou pozici. (Pozice lze měnit v příkazu !skippos) |
|!motd | (X)/(zpráva) | Zobrazí zprávu dne za X odehraných skladeb. |
|!mute | @jméno/(X) | Umlčí uživatele na X minut. |
|!reload | | Aktualizuje bota. |
|!restricteta | | Zapnutí/Vypnutí doby, za kterou mohou šedí uživatelé využívat příkazy. |
|!sessionstats | | Zobrazení aktuálních statistik. |
|!skip | (důvod) | Přeskočí uživatele. Pokuď je zadán platný důvod - přeskočí a přesune uživatele na první místo ve frontě. |
|!status | | Zobrazuje nastavení bota. |
|!timeguard | | Zapnutí/Vypnutí timeguard sytému.|
|!togglebl | | Zapnutí/Vypnutí blacklistu. |
|!togglemotd | | Zapnutí/Vypnutí zprávy dne. |
|!togglevoteskip | | Zapnutí/Vypnutí přeskočení písně na počet mehů. |
|!unban | @jméno | Odbanuje uživatele. |
|!unmute | @jméno/all | Odmlčí daného uživatele nebo všechny v místnosti. |
|!voteratio | @jméno | Zobrazí počty wootů, mehů a grabů daného uživatele. |
|!whois | @jméno | Vypíše informace o daném uživateli. |

Rezidentní DJ
-----------

|Příkaz | Argument |  Popis |
|:------:|:---------:|:--------------------------------------:|
|*!fuck | @jméno | Vyjádři nenávist k danému uživateli. |
|!link | | Pošle YouTube link aktuální písně.




Uživatel
----

|Příkaz | Argument |  Popis |
|:------:|:---------:|:--------------------------------------:|
|*!alkohol | @jméno | Dá uživateli panáka alkoholu. |
|*!money / !koupit | @jméno | Koupí náhodou věc uživateli. |
|*!zvire | @jméno | Napíše uživateli společné rysy s náhodným zvířetem. |
|*!lulu | @jméno | Projeví na někom svojí nadrženost. |
|*!sklep | @jméno | Pozve uživatele do sklepa. |
|*!love | @jméno | Vyjádři uživateli lásku. |
|*!facka | @jméno | Dá uživateli facku. |
|*!afk | | Napíše o uživateli, že je AFK. |
|*!zpet | | Napíše o uživateli, že se vrátil zpět. |
|*!ego | | Uživatel si může zvýšit ego. (Berte s nadhledem) |
|*!hug | @jméno | Virtuálně obejme uživatele. |
|*!update | | Napíše stránku s aktualizacemi bota. |
|!8ball/!ask | (otázka) | Zeptá se bota na otázku typu ano či ne. Bot odpovídá v náhodných variantách. |
|!autowoot | | Poskytne link na populární autowoot RCS. |
|!ba | | Vysvětlí v kostce rank Brand Ambassadora. |
|*!prikazy | | Poskytne link na seznam příkazů. |
|!cookie | (@jméno) | Pošle uživateli sušenku. |
|!dclookup / !dc | | Vrátí uživatele na předchozí pozici ve frontě před přerušením připojení s místnosti. |
|!emoji | | Dá link na stránku s emotikony. |
|!eta | | Zobrazuje dobu, kdy se dostane uživatel na řadu z fronty. |
|!fb | | Napíše link na naší Facebookové stránky. |
|!ghostbuster | @jméno | Zkontroluje, zdá je uživatel v bugu a botem neviditelný. |
|!gif | (téma) | Zobrazí náhodný gif či gif na zvolené téma. |
|!help | | Dá obrázek pro začátečníky plug.dj. |
|!join | | Připojí do probíhajíci rulety. |
|!leave | | Odejde z probíhajíci rulety. |
|!link | | Pokuď je uživatel DJ, vypíše YouTube link na aktuální skladbu. |
|!op | | Napíše link na seznam ohraných skladeb. |
|!ping | | Pong! |
|!purchase | | Napíše link na koupi Plug Not. (Jíž neplatné) |
|!rules | | Napíše stránku s pravidly komunity. |
|!theme | | Hodí link na stránku s tématem. |
|!thor | | Přesune uživatele na první místo, pokuď je zvolen kladivem. |
|!website | | Dá link na webové stránky. |
|!youtube | | Pošle odkaz na YouTube kanál komunity. |

Informace o lidech ze staffu
-----------

|Příkaz | 
|:------:|
|*!thomas |
|*!germ |
|*!sumer |
|*!derp |
|*!franta |
|*!psycho |
|*!nicmoc |
|*!dykobraz |
|*!kebabčiči |
|*!operaco |
|*!misul |
