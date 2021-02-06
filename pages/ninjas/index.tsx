import { GetStaticProps, GetStaticPropsContext } from 'next';
import Ninjas, { NinjasProps } from '../../src/screens/Ninjas';
import { User } from '../../src/interfaces/interfaces';

const PageNinjas = ({ users }: NinjasProps) => (
  <Ninjas users={users} />
);

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  return {
    props: {
      users,
    },
  };
};

export default PageNinjas;
