/* eslint-disable jsx-a11y/alt-text */
import "../styles/globals.css";
import Image from "next/image";
import Search from '../Components/Search'
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* background image */}
      <Image
        src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
        fill
        className="object-cover inset-0"
        alt="background-image"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 inset-0 bg-black opacity-40 bg-scroll"></div>
      <Search/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
