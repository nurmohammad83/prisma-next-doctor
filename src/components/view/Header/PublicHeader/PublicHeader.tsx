import Navbar from "@/components/ui/Navbar/Navbar";

const PublicHeader = () => {
    const items = [
        {
          key: '1',
          label: "Home",
          href: "/",
        },
        {
          key: '2',
          label: "Services",
          href: "/services",
        },
        {
          key: '3',
          label: "Doctors",
          href: "/doctors",
        },
        {
          key: '4',
          label: "About",
          href: "/about-us",
        },
        {
          key: '5',
          label: "Contact",
          href: "/contact-us",
        },
      ];
  return (
    <Navbar items={items}/>
  )
}
export default PublicHeader