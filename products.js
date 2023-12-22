// <-------------- Products --------------->

const products = [
    {
        id:1,
        name:"Shirt 1",
        price:29.99,
        instock:100,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus architecto nisi sunt assumenda tenetur itaque debitis ea dignissimos dolore, laboriosam dolorum aspernatur. Nobis vel velit odit quis. Eum, exercitationem",
        imgSrc:"img/products/f1.jpg"
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

// <---------------------- Contact ------------------->

const people = [
    {
        id:1,
        name:"John Doe",
        position:"Senior Marketing Manager",
        phone:"+000 123 000 77 88",
        email:"johndoe@gmail.com",
        imgSrc:"img/people/1.png"
    },
    {
        id:2,
        name:"William Smith",
        position:"Senior Marketing Manager",
        phone:"+000 123 000 77 88",
        email:"williamsmith@gmail.com",
        imgSrc:"img/people/2.png"
    },
    {
        id:1,
        name:"Emma Stone",
        position:"Senior Marketing Manager",
        phone:"+000 123 000 77 88",
        email:"emmastone@gmail.com",
        imgSrc:"img/people/3.png"
    },
]


// <-------------------- Features --------------->
const features = [
    {
        id:1,
        imgSrc:"img/features/f1.png",
        desc:"Free Shipping"
    },
    {
        id:2,
        imgSrc:"img/features/f2.png",
        desc:"Online Order"
    },
    {
        id:3,
        imgSrc:"img/features/f3.png",
        desc:"Save Money"
    },
    {
        id:4,
        imgSrc:"img/features/f4.png",
        desc:"Promotions"
    },
    {
        id:5,
        imgSrc:"img/features/f5.png",
        desc:"Happy Sell"
    },
    {
        id:6,
        imgSrc:"img/features/f6.png",
        desc:"F24/7 Support"
    },
]

const banner = [
    {
        id:1,
        desc1:"Seasonal Sale",
        desc2:"Winter Collection - 50% Off"
    },
    {
        id:2,
        desc1:"New Footwear Collection",
        desc2:"Spring/summer 2022"
    },
    {
        id:3,
        desc1:"T-shirts",
        desc2:"New trendy prints"
    },
]

const smallBanner = [
    {
        id:"banner-box",
        name:"crazy deals",
        offer:"buy 1 get 1 free",
        desc:"The best classic dress is on a sale at cara",
        btn:"Learn More",
    },
    {
        id:"banner-box banner-box2",
        name:"spring/summer",
        offer:"upcomming season",
        desc:"The best classic dress is on a sale at cara",
        btn:"Collection",
    },
]

/************************** Blog Details ********************** */

const blogs = [
    {
        id:1,
        imgSrc:"img/blog/b1.jpg",
        topic:"the cotton jersey zip - up hoodie",
        desc:"kisckstarter man braid goadard coloring book Raclette waistcoat selfies yr wolf chartreues hexagon iron godard...",
        date:"13/01"
    },
    {
        id:2,
        imgSrc:"img/blog/b2.jpg",
        topic:"the cotton jersey zip - up hoodie",
        desc:"kisckstarter man braid goadard coloring book Raclette waistcoat selfies yr wolf chartreues hexagon iron godard...",
        date:"13/01"
    },
    {
        id:3,
        imgSrc:"img/blog/b3.jpg",
        topic:"the cotton jersey zip - up hoodie",
        desc:"kisckstarter man braid goadard coloring book Raclette waistcoat selfies yr wolf chartreues hexagon iron godard...",
        date:"13/01"
    },
    {
        id:4,
        imgSrc:"img/blog/b4.jpg",
        topic:"the cotton jersey zip - up hoodie",
        desc:"kisckstarter man braid goadard coloring book Raclette waistcoat selfies yr wolf chartreues hexagon iron godard...",
        date:"13/01"
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