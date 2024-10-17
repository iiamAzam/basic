const wss = require('ws')

const ws = new wss.Server({port : 8080})

ws.on('connection', (socket)=>{
    console.log('connection establishe')
    
    socket.on('message',function message(data){
        const msg=data.toString()
        console.log(msg)
        ws.clients.forEach((client)=>{
                if (client.readyState===wss.OPEN){
                    client.send(msg)
                }
        })

    })
    socket.on('close',()=>{
        console.log('the connection is closed')
    })

})



