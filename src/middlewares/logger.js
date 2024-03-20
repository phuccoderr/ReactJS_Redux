const myLogger = store => next => action => {
    next(action);
}

export default myLogger;