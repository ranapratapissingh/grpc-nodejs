const grpc = require('grpc')
const uuidv1 = require('uuid/v1')
const notesProto = grpc.load('notes.proto')
const notes = [
    { id: 1, title: 'Note 1', content: 'Content 1', status: true },
    { id: 2, title: 'Note 2', content: 'Content 2', status: false }
]
const server = new grpc.Server()
server.addService(notesProto.NoteService.service, {
    list: (_, callback) => {
        callback(null, notes)
    },
    insert: (call, callback) => {
        let note = call.request
        note.id = parseInt(uuidv1())
        notes.push(note)
        callback(null, note)
    },
    delete: (call, callback) => {
      let existingNoteIndex = notes.findIndex((n) => n.id == call.request.id)
      if (existingNoteIndex != -1) {
          notes.splice(existingNoteIndex, 1)
          callback(null, {})
      } else {
          callback({
              code: grpc.status.NOT_FOUND,
              details: "Not found"
          })
      }
    }
})
server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()