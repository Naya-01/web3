import { ProviderWrapper} from "context/countersContext";
import App from "Components/App/App";


const AppLoader= () => {
    return (
      <ProviderWrapper >
          <App />
   
        </ProviderWrapper >
    )
  }

  export default AppLoader;