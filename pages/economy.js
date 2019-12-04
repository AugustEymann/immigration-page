    // Loads Header and Navbar
    $('.app').prepend(ejs.rr('components/head.ejs', {
        page: 'Economy'
    }))
    $('.app').prepend(ejs.rr('components/navbar.ejs', {
        page: 'eco'
    }))

    //Loads Page Data
    $('.app').append(ejs.rr('views/economy.ejs', {
        title: 'The Economy',
        subtitle: 'Why immigrants are key to the US Economy.'
    })) //Load Footer Last
    $('.app').append(ejs.rr('components/footer.ejs'))