// const mongoose = require('mongoose')
// const BlogPost = require('./models/blog')

// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// // BlogPost.create({
// //     title: 'Đây là sách dạy học lập trình Node.js từ cơ bản',
// //     body: 'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng d'
 
// //    }, (error, blogpost) => {
// //     console.log(error, blogpost)
// // })

// BlogPost.find({},
//     (error,blogpost ) =>{
//         console.log(blogpost)
// })
// const fs = require('fs')
// const read = fs.readFile('test.txt','utf8', (err,data) =>{
//     if (err) console.log(err);
//     console.log(data);
// })

const add = require('./module')
add();