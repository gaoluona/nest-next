import { FC } from 'react';
import Link from 'next/link';

const Sidebar: FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 15 }}>
        <Link href="/views/home" as="/">
          <p
            style={{
              fontSize: 22,
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            EXAMPLE APP
          </p>
        </Link>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link href="/views/home" as="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/views/about" as="/about">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link href="/views/blog" as="/blog" prefetch={false}>
            <p>Blog</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
