module.exports.getMatricesByModel = function getMatricesByModel(model) {
    switch (model) {
        case 'original':
        return {x:5,y:3}
        case 'mini':
        return {x:3,y:2}
        case 'xl':
        return {x:8,y:4}
        case 'originalv2':
        return {x:5,y:3}
    }
}