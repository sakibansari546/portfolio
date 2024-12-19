import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ReactNode } from 'react';


const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;