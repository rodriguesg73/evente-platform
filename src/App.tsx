import { ApolloProvider } from '@apollo/client';
import { Event } from "./pages/Event"
import { Router } from "./Router"
import { client } from './lib/apollo';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}
export default App
