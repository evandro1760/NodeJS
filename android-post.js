var http = require('http');

conf = {
    hostname: 'localhost',
    port: 3000,
    method: 'post',
    path: '/produtos',
    headers: {
        'Accept': 'application/json',
        'Content-type':'application/json'    
    }
};

var client = http.request(conf, function(res){
    console.log(res.statusCode);
    res.on('data',function(body){
        console.log('Corpo: ' + body);
    });
});

var produto = {
    titulo : '',
    descricao: 'node, javascript e um pouco sobre http',
    preco: '100'
}

client.end(JSON.stringify(produto));