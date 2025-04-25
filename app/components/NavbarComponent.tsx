'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@heroui/react';
import React from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Testimonials', href: '#' },
  ];

  return (
    <section className="border-b-[1px] bg-white text-[16px] border-[#663333] h-[100px]">
      <div className="global_horizontal_margin items-center font-semibold my-[10px] uppercase">
        <Navbar
          isBordered
          isBlurred={false}
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          {/* 🔹 Mobile layout */}
          <NavbarContent className="sm:hidden w-full items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                className="text-[#7b3939]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={28} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={28} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <NavbarBrand>
                <img src="/logo.svg" className="h-[36px]" alt="LBD Logo" />
              </NavbarBrand>
            </div>

            <Button
              as={Link}
              href="#"
              className="bg-[#7b3939] rounded-[5px] text-[12px] text-white py-[6px] px-[10px] uppercase"
              color="primary"
              variant="flat"
            >
              Book appointment
            </Button>
          </NavbarContent>

          {/* 🔹 Desktop layout */}

          {/* LEFT: Logo */}
          <NavbarContent className="hidden sm:flex" justify="start">
            <NavbarBrand>
              <img src="/logo.svg" width={200} height={80} alt="LBD Logo" />
            </NavbarBrand>
          </NavbarContent>

          {/* CENTER: Nav links */}
          <NavbarContent className="hidden sm:flex gap-6 flex-1 justify-center">
            {menuItems.map((item, index) => (
              <NavbarItem key={index}>
                <Link href={item.href} color="foreground">
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          {/* RIGHT: CTA Button */}
          <NavbarContent className="hidden sm:flex" justify="end">
            <NavbarItem>
              <Button
                as={Link}
                className="bg-[#7b3939] text-white py-[10px] px-[10px] uppercase"
                color="primary"
                href="#"
                variant="flat"
              >
                Book appointment
              </Button>
            </NavbarItem>
          </NavbarContent>

          {/* 🔹 Mobile dropdown menu */}
          <NavbarMenu className="bg-[#E7DBCC] pt-[16px] flex flex-col global_horizontal_margin space-y-[5px]">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={index}>
                <Link
                  className="w-full"
                  color="foreground"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}

            {/* Optional social icons in mobile menu */}
            <NavbarItem>
              <div className="flex gap-x-[8px] items-center justify-center mt-[32px]">
                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaX size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={20} />
                </a>
              </div>
            </NavbarItem>
          </NavbarMenu>
        </Navbar>
      </div>
    </section>
  );
}
