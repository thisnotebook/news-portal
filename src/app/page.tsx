'use client'
import Navbar from "../../components/Navbar"
import {Main} from "../../components/main"
import {Footer} from "../../components/footer"
import { KeywordProvider } from "../../components/KeywordContext";
export default function Home() {
  return (
    <KeywordProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Main />
        <Footer/>
      </div>
    </KeywordProvider>
  );
}

