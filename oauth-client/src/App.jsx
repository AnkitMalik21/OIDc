import { useEffect, useState } from 'react'
import './App.css'
import toast, { Toaster } from 'react-hot-toast'
import { useAuth } from './config/authcontext'
import { getProducts } from './services/api.service'

function App() {

  const { isAuthenticated, keycloak } = useAuth();   // ✅ renamed
  const [products,setProducts] = useState([]);
  console.log(keycloak);
  console.log(keycloak?.token);

  useEffect(() => {
      loadProducts();
  }, [isAuthenticated]);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      console.log(data);
      setProducts(data);
      toast.success("product loaded");
    } catch (error) {
      console.log(error)
      toast.error("error loading products");
      toast.error("Login required");
    }
  };

  return (
    <>
      <Toaster/>

      {isAuthenticated ? (
        <div>
          <h1>Welcome to OAuth Client</h1>
          <p>You are logged in</p>

          <h2>Name: {keycloak?.tokenParsed?.name}</h2>
          <h2>Username: {keycloak?.tokenParsed?.preferred_username}</h2>

          {
            products.map(item=>
             <p key={item.productId}>{item.name}</p>
            )
          }
          <button onClick={() => {
            keycloak.logout();
            toast("Logged out");
          }}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>Login Required!</h1>

          <button onClick={() => {
            keycloak.login();
            toast("Login");
          }}>
            Login
          </button>
        </div>
      )}
    </>
  );
}

export default App;
