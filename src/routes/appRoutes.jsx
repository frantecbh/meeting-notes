import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Dashboard } from '../pages/Dashboard'
import { NoMatch } from '../pages/NoMatch'
import { NewMeeeting } from '../pages/NewMeeeting'
import { MinhasMeetings } from '../pages/MinhasMeetings'

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="/" element={<Home />} />
      <Route path="/newmeeting" element={<NewMeeeting />} />
      <Route path="/mymeeting" element={<MinhasMeetings />} />

      <Route path="dashboard" element={<Dashboard />} />

      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
      <Route path="*" element={<NoMatch />} />
      {/* </Route> */}
    </Routes>
  )
}
