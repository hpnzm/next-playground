"use client";

export default function Page() {
  console.log(<style jsx>{styles}</style>);
  return (
    <>
      <button>hi</button>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = `
  button {
    background-color: blue;

    &:hover {
      background-color: red;
    }
  }
`;
