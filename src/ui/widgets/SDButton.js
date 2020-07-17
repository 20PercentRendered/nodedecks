const { QPushButton } = require('@nodegui/nodegui');
module.exports.create = function CreateButton() {
    const size = 56;
    var button = new QPushButton();
    button.setInlineStyle(`
        border: 2px solid #474747;
        border-radius: 12px;
        background-color: #222222;
    `)
    button.setMaximumSize(size,size);
    button.setMinimumSize(size,size);
    return button;
}