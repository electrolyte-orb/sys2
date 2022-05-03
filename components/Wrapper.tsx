interface Wrapper {
   children: React.ReactNode;
}

export default function Wrapper({ children }: Wrapper) {
   return (
      <div className="bg-gray-100 flow-root min-h-screen leading-normal">
         {children}
      </div>
   );
}
