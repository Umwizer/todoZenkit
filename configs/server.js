const configs  = {
    port:process.env.PORT || 3000,
    mongoURI:process.env.MONGO_URI || 'mongodb://localhost:27017/todoZenkit',
    secret:process.env.SECRET || 'mysecret'
}
export default configs ;