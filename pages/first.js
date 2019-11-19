// Loads Header and Navbar
$('.app').prepend(ejs.rr('components/head.ejs', {page: 'Home'}))
$('.app').prepend(ejs.rr('components/navbar.ejs', {page: 'home'}))

//Load Page Header
$('.app').append(ejs.rr('components/header.ejs', {title: 'Immigrants', subtitle: 'Why they effect us in all positive ways.'}))
//Loads Page Data
$('.app').append(ejs.rr('views/home.ejs'))
//Load Footer Last
$('.app').append(ejs.rr('components/footer.ejs'));