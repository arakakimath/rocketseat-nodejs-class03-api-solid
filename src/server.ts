import { app } from './app'

app.get('/',()=>'Hello world!')

app.listen({
    host: '0.0.0.0',
    port: 3333
}).then((address) => {
    console.log(`🚀 HTTP Server Running!\n${address}`)
})