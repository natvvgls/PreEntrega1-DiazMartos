import { useEffect, useState } from "react"
import Item from "./Item"

const ItemList = () => {

   const ALBUMS = [
      {
         id: 1,
         title: "Abbey Road",
         description: "The beatles",
         idCategory:"Pop",
         price: 220,
         pictureUrl: "https://los40es00.epimg.net/los40/imagenes/2018/09/26/los40classic/1537954405_106365_1569490515_noticia_normal.jpg",
         stock: 20
      },

      {
         id: 2,
         title: "Abbey Road",
         description: "The beatles",
         idCategory:"Pop",
         price: 220,
         pictureUrl: "https://los40es00.epimg.net/los40/imagenes/2018/09/26/los40classic/1537954405_106365_1569490515_noticia_normal.jpg",
         stock: 20
      },
      
      {
         id: 3,
         title: "Abbey Road",
         description: "The beatles",
         idCategory:"Pop",
         price: 220,
         pictureUrl: "https://los40es00.epimg.net/los40/imagenes/2018/09/26/los40classic/1537954405_106365_1569490515_noticia_normal.jpg",
         stock: 20
      },

      {
         id: 4,
         title: "Love Yourself",
         description: "BTS",
         idCategory:"k-pop",
         price: 180,
         pictureUrl: "https://akamai.sscdn.co/letras/272x272/albuns/6/b/a/0/654281570223551.jpg",
         stock: 9
      },

      {
         id: 5,
         title: "Love Yourself",
         description: "BTS",
         idCategory:"k-pop",
         price: 180,
         pictureUrl: "https://akamai.sscdn.co/letras/272x272/albuns/6/b/a/0/654281570223551.jpg",
         stock: 9
      },

      {
         id: 6,
         title: "Love Yourself",
         description: "BTS",
         idCategory:"k-pop",
         price: 180,
         pictureUrl: "https://akamai.sscdn.co/letras/272x272/albuns/6/b/a/0/654281570223551.jpg",
         stock: 9
      },

      {
         id: 7,
         title: "Ahí vamos",
         description: "Gustavo Cerati",
         idCategory:"Rock",
         price: 120,
         pictureUrl: "https://media.cnnchile.com/sites/2/2021/03/gustavo-cerati-portada-album-ahi-vamos.jpeg",
         stock: 14
      },

      {
         id: 8,
         title: "Ahí vamos",
         description: "Gustavo Cerati",
         idCategory:"Rock",
         price: 120,
         pictureUrl: "https://media.cnnchile.com/sites/2/2021/03/gustavo-cerati-portada-album-ahi-vamos.jpeg",
         stock: 14
      },

      {
         id: 9,
         title: "Ahí vamos",
         description: "Gustavo Cerati",
         idCategory:"Rock",
         price: 120,
         pictureUrl: "https://media.cnnchile.com/sites/2/2021/03/gustavo-cerati-portada-album-ahi-vamos.jpeg",
         stock: 14
      },

      {
         id: 10,
         title: "Noviembre sin ti",
         description: "Reik",
         idCategory:"Balada",
         price: 100,
         pictureUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Reik_reik.jpg",
         stock: 6
      },

      {
         id: 11,
         title: "Noviembre sin ti",
         description: "Reik",
         idCategory:"Balada",
         price: 100,
         pictureUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Reik_reik.jpg",
         stock: 6
      },

      {
         id: 12,
         title: "Noviembre sin ti",
         description: "Reik",
         idCategory:"Balada",
         price: 100,
         pictureUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Reik_reik.jpg",
         stock: 6
      }
   ]

   const [products, setProducts] = useState([])

   useEffect(() => {
      getProducts().then(response => {
         setProducts(response)
      })
   }, [])

   const getProducts = () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(ALBUMS)
         }, 2000)
      })
   }
   return (
      <div className="grid grid-cols-3 gap-[40px] py-[40px]">
         {products.map(p => <Item key={p.idCategory} {...p} />)}
      </div >
   )
}

export default ItemList