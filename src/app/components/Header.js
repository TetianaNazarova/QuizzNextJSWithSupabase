import Image from "next/image";

function Header() {
  return (
    <header className="app-header">
      <Image src="/logo512.png" alt="React logo" width="350" height="150" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
