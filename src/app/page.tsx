'use client'
import Image from "next/image";
import Navbar from "../../components/Navbar"
import {Main} from "../../components/main"
import {Footer} from "../../components/footer"
import { KeywordProvider } from "../../components/KeywordContext";
export default function Home() {
  return (
    <KeywordProvider>
      <div className="">
        <Navbar />
        <Main />
      </div>
    </KeywordProvider>
  );
}

