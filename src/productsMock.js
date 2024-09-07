const products = [
    {
        id: 1,
        title: 'Pantalon cargo',
        stock: 3,
        price: 4000,
        category: 'pantalones',
        image: 'https://acdn.mitiendanube.com/stores/001/244/141/products/reverpass_51214-n0-1-49056bfd1cb514720516990433551645-1024-1024.jpg'
    },
    {
      id: 2,
      title: 'Remera con estampa',
      stock: 5,
      price: 2000,
      category: 'remeras',
      image: 'https://dcdn.mitiendanube.com/stores/556/402/products/20211222_155053-56104362320ff2fd3816401995942243-1024-1024.jpg'
    }
    
  ]
  
  export const getAllProducts = new Promise((resolve, reject) => {
    resolve(products)
    reject('Error al obtener los productos.')
  })
  
  export const getProduct = (id) => {
    return products.find(product => product.id == id)
  }
  
  export const getCategory = (category) => {
    return products.filter(product => product.category == category)
  }