import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
   return (
      <header className=' py-4'>
         <div className='container d-flex justify-content-between align-items-center'>
            {/* Logo */}
            <h1 className='text-primary'>exam.io</h1>
            <nav className='d-flex justify-content-center align-items-center gap-4'>
               <ul className='list-unstyled d-flex gap-4 mb-0'>
                  <li>
                     <NavDropdown title='Features' id='basic-nav-dropdown'>
                        <NavDropdown.Item href='#action/3.1'>
                           Action 1
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.2'>
                           Action 2
                        </NavDropdown.Item>
                     </NavDropdown>
                  </li>
                  <li>
                     <a
                        href='#pricing'
                        className='text-decoration-none text-dark'
                     >
                        Pricing
                     </a>
                  </li>
                  <li>
                     <a
                        href='#testimonials'
                        className='text-decoration-none text-dark'
                     >
                        Blog
                     </a>
                  </li>
               </ul>

               <div className='d-flex gap-4'>
                  <button className='white-btn'>Login</button>

                  <button className='blue-btn'>Sign up for free</button>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Navbar;
