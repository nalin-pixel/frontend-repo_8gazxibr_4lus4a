export default function DashboardNotifications() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Notifications</h1>
      <div className="mt-6 space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <div className="text-sm">Alert {i + 1}: New article matched your keyword filter.</div>
            <div className="text-xs text-zinc-500">Just now</div>
          </div>
        ))}
      </div>
    </div>
  );
}
