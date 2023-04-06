const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000


const rapper =  {
    '21 savage' : { 
      "age": 29 , 
       'birtName': 'Shéyaa Bin Abraham-Joseph',
       'birthLocation' : 'Plaistow London England',
    },

    'chance the rapper' : { 
      "age": 29 , 
       'birtName': 'Chancelor Bennett',
       'birthLocation' : 'Chicago Illinois',
    },
    'dylan' : { 
      "age": 29 , 
       'birtName': 'Dylan',
       'birthLocation' : 'Dylan',
    },
}


app.get('/', (request, response)=>{
   response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request , response) =>{
  const rapperNames =  request.params.rapperName.toLowerCase()
  if(rapper[rapperNames]){
    response.json(rapper[rapperNames])
  }else {
    response.json(rapper['dylan'])
  }
 
})


app.listen(PORT, ()=>{
  console.log(`The server is running on port ${PORT}! you better catch it`)
})