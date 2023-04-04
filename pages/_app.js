import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "../context";
import Head from 'next/head';
import {useState, useEffect} from 'react';
import toast, { Toaster } from 'react-hot-toast';



function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

      useEffect(() => {
        setShowing(true);
      }, []);
    
      if (!showing) {
        return null;
      }
    
      if (typeof window === 'undefined') {
        return <></>;
      } else {
        return (
          <>
          <Provider>
          <Head>
             <title>MedicAI</title>
             <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/5278/5278402.png" />
              <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
             <link
            href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
            rel="stylesheet"
          />
           </Head>
            <Component {...pageProps} />
          </Provider>
          </>
        );
      }
    }


export default MyApp;
