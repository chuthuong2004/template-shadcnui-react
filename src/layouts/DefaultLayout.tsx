// import { Toaster } from "@/components/ui/toaster";
import { Toaster as ToasterSonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { Footer, Header } from "@/layouts/components";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center">
        <Header />
        <div className="min-h-screen w-full flex justify-center items-center">
          <div className=""> {children} </div>
        </div>
        <Footer />
      </div>
      {/* Toast for toast component */}
      <Toaster />

      {/* Toast for sonner */}
      <ToasterSonner />
    </div>
  );
};
export default DefaultLayout;
