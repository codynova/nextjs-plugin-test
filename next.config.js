class MyPlugin {
    constructor (isServer) {
        this.counter = 0
        this.isServer = isServer
    }

    apply (compiler) {
        compiler.hooks.watchRun.tapAsync('MyPlugin', async () => {
            this.counter += 1
            console.log(`${this.isServer ? 'Server' : 'Client'} MyPlugin counter = `, this.counter)
        })
    }
}

module.exports = {
	webpack: (config, { isServer }) => {
		config.plugins.push(new MyPlugin(isServer))
		return config
	}
}