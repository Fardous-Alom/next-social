export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <p>If you can see this page, the basic Next.js app is working.</p>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Environment Variables:</h2>
        <ul className="list-disc list-inside mt-2">
          <li>NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: {process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'Not set'}</li>
          <li>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 'Not set'}</li>
        </ul>
      </div>
    </div>
  );
}

