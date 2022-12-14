function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already been started');

        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch has already been stopped');
        
        running = false;
        endTime = new Date();
        const seconds = ( endTime.getTime() - startTime.getTime() ) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime = 0;
        endTime = 0;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration}
    });
};

