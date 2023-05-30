"use client";

import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default function Nav({ user }: Session) {
  return (
    <nav className="flex items-center py-10 justify-between">
      <h1>Navbar</h1>
      <ul className="flex items-center gap-8">
        {!user ? (
          <li className="bg-teal-600 px-6 py-2 rounded-sm text-white font-bold">
            <Link href="/api/auth/signin"> Sign In</Link>
          </li>
        ) : (
          <>
            <li>
              <Image
                src={user?.image as string}
                alt={user?.name as string}
                width={50}
                height={50}
              />
            </li>
            <li>Dashboard</li>
          </>
        )}
      </ul>
    </nav>
  );
}
