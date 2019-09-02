const noteModels = require('../models/note.js')
const miscHelpers = require('../helpers/helpers')

module.exports = {
    getNote: (req, res) => {
        var jumlah = 0
        noteModels.getNote()
            .then((resultNote) => {
                jumlah = resultNote.length
            })
        const search = req.query.search
        const page = req.query.page
        noteModels.getNote(search, page)
            .then((resultNote) => {
                const result = resultNote
                Response(res, result, 200, jumlah)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    addNote: (req, res) => {
        let { id_note, title, description, id_category} = req.body
        const data = {
            id_note, title, description, id_category
        }

        noteModels.addNote(data)
            .then((resultNote) => {
                const result = resultNote
                miscHelpers.response(res, result, 200, data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}