const { QMainWindow, QPushButton ,QGridLayout, QWidget, QLabel, FlexLayout, QBoxLayout } = require('@nodegui/nodegui');

var win = new QMainWindow();
    //var queryLayout = new testata();

    var main = new QWidget();
    var mainLayout = new FlexLayout(main);
    mainLayout.addWidget(testata());
    main.setLayout(mainLayout);
    main.setInlineStyle(`
        background-color: #303030;
    `)
    win.setCentralWidget(main);
    main.repaint();
    win.show();
    global.win = win;
function testata() {
    return CreateButtonGridWidget(5,3)
    const view = new QWidget();
    const layout = new QGridLayout();
    view.setLayout(layout);
    layout.setSpacing(12);
    layout.setRowMinimumHeight(0,12)
    view.setInlineStyle(`
        background-color: #222222;
        border: 1px solid yellow;
        flex: 1;
    `);
    const label = new QPushButton();
    label.setText("");
    label.setMaximumSize(50,50);

    const label2 = new QPushButton();
    label2.setText("");
    label2.setMaximumSize(50,50);

    layout.addWidget(label,0,0);
    layout.addWidget(label2,0,1);
    return view;
}
function CreateButtonGridWidget(x,y) {
    const view = new QWidget();
    const layout = new QGridLayout();
    view.setLayout(layout);
    layout.setSpacing(12);
    view.setInlineStyle(`
        flex: 1;
    `);
    for(var yi = 0; y > yi; yi++){
        for(var xi = 0; x > xi; xi++){
            console.log("yi:" + yi + " xi:"+xi)
            
            layout.addWidget(CreateButton(),yi,xi);
        }
    }
    return view;
}
function CreateButton() {
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