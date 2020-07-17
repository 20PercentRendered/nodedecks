const { QGridLayout, QWidget } = require('@nodegui/nodegui');
const button = require('./SDButton');
module.exports.create = function CreateButtonGridWidget(x,y) {
    const view = new QWidget();
    const layout = new QGridLayout();
    view.setLayout(layout);
    layout.setSpacing(12);
    view.setInlineStyle(`
        flex: 1;
    `);
    //probably horrifically inefficient
    for(var yi = 0; y > yi; yi++){
        for(var xi = 0; x > xi; xi++){
            layout.addWidget(button.create(),yi,xi);
        }
    }
    return view;
}