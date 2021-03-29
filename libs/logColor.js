module.exports = (type, text) => {
    type?console.log("\033[41;30m Error " + "\033[40;31m" + " " + text + " "+ "\033[0m")
        :console.log("\033[42;30m Done " + "\033[40;32m" + " " + text + " " + "\033[0m")
}