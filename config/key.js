if (process.env.NODE_ENV === 'production'){ // 환경변수가 production일때는
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}