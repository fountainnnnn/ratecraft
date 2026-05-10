import{Routes,Route}from'react-router-dom'
import Landing from'./pages/Landing'
import Calculator from'./pages/Calculator'
export default function App(){return(<Routes><Route path="/"element={<Landing/>}/><Route path="/calc"element={<Calculator/>}/></Routes>)}
