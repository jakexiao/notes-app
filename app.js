const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    builder:{
        title: {
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe:'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addnote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create read command
yargs.command({
    command:'read',
    describe: 'read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    describe: 'list a note',
    handler(){
        notes.listNotes()
    }
})

//console.log(yargs.argv)
yargs.parse()