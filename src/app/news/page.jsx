"use client";
import React from "react";

import Temp from "../../../components/temp";
import { KeywordProvider } from "../../../components/KeywordContext";

export default function ArticlePage({ searchParams }) {
  return (
    <KeywordProvider>
      <div>
        <Temp newsId={searchParams.id} />
      </div>
    </KeywordProvider>
  );
}
