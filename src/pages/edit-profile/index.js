import { withPrivate } from '../../lib';
import Header from '../../components/Header';
import UpdateProfile from '../../components/UpdateProfile';
import toast from 'react-hot-toast';

export default function EditProfile({ user }) {
  return (
    <div>
      <Header user={user} />
      <UpdateProfile user={user} title='Edit profile' onDone={() => toast.success('Profile updated')} />
    </div>
  );
}

export const getServerSideProps = withPrivate(async function ({ req, res }) {
  return {
    props: { user: req.session.user },
  }
})