interface NavContainerProps {
   children: React.ReactNode;
}
export default function NavContainer({ children }: NavContainerProps) {
   return (
      <div className="text-sm bg-gray-800 bg-opacity-80 backdrop-blur border-b border-gray-600 px-6 py-4 text-gray-400 h-16 flex justify-between items-center sticky top-0 z-40">
         {children}
      </div>
   );
}
