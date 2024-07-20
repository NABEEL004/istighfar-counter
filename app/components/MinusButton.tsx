import React from "react";
import { MinusIcon } from "@heroicons/react/24/solid";

type MinusButtonProps = {
  handleSubtractClick: () => void;
};

const MinusButton = ({ handleSubtractClick }: MinusButtonProps) => {
  return (
    <button
      onClick={handleSubtractClick}
      className="btn btn-outline btn-circle h-12 w-12"
    >
      <MinusIcon height={20} width={20} />
    </button>
  );
};

export default MinusButton;
