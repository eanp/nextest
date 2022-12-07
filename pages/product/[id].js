import { useRouter } from 'next/router'

const ProductDetail = () => {
    const router = useRouter()
  return (
    <div>ProductDetail {router.query.id}, param = {JSON.stringify(router.query)} </div>
  )
}

export default ProductDetail