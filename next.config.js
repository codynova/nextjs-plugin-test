const fs = require('fs')
const path = require('path')

class MyPlugin {
    constructor (isServer) {
        this.counter = 0
        this.isServer = isServer
    }

    apply (compiler) {
        compiler.hooks.watchRun.tap('MyPlugin', () => {
            this.counter += 1
            console.log(`${this.isServer ? 'Server' : 'Client'} MyPlugin counter = `, this.counter)
            
            const filePath = path.resolve('./theme/test.js')
            const dataString = `export default ${JSON.stringify({ data: 'Hello World' })}`
            fs.writeFileSync(filePath, dataString)
        })
    }
}

module.exports = {
	webpack: (config, { isServer }) => {
		config.plugins.push(new MyPlugin(isServer))
		return config
	}
}