import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function Home() {
  // Redirect to the static tools index page
  redirect('/index.html');
}
