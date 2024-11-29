import { Header } from "@/layouts/components";
import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const HeaderOnly: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="w-full">
        <div className="content"> {children} </div>
      </div>
    </div>
  );
};

export default HeaderOnly;
