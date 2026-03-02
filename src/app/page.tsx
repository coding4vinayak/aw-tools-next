import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to tools index page
  redirect('/tools/index.html');
}
