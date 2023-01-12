import { useRouter } from 'next/router'

export default function ({user}) {
  const router = useRouter()

  return (
    <div>
      <h1>Пользователь с name {user.name}</h1>
    </div>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()

  return {
    props: {user}, // will be passed to the page component as props
  }
}