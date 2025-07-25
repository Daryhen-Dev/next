import { CiBellOn, CiChat1,  CiMenuBurger, CiSearch } from 'react-icons/ci';
import { Sidebar, TopMenu } from '@/components';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Sidebar />

      {/*TODO: Fin del <Sidebar /> */}
    
      
      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
         <div className='px-6 pt-6'>
          {children}
          </div>
      </div>
    </>
  );
}
