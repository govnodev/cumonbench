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
    'Бартоломей'
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
    'Канифоль'
];
var repl = function(textNode) {
    textNode.data = textNode.data.replace('Бенедикт', fl[Math.floor(Math.random() * fl.length)]);
    textNode.data = textNode.data.replace('Кембербетч', sl[Math.floor(Math.random() * sl.length)]);
    textNode.data = textNode.data.replace('Камбербетч', sl[Math.floor(Math.random() * sl.length)]);
    textNode.data = textNode.data.replace('Камбербэтч', sl[Math.floor(Math.random() * sl.length)]);
    textNode.data = textNode.data.replace('Кембербэтч', sl[Math.floor(Math.random() * sl.length)]);
    textNode.data = textNode.data.replace('Кэмбербетч', sl[Math.floor(Math.random() * sl.length)]);
    textNode.data = textNode.data.replace('Кэмбербэтч', sl[Math.floor(Math.random() * sl.length)]);

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
