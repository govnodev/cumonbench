var fl = [
    'Бенефукт',
    'Бондарчук',
    'Кемпертон',
    'Бенетротч',
    'Кумбербект',
    'Бенефект',
    'Бендикус',
    'Бинудист',
    'Бубалех',
    'Бундесвер',
    'Базилевс',
    'Балерун',
    'Бедуин',
    'Бенадрил',
    'Бафомет',
    'Бугуртуч',
    'Бенефратор',
    'Бандероль',
    'Бартоломей',
    'Бонягух',
    'Баттерворт'
];
var sl = [
    'Компертач',
    'Копрочлен',
    'Камберфотч',
    'Бетерсквоч',
    'Кумберфиц',
    'Корфилиотц',
    'Кукумберус',
    'Кибердвач',
    'Кореолан',
    'Калымпечь',
    'Камбырбыр',
    'Курткобейнов',
    'Титомир',
    'Камвхорач',
    'Кримберглюхтер',
    'Дяриндярин',
    'Канифоль',
    'Кукупник'
];
/* бля, нибейте, спиздил */
var firstnamelist = ["Bumblebee", "Bandersnatch", "Broccoli", "Rinkydink", "Bombadil", "Boilerdang",
    "Bandicoot", "Fragglerock", "Muffintop", "Crumplesack", "Congleton", "Blubberdick",
    "Buffalo", "Benadryl", "Butterfree", "Burberry", "Whippersnatch", "Buttermilk",
    "Beezlebub", "Budapest", "Boilerdang", "Blubberwhale", "Bumberstump", "Bulbasaur",
    "Cogglesnatch", "Liverswort", "Bodybuild", "Johnnycash", "Bendydick", "Burgerking",
    "Bonaparte", "Hairycooch", "Bunsenburner", "Billiardball", "Bukkake", "Baseballmitt",
    "Blubberbutt", "Baseballbat", "Rumblesack", "Barister", "Danglerack", "Rinkydink",
    "Bombadil", "Honkytonk", "Billyray", "Bumbleshack", "Snorkeldink", "Anglerfish",
    "Beetlejuice", "Bedlington", "Bandicoot", "Boobytrap", "Blenderdick", "Bentobox",
    "Anallube", "Pallettown", "Wimbledon", "Hairyballs", "Buttercup", "Blasphemy",
    "Syphilis", "Snorkeldink", "Brandenburg", "Barbituate", "Snozzlebert", "Tiddleywomp",
    "Bouillabaisse", "Wellington", "Benetton", "Bendandsnap", "Timothy", "Brewery",
    "Bentobox", "Brandybuck"
];
var lastnamelist = ["Coddleswort", "Curdlesnoot", "Calldispatch", "Humperdinck", "Rivendell",
    "Cuttlefish", "Lingerie", "Vegemite", "Ampersand", "Cumberbund", "Candycrush",
    "Clombyclomp", "Cragglethatch", "Nottinghill", "Cabbagepatch", "Camouflage",
    "Creamsicle", "Curdlemilk", "Upperclass", "Frumblesnatch", "Crumplehorn",
    "Talisman", "Candlestick", "Chesterfield", "Bumbersplat", "Scratchnsniff",
    "Snugglesnatch", "Charizard", "Ballsacksnip", "Carrotstick", "Cumbercooch",
    "Crackerjack", "Crucifix", "Cuckatoo", "Cockletit", "Collywog", "Gigglesnort",
    "Capncrunch", "Covergirl", "Cumbersnatch", "Countryside", "Coggleswort",
    "Splishnsplash", "Copperwire", "Animorph", "Curdledmilk", "Cheddarcheese",
    "Cottagecheese", "Crumplehorn", "Snickersbar", "Banglesnatch", "Stinkyrash",
    "Cameltoe", "Chickenbroth", "Concubine", "Candygram", "Moldyspore", "Chuckecheese",
    "Cankersore", "Crimpysnitch", "Wafflesmack", "Chowderpants", "Toodlesnoot",
    "Clavichord", "Cuckooclock", "Oxfordshire", "Cumbersome", "Chickenstrips",
    "Battleship", "Commonwealth", "Cunningsnatch", "Custardbath", "Kryptonite"
];
var repl = function(textNode) {
    textNode.data = textNode.data.replace('Бенедикт', fl[Math.floor(Math.random() * fl.length)]);
	textNode.data = textNode.data.replace('бенедикт', fl[Math.floor(Math.random() * fl.length)]);
    textNode.data = textNode.data.replace('Кембербетч', sl[Math.floor(Math.random() * sl.length)]);
	textNode.data = textNode.data.replace('кембербетч', sl[Math.floor(Math.random() * sl.length)]);
    textNode.data = textNode.data.replace('Камбербетч', sl[Math.floor(Math.random() * sl.length)]);
	textNode.data = textNode.data.replace('камбербетч', sl[Math.floor(Math.random() * sl.length)]);
    textNode.data = textNode.data.replace('Камбербэтч', sl[Math.floor(Math.random() * sl.length)]);
	textNode.data = textNode.data.replace('камбербэтч', sl[Math.floor(Math.random() * sl.length)]);
    textNode.data = textNode.data.replace('Кембербэтч', sl[Math.floor(Math.random() * sl.length)]);
	textNode.data = textNode.data.replace('кембербэтч', sl[Math.floor(Math.random() * sl.length)]);
    textNode.data = textNode.data.replace('Кэмбербетч', sl[Math.floor(Math.random() * sl.length)]);
	textNode.data = textNode.data.replace('кэмбербетч', sl[Math.floor(Math.random() * sl.length)]);
    textNode.data = textNode.data.replace('Кэмбербэтч', sl[Math.floor(Math.random() * sl.length)]);
	textNode.data = textNode.data.replace('кэмбербэтч', sl[Math.floor(Math.random() * sl.length)]);
    textNode.data = textNode.data.replace('Benedict', firstnamelist[Math.floor(Math.random() * firstnamelist.length)]);
    textNode.data = textNode.data.replace('Cumberbatch', lastnamelist[Math.floor(Math.random() * lastnamelist.length)]);
	textNode.data = textNode.data.replace('benedict', firstnamelist[Math.floor(Math.random() * firstnamelist.length)]);
    textNode.data = textNode.data.replace('cumberbatch', lastnamelist[Math.floor(Math.random() * lastnamelist.length)]);
    textNode.data = textNode.data.replace('BENEDICT', lastnamelist[Math.floor(Math.random() * firstnamelist.length)]);
    textNode.data = textNode.data.replace('CUMBERBATCH', lastnamelist[Math.floor(Math.random() * lastnamelist.length)]);

}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes) {
            [].slice.call(mutation.addedNodes).forEach(function(node) {
                if (node.nodeName.toLowerCase() == "#text") {
                    repl(node);
                }
            });
        }
    });
});

observer.observe(document, {
    childList: true,
    subtree: true
});
