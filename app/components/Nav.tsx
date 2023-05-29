"use client";

import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default function Nav({ user }: Session) {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>Products</li>
        {!user ? (
          <li>
            <Link href="/api/auth/signin"> Sign In</Link>
          </li>
        ) : (
          <li>
            <Image
              src={user?.image as string}
              alt={user?.name as string}
              width={50}
              height={50}
            />
          </li>
        )}
      </ul>
    </nav>
  );
}
