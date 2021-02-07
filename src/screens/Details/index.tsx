import { User } from '../../interfaces/interfaces';

export interface DetailsProps {
  user: User
}

const Details = ({ user }: DetailsProps) => (
  <div>
    <h1>{user?.name}</h1>
    <p>{user?.email}</p>
    <p>{user?.website}</p>
    <p>{user?.address?.city}</p>
  </div>
);

export default Details;
