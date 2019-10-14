const express = require('express')
const app = express()
 

var header = require('./src/assets/json/header.json')  //本地json文件数据
var headerCn = require('./src/assets/json/headerCn.json')  //本地json文件数据
var home = require('./src/assets/json/homemain.json')  //本地json文件数据
var homemainCn = require('./src/assets/json/homemainCn.json')  //本地json文件数据
var footer = require('./src/assets/json/footer.json')  //本地json文件数据

 
var apiRoutes = express.Router();
app.use('/api',apiRoutes)
 
module.exports = {
   devServer:{      
	 before(app) {
        app.get('/api/header', (req, res) => {
            res.json({              
                errno: 0,   // 这里是你的header.json内容
                data: header
            })
        })
        app.get('/api/headerCn', (req, res) => {
            res.json({              
                errno: 0,   // 这里是你的headerCn.json内容
                data: headerCn
            })
        })
        app.get('/api/home', (req, res) => {
            res.json({              
                errno: 0,   // 这里是你的homemain.json内容
                data: home
            })
        })
        app.get('/api/homemainCn', (req, res) => {
            res.json({              
                errno: 0,   // 这里是你的homemainCn.json内容
                data: homemainCn
            })
        })
    },
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null      //设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址
   }
}
