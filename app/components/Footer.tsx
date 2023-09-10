'use client';

import Container from './Container';

const Footer = () => {
  return (
    <div className='flex flex-col min-h-screen'>
    <footer className="bg-gradient-to-b from-blue-100 to-teal-200 w-full mt-auto py-2">
      <div className="container w-full mx-auto text-center flex flex-row">
        <span className="block text-sm sm:text-center text-slate-600">&copy; 2023 Canda™. All Rights Reserved.</span>
        <ul className="flex ml-auto flex-wrap items-end mb-6 text-sm font-medium text-slate-600 sm:mb-0">
          <li>
            <a href="/history" className="mr-4 hover:underline md:mr-6">Notre histoire</a>
          </li>
          <li>
            <a href="/faq" className="mr-4 hover:underline md:mr-6">FAQ</a>
          </li>
          <li>
            <a href="/clientsp" className="mr-4 hover:underline md:mr-6">Nos Clients</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
    </div>
  );
}



export default Footer;
