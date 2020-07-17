var configs = []; //array of require's for the config files
const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require; //webpack is dumb and doesn't allow you to load non-static files
const os = require('os');
const fs = require('fs');
const path = require('path');
const mkdir = require('mkdirp')

module.exports = getConfig;
module.exports.loadConfigs = loadConfigs;
module.exports.saveConfigs = saveConfigs;

function getConfig(configName) {
    if (configs == null) {
        console.log("Config")
        loadConfigs();
    }
    if (configs[configName]) {
        return configs[configName];
    } else {
        configs[configName] = {};
        return {};
    }
}
function loadConfigs() {
    mkdir.sync(configPath());
    fs.readdirSync(configPath()).forEach(filename => {
        var file = path.join(configPath(), filename);
        configs[path.parse(filename).name] = requireFunc(file);
    });
}
function saveConfigs() {
    mkdir.sync(configPath());
    for (var name in configs) {
        console.log(name+" : "+configs[name]);
        const filepath = path.join(configPath(),name+".json")
        fs.writeFileSync(filepath,JSON.stringify(configs[name]));
    }
}
function configPath() {
    switch (os.platform()) {
        case 'linux':
            return path.join(os.homedir(),".config","nodedecks","config");
        break;
        case 'win32':
            return path.join(os.homedir(),"Appdata","Roaming","nodedecks","config");
        break;
    }
};