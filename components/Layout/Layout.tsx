import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
