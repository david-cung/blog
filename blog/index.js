const express = require('express')
const app = new express()
app.use(express.static('public'))
const ejs = require('ejs')

const mongoose = require('mongoose')
const BlogPost = require('./models/blog')

mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser: true})

const bodyParser = require('body-parser')
const Users = require('./models/user')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.listen(4000,()=>{
    console.log('server is starting')
})

app.get('/', (req,res)=>{
    BlogPost.find({}, (err,posts) =>{
        //console.log(posts)
        res.render('index', {
            blogposts:posts
        })
    })
    
})
app.get('/about', (req,res)=>{
    res.render('about')
})
app.get('/post', (req,res) =>{
    res.render('post')
})
app.get('/contact', (req,res) =>{
    res.render('contact')
})
app.get('/posts/new', (req,res) =>{
    res.render('create')
})
app.post('/posts/store',(req,res) =>{
    BlogPost.create(req.body,(err,blogpost)=>{
        console.log(req.body)
        res.redirect('/')
    })
})
app.get('/auth/register',(req,res) =>{
    res.render('register')
})
app.post('/users/register',(req,res) =>{
    Users.create(req.body,(err,user) =>{
        if (err) {
            console.log(err)
            return res.redirect('/auth/register')
        }
        console.log(req.body)
        res.redirect('/')
    })
})


