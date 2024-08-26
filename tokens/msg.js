const chalk = require( 'chalk' );
chalk.enabled = true;

module.exports = ( { msg, method } ) => {
    msgArr = msg.split('\n');

    return msgArr.map(line => {
        if (method === 'error') {
            return chalk.red(line);
        }
        else if (method === 'warn') {
            return chalk.yellow(line);
        }
        else if (method === 'info') {
            return chalk.blue(line);
        }

        return line;
    }).join('\n');
};
