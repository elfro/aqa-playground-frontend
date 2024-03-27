import { auth } from '@/auth';
import MainSection from '@/components/MainSection';

async function ProfilePage() {
  const session = await auth();
  return (
    <MainSection>
      <h1>Hello, {session?.user?.username}</h1>
    </MainSection>
  );
}

export default ProfilePage;
