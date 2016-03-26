import Polymer from 'polymer';

let elements = document.querySelectorAll('fullwidth-element');

describe('<fullwidth-element>', () => {
    it('wraps text node with <span style="white-space: pre-wrap;">', () => {
        let converted = '<span style="white-space: pre-wrap;">' +
            'Ｈｅｌｌｏ Ｗｏｒｌｄ！</span>';
        expect(Polymer.dom(elements[0]).innerHTML).to.equal(converted);
    });

    it('works with nested tags', () => {
        let converted = '<span style="white-space: pre-wrap;">Ｈｅｌｌｏ ' +
            '</span><b><span style="white-space: pre-wrap;">Ｗｏｒｌｄ！' +
            '</span></b>';
        expect(Polymer.dom(elements[1]).innerHTML).to.equal(converted);
    });

    it('with "nowrap" attribute wraps every word with ' +
       '<span style="white-space: nowrap;">', () => {
        let converted = '<span style="white-space: pre-wrap;">' +
            '<span style="white-space: nowrap;">Ｈｅｌｌｏ</span> ' +
            '<span style="white-space: nowrap;">Ｗｏｒｌｄ！</span> ' +
            '</span>';
        expect(Polymer.dom(elements[2]).innerHTML).to.equal(converted);
    });

    it('with "spacing" attribute multiplies the amount of spaces ' +
       'between words by the corresponding number', () => {
        let converted = '<span style="white-space: pre-wrap;">' +
            'Ｈｅｌｌｏ      Ｗｏｒｌｄ！</span>';
        expect(Polymer.dom(elements[3]).innerHTML).to.equal(converted);
    });
});
