let  User = require('./User');
const fs = require('fs');
let storage = User;


const add = function (req) {
    let mess;
    for (let i = 0;i<storage.length;i++){
          if (storage[i].id == req.body.id){
                return 'Пользователь с таким id существует';
            }
          else{
                mess = 'Ok';
          }

    }
    storage.push(req.body);
    const note = JSON.stringify(storage);
    fs.writeFile('User.json',note,(err)=>{
        if (err) throw err;
    });
    return mess;
};

const getAll =  function(){
    return storage

}
const get =  function(req){
    for (let i = 0; i<storage.length;i++){
        for(let key in storage[i]){
            if (storage[i][key] == req.params.id && key == 'id'){
                return storage[i];
            }
        }
    }
}

const update =  function(req){
    for (let i = 0; i<storage.length;i++){
        for(let key in storage[i]){
            if (storage[i][key] == req.params.id && key == 'id' && storage[i][key] == req.body.id){
                storage[i] = req.body;
            }
        }
    }
    const note = JSON.stringify(storage);
    fs.writeFile('User.json',note,(err)=>{
        if (err) throw err;
    });
    return 'Ok';
}


const del =  function(req){
    for (let i = 0; i<storage.length;i++){
        for(let key in storage[i]){
            if (storage[i][key] == req.params.id && key == 'id'){
                storage.splice(i,1);
            }
        }
    }
    const note = JSON.stringify(storage);
    fs.writeFile('User.json',note,(err)=>{
        if (err) throw err;
    });
    return 'Ok';
}


module.exports = {
    add,
    get,
    update,
    del,
    getAll
}