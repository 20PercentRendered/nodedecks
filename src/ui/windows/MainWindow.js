const { QMainWindow, QWidget, FlexLayout } = require('@nodegui/nodegui');
module.exports.create = function CreateMainWindow() {
    var win = new QMainWindow();
    var mainWidget = CreateMainWidget();
    
    win.setCentralWidget(mainWidget);
    global.win = win;
    return win;
}
function CreateLayout(mainWidget) {
    return new FlexLayout(mainWidget);
}
function CreateMainWidget() {
    var main = new QWidget();
    main.setLayout(CreateLayout());
    main.setObjectName("mainWidget");
    main.setInlineStyle(`
        background-color: #303030;
    `)
    return main;
}
