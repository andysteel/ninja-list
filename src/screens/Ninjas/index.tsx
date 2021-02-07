import { User } from '../../interfaces/interfaces';
import styles from '../../../styles/Ninjas.module.css';
import Link from 'next/link';

export interface NinjasProps {
  users: User[]
}

const Ninjas = ({ users }: NinjasProps) => (
  <div>
    <h1>Ninjas</h1>
    {users?.map((user, index) => (
      <Link href={`/ninjas/${user.id}`} key={`users__${index}`}>
        <a className={styles.single}>
          <h3>{user.name}</h3>
        </a>
      </Link>
    ))}
  </div>
);

export default Ninjas;
