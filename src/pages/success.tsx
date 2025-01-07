import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>Uhuul <strong>Alfiado Ngana</strong>, sua <strong>camiseta Beyond the limites</strong> ja esta a caminho da sua casa.</p>

      <Link href='/'>
        Voltar ao catalog
      </Link>
    </SuccessContainer>
  )
}  