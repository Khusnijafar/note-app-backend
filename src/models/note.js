require('dotenv').config()
const connection = require('../configs/db')


module.exports = {
    getNote: (search, page) => {
        return new Promise((resolve, reject) => {
            if(search) {
                connection.query('SELECT * FROM ')
            }
        })
    },
    addNote: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO note SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    editNote: (id_note, data) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE note SET ? WHERE id_note = ?', [data, id_note], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    } 
}
