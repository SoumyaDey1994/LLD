class Logger {
    constructor() {
        if(Logger.instance){
            throw new Error("Please use getInstance() method");
        }

        this.level = 'info';
        this.logs = [];
        Logger.instance = this;
    }

    setLevel(level) {
        this.level = level;
    }

    log(msg) {
        const formattedMsg = `${new Date().toISOString()}: ${this.level}: ${msg}`;
        this.logs.push(formattedMsg);
        console.log(formattedMsg);
    }

    static getInstance() {
        return Logger.instance || new Logger();
    }
}

const logger = Logger.getInstance();
logger.log("Hello World");

logger.setLevel('debug');
logger.log(`Reading data from file...`);

logger.setLevel('warning');
logger.log(`Memory utilization is > 80%. Please check usage...`);

logger.setLevel('error');
logger.log(`Error while uploading file, destination location not found`);

