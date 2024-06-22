import React, { createContext, useState } from 'react';

export const KeywordContext = createContext();

export const KeywordProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('');
  const [newsCon, setNewsCon] = useState([]);


  return (
    <KeywordContext.Provider value={{ keyword, setKeyword, newsCon, setNewsCon }}>
      {children}
    </KeywordContext.Provider>
  );
};
