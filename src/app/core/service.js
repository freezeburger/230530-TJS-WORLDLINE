const API = 'https://dummyjson.com/products';

export const data = [];

/* export const getData = () => {
    fetch(API)
    .then( response => response.json())
    .then( payload => {
        data.length = 0;
        data.push( ...payload.products); // rest operator (iteration) 
    })
    .catch( err => console.log(err) )
}
 */


export const getData = async () => {
    const response = await fetch(API).catch(err => console.log(err));
    const payload  = await response.json().catch(err => console.log(err));

    // Ce code sera exéxuté apres la résolution de la promise (ligne 19)
    data.length = 0;
    data.push(...payload.products);
}

