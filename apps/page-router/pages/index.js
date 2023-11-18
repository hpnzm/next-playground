import { useState } from "react";

export async function getServerSideProps() {
  return {
    props: {
      secret: "From the server",
    },
  };
}

export default function MainPage({ secret }) {
  const [message] = useState("Hellow");
  return (
    <>
      <h1>{message}</h1>
      <h2>{secret}</h2>
    </>
  );
}
