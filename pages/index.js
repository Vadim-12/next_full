import Layout from '../components/Layout'
import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { itemsAtom, queryAtom } from '../store/atoms'
import Picture from '../components/Picture'

const Index = () => {
  const [query, ] = useAtom(queryAtom)
  const [items, setItems] = useAtom(itemsAtom)

  useEffect(() => {
    const savedItems = localStorage.getItem('items')
    if (savedItems) {
      setItems(() => JSON.parse(savedItems))
    }
  }, [])

  return (
    <Layout>
      <h1>Картины эпохи Возрождения</h1>
      <div className="goods-block">
        {
          items.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1).map(item => {
            return (
              <Picture
                key={ item.id }
                id={ item.id }
              />
            )
          })
        }
      </div>
    </Layout>

  )
}

export default Index