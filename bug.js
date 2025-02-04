```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from '@/pages/api/auth/[...nextauth]';

export default async function Page ({params}) {
  const session = await unstable_getServerSession(context, authOptions);
  console.log('Session:', session);

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is protected and requires authentication.</p>
    </div>
  );
}
```