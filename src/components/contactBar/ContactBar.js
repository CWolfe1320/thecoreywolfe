import React, { useState, useRef, useEffect } from 'react';
import './ContactBar.css';

const ContactBar = ({toggleSide}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const rotAngle = 'rotate(' + ((toggleSide === 'top') ? 0 : 180) + ')';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="contact-bar">

      {isOpen && (
        <div 
          ref={popupRef}
          className={`contact-popup ${toggleSide}`}
        >
          <p className="emailP">thecoreywolfe@gmail.com</p>
          <p className="copyrightP">© 2024 thecoreywolfe.com. All Rights Reserved.</p>
        </div>
      )}

      <div className="contact-bar-content">

        <div className="social-icons">
          <a href="https://x.com/corwolfe" className="social-icon" target="_blank" rel="noreferrer" aria-label="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" viewBox="0 0 17 17" fill="none"><g clip-path="url(#a)"><path fill="white" d="M13.158 2.058h2.248l-4.913 5.435 5.78 7.395h-4.525l-3.545-4.485-4.056 4.485h-2.25l5.255-5.813-5.545-7.017h4.64l3.205 4.1 3.706-4.1Zm-.79 11.527h1.246L5.57 3.293H4.233l8.135 10.292Z"></path></g></svg>
          </a>
          <a href="https://www.instagram.com/thecoreywolfe/?hl=en" className="social-icon" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 16 17" fill="none"><g fill="white" clip-path="url(#a)"><path d="M7.99 2.27c2.137 0 2.39.01 3.231.048.781.034 1.203.165 1.485.275.372.143.64.318.918.596.282.282.454.547.597.92.11.28.24.705.275 1.484.038.843.047 1.096.047 3.23 0 2.138-.01 2.391-.047 3.232-.034.781-.165 1.203-.275 1.484-.143.372-.319.641-.597.92a2.46 2.46 0 0 1-.918.596c-.282.11-.707.24-1.485.275-.844.037-1.097.047-3.231.047-2.137 0-2.39-.01-3.231-.047-.781-.034-1.203-.166-1.485-.275a2.472 2.472 0 0 1-.918-.597 2.46 2.46 0 0 1-.597-.919c-.11-.28-.24-.706-.275-1.484-.038-.844-.047-1.097-.047-3.231 0-2.138.01-2.39.047-3.231.034-.782.165-1.204.275-1.485.144-.372.319-.64.597-.919a2.46 2.46 0 0 1 .918-.596c.282-.11.707-.241 1.485-.275.84-.038 1.094-.047 3.231-.047Zm0-1.44c-2.172 0-2.444.01-3.297.047-.85.037-1.434.175-1.94.372a3.905 3.905 0 0 0-1.42.925A3.92 3.92 0 0 0 .41 3.589C.212 4.1.074 4.68.037 5.53c-.038.856-.047 1.128-.047 3.3 0 2.172.01 2.444.047 3.297.037.85.175 1.434.372 1.94.206.529.478.976.925 1.42.444.443.89.718 1.415.921.51.197 1.091.334 1.941.372.853.037 1.125.047 3.297.047s2.444-.01 3.297-.047c.85-.038 1.434-.175 1.94-.372a3.91 3.91 0 0 0 1.416-.922 3.91 3.91 0 0 0 .922-1.415c.197-.51.334-1.091.372-1.941.037-.853.047-1.125.047-3.297s-.01-2.444-.047-3.297c-.038-.85-.175-1.434-.372-1.94a3.748 3.748 0 0 0-.916-1.422 3.911 3.911 0 0 0-1.415-.922C12.72 1.055 12.14.918 11.29.88c-.856-.04-1.128-.05-3.3-.05Z"></path><path d="M7.99 4.72a4.11 4.11 0 0 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.776a2.666 2.666 0 1 1 0-5.332 2.666 2.666 0 0 1 0 5.332ZM13.221 4.558a.96.96 0 1 1-1.919 0 .96.96 0 0 1 1.92 0Z"></path></g></svg>
          </a>
          <a href="https://www.linkedin.com/in/corey-wolfe/" className="social-icon" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 17 17" fill="none"><g clip-path="url(#a)"><path fill="white" d="M15.776.83H2.14C1.488.83.96 1.329.96 1.946v13.249c0 .617.528 1.119 1.181 1.119h13.635c.653 0 1.184-.502 1.184-1.116V1.946c0-.617-.531-1.116-1.184-1.116ZM5.706 14.025H3.333V6.633h2.375v7.392ZM4.52 5.626c-.762 0-1.378-.595-1.378-1.33 0-.735.616-1.33 1.378-1.33.76 0 1.375.595 1.375 1.33 0 .732-.615 1.33-1.375 1.33Zm10.075 8.399h-2.371v-3.593c0-.856-.016-1.96-1.235-1.96-1.234 0-1.422.935-1.422 1.9v3.653H7.197V6.633h2.275v1.01h.032c.315-.58 1.09-1.194 2.244-1.194 2.403 0 2.846 1.53 2.846 3.52v4.056Z"></path></g></svg>
          </a>
        </div>

        <div 
          className="contact-toggle"
          onMouseDown={handleToggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" transform={rotAngle}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2476 8.23741C12.15 8.13978 11.9917 8.13978 11.894 8.23741L5.53009 14.6014C5.23719 14.8943 4.76232 14.8943 4.46943 14.6014C4.17653 14.3085 4.17653 13.8336 4.46943 13.5407L10.8334 7.17675C11.5168 6.49333 12.6248 6.49333 13.3083 7.17675L19.6722 13.5407C19.9651 13.8336 19.9651 14.3085 19.6722 14.6014C19.3793 14.8943 18.9045 14.8943 18.6116 14.6014L12.2476 8.23741Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
