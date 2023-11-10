import React from "react";

type FormQuoteProps = {
  idType: string;
};
import { useModalFormQuote } from "@/store/modalFormQuote";

export const FormQuote = ({ idType }: FormQuoteProps) => {
  const { isOpen } = useModalFormQuote();

  return isOpen && <div>FormQuote</div>;
};
