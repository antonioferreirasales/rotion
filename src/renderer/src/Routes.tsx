import { Router, Route } from 'electron-router-dom'

import { Blank } from './pages/Blank'
import { Document } from './pages/Document'

export function Routes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Blank />} />
          <Route path="/document" element={<Document />} />
        </>
      }
    />
  )
}