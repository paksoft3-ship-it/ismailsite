import LoginForm from './LoginForm';

export const dynamic = 'force-dynamic';

export default function AdminLoginPage() {
  const passwordConfigured = Boolean(process.env.ADMIN_CLICKS_PASSWORD);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background-light px-4">
      <div className="card w-full max-w-sm">
        <h1 className="text-2xl font-bold text-secondary mb-2">Yönetici Girişi</h1>
        <p className="text-gray-500 text-sm mb-6">Tıklama raporuna erişmek için şifrenizi girin.</p>
        {passwordConfigured ? (
          <LoginForm />
        ) : (
          <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
            <p className="font-semibold mb-1">Giriş devre dışı</p>
            <p>
              Yönetici girişi için <code className="font-mono">ADMIN_CLICKS_PASSWORD</code> ortam
              değişkeni ayarlanmalıdır.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
