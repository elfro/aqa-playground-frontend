import { auth } from '@/auth';

import MainWithCenteredContentSection from '@/components/layout-wrappers/MainWithCenteredContentSection';
import MaxWidthWrapper from '@/components/layout-wrappers/MaxWidthWrapper';
import {
  METADATA_PAGE_DESCRIPTION,
  METADATA_PAGE_TITLE,
} from '@/constants/pages-data.contants';
import { capitalize } from '@/helpers/string-helper';

export async function generateMetadata() {
  const session = await auth();
  const username = session?.user?.username || 'user';

  return {
    title: `${capitalize(username)}'s profile | ${METADATA_PAGE_TITLE}`,
    description: METADATA_PAGE_DESCRIPTION,
  };
}

async function ProfilePage() {
  const session = await auth();
  return (
    <MainWithCenteredContentSection>
      <MaxWidthWrapper>
        <h1>Hello, {session?.user?.username}</h1>
      </MaxWidthWrapper>
    </MainWithCenteredContentSection>
  );
}

export default ProfilePage;
