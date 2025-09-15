import 'dotenv/config';
import app from './app.js';
import cookieParser from 'cookie-parser';
app.use(cookieParser());


const port=process.env.PORT || 8081
// const token = req.cookies?.token;
// console.log(token);

app.get('/test-cookies', (req, res) => {
  console.log('Cookies:', req.cookies);
  res.send('Check your console for cookies');
});


app.listen(port,()=>console.log(`server is listend at port${port}`))