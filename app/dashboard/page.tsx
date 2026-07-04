import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Welcome, {user?.firstName ?? "User"} 👋
      </h1>
    </main>
  );
}