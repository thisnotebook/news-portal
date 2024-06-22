"use client";
import React from "react";

import Temp from "../../../components/temp";


export default function ArticlePage({ searchParams }) {
  return (

      <div>
        <Temp newsId={searchParams.id} />
      </div>
  
  );
}
