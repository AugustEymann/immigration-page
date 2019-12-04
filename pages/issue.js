 // Loads Header
 $('.app').prepend(ejs.rr('components/head.ejs', {
     page: 'Issue'
 }))
 $('.app').prepend(ejs.rr('components/navbar.ejs', {
     page: 'issue'
 }))


 //Loads Page Data
 $('.app').append(ejs.rr('views/issue.ejs', {
     title: 'The Issue',
     subtitle: 'Why is their such hate around immigrants?'
 }))
 //Load Footer Last
 $('.app').append(ejs.rr('components/footer.ejs'));