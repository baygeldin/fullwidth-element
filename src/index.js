import fullwidth from 'fullwidth';

export function init(elem) {
    conso
    let node, textNodes = [];
    let walker = document.createTreeWalker(elem,
        NodeFilter.SHOW_TEXT, null, false);
    while ((node = walker.nextNode())) textNodes.push(node);
    console.log(textNodes);
    //let lol = document.createTextNode('dfsdf');
    //Polymer.dom(elem.root).appendChild(lol);
    console.log(window, fullwidth);
}
