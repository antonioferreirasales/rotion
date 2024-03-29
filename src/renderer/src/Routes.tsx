import { Router, Route } from 'electron-router-dom'

import { Blank } from './pages/blank'
import { Document } from './pages/document'
import { Default } from './layouts/Default'

export function Routes() {
  return (
    <Router
      main={
        <Route path='/' element={<Default />}>
          <Route path='/' element={<Blank />} />
          <Route path='/document' element={<Document />} />
        </Route>
      }
    />
  )
}