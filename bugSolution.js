```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from '@/pages/api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session: session,
    },
  };
}
export default function Page({session}) {
  console.log('Session:', session);
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is protected and requires authentication.</p>
      {session && <p>User: {session.user.email}</p>}
    </div>
  );
}
```