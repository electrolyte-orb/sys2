interface NavContainerProps {
   children: React.ReactNode;
}
export default function NavContainer({ children }: NavContainerProps) {
   return (
      <div className="text-sm bg-gray-800 px-6 py-4 text-gray-400 flex justify-between items-center sticky top-0 z-40">
         {children}
      </div>
   );
}
