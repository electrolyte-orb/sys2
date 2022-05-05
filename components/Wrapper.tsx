interface Wrapper {
   children: React.ReactNode;
}

export default function Wrapper({ children }: Wrapper) {
   return (
      <div className="bg-gray-900 text-gray-300 flow-root min-h-screen">
         {children}
      </div>
   );
}
