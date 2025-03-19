import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">Welcome to Aio Chat</h1>
      <p className="text-muted-foreground">The all in one ai chat solution.</p>
    </>
  );
}
