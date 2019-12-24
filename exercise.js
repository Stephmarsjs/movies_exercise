getCustomer(1, (customer) => {
    console.log('Customer: ', customer);
    if (customer.isGold) {
        getTopMovies((movies) => {
            console.log('Top movies: ', movies);
            sendEmail(customer.email, movies, () => {
                console.log('Email sent...')
            });
        });
    }
});

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
              id: 1,
              name: 'Mosh Hamedani', 
              isGold: true,
              email: 'email'
          });  
        }, 4000);
    });
}