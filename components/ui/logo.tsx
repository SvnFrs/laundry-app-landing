import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image
        src="/images/logo.png" // Path is correct
        width={80}
        height={80}
        alt="Logo" // It's good practice to make the alt text meaningful
      />
    </Link>
  );
}
