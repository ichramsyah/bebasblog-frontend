import NavbarMain from '../components/NavbarMain';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavbarMain />
      <main className="pt-4">{children}</main>
    </div>
  );
}
