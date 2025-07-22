import NavbarAuth from '../components/NavbarAuth';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavbarAuth />
      <main className="pt-4">{children}</main>
    </div>
  );
}
