const products = [
    {
        id:1,
        name:"Shirt 1",
        price:29.99,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/n8.jpg"
    },
    {
        id:2,
        name:"Shirt 2",
        price:39.67,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/f2.jpg",
    },
    {
        id:3,
        name:"Shirt 3",
        price:45.11,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/f3.jpg",
    },
    {
        id:4,
        name:"Shirt 4",
        price:23.87,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/f4.jpg",
    },
    {
        id:5,
        name:"Shirt 5",
        price:49.55,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/f5.jpg",
    },
    {
        id:6,
        name:"Shirt 6",
        price:38.46,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/f6.jpg",
    },
    {
        id:7,
        name:"Shirt 7",
        price:33.88,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/f7.jpg",
    },
    {
        id:8,
        name:"Shirt 8",
        price:40.99,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/f8.jpg",
    },
    {
        id:9,
        name:"Shirt 9",
        price:50.67,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/n1.jpg",
    },
    {
        id:10,
        name:"Shirt 10",
        price:60.84,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/n2.jpg",
    },
    {
        id:11,
        name:"Shirt 11",
        price:72.99,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/n3.jpg",
    },
    {
        id:12,
        name:"Shirt 12",
        price:66.59,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/n4.jpg",
    },
    {
        id:13,
        name:"Shirt 13",
        price:35.99,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/n5.jpg",
    },
    {
        id:14,
        name:"Shirt 14",
        price:46.55,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/n6.jpg",
    },
    {
        id:15,
        name:"Shirt 15",
        price:29.99,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/n7.jpg",
    },
    {
        id:16,
        name:"Shirt 16",
        price:41.33,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/n8.jpg",
    },
]

// console.log(products[0].id);

// for(key in products) {
//     console.log("The value of the key : " +  key);
//     console.log(products[key]);
// }

// const obj = {
//     id:1,
//     name:"Shirt 1",
//     price:29.99,
//     instock:100,
//     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
//     imgSrc:"img/products/f1.jpg"
// }

// console.log(obj);

// for(let i=0;i<products.length;i++) {
//     console.log(products);
// }