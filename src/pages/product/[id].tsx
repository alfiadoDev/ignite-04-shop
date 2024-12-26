import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veritatis dolorem nobis culpa molestias. Nulla aperiam sunt quia recusandae eligendi, vero molestiae quidem quisquam, consequatur, facere deleniti! Rem, odio dolore!</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}  