import fullwidth from 'fullwidth';
import Polymer from 'polymer';

export function ready() {
    let node, textNodes = [];
    let walker = document.createTreeWalker(this,
        NodeFilter.SHOW_TEXT, null, false);
    let { nowrap, spacing } = this;
    //for (let node; (node = walker.nextNode());) {
    while ((node = walker.nextNode())) {
        textNodes.push(node); }
    for (node of textNodes) {
        let words = node.nodeValue.split(' ');
        let wrapper = document.createElement('span');
        wrapper.style.whiteSpace = 'pre-wrap';
        if (nowrap) {
            for (let word of words) {
                let elem = document.createElement('span');
                elem.style.whiteSpace = 'nowrap';
                elem.textContent = fullwidth(word);
                let spaces = document.createTextNode(' '.repeat(spacing));
                wrapper.appendChild(elem);
                wrapper.appendChild(spaces);
            }
        } else {
            let text = words.map(str => fullwidth(str))
                .join(' '.repeat(spacing));
            wrapper.appendChild(document.createTextNode(text));
        }
        let parent = Polymer.dom(node).parentNode;
        Polymer.dom(parent).insertBefore(wrapper, node);
        Polymer.dom(parent).removeChild(node);
    }
}
