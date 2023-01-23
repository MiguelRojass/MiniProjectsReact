import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'MiguelRojass',
    name: 'Miguel Ángel Rojas',
    isFollowing: true
  },
  {
    userName: 'brontobyteglobal',
    name: 'Brontobyte',
    isFollowing: false
  },
  {
    userName: 'JuanRojass',
    name: 'Juan Jose Rojas',
    isFollowing: true
  },
  {
    userName: 'NicolasRojass',
    name: 'Nicolas Rojas',
    isFollowing: false
  }
]

export function App() {
  return ( 
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}