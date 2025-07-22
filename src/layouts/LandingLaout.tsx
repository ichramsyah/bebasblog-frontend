import NavbarLanding from '../components/NavbarLanding';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavbarLanding />
      <main className="pt-4">{children}</main>
    </div>
  );
}
