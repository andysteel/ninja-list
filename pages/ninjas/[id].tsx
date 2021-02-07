import {
  GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext,
} from 'next';
import { User } from '../../src/interfaces/interfaces';
import Details, { DetailsProps } from '../../src/screens/Details';

const DetailsPage = ({ user }: DetailsProps) => (
  <Details user={user} />
);

export const getStaticPaths: GetStaticPaths = async (context: GetStaticPathsContext) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await response.json();
  const paths = data.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await response.json();

  return {
    props: {
      user,
    },
  };
};

export default DetailsPage;
