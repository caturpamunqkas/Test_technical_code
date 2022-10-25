import express from 'express';
import cors from 'cors';
const app = express()
const port = 3300


app.use(cors())

app.post('/gen-segitiga', (req, res) => {
    
    let value = '123456';
    let data = '';

    // console.log(value.length);

    for (let index = 0; index < value.length; index++) {
        const element = value[index];

        let NOL = '0'
        
        for (let temp = 0; temp < index; temp++) {
            NOL+='0';
        }
        
        data+=(element+NOL)+'</br>';

        NOL = '0';
    }



    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})