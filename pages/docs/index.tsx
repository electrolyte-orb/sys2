import { Container } from 'components';
import BookIcon from '@heroicons/react/outline/BookOpenIcon';
export default function Docs() {
   return (
      <Container>
         <section className="m-6 text-center">
            <BookIcon className="stroke-1 h-16 mx-auto text-white" />
            <h1 className="mt-6 text-4xl font-bold text-white tracking-tight">
               Documentation is under its way.
            </h1>
         </section>
      </Container>
   );
}
