import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import logo from "../../public/logo512.png"
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
      <Image
      src={logo}
      alt="Pochi Logo"
      width={24}
      height={24}
      />
    
        Pochi Document
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      label: 'Main Site',
      text: 'Main Site',
      url: 'https://www.getpochi.com',
      external: true
    }
  ],
};
