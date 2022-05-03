import Link from 'next/link';
import { Container } from 'components';

export default function index() {
   return (
      <Container>
         <h1 className="font-bold text-3xl">
            Here what&apos;s going inside <br /> from insiders.
         </h1>
         <Link href="/blogs/first-blog">hello</Link>
      </Container>
   );
}
