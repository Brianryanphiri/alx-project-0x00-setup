import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <Card />
      <Card />

      <div className="mt-6 flex flex-col gap-4">
  <Button title="Small Rounded" styles="text-sm rounded-sm" />
  <Button title="Medium Rounded-md" styles="text-base rounded-md" />
  <Button title="Large Rounded-full" styles="text-lg rounded-full" />
  <Button title="Extra Rounded" styles="text-lg rounded-lg" />
</div>

    </div>
  );
};

export default Landing;
