import { User } from '../../interfaces/interfaces';
import styles from '../../../styles/Ninjas.module.css';

export interface NinjasProps {
  users: User[]
}

const Ninjas = ({ users }: NinjasProps) => (
  <div>
    <h1>Ninjas</h1>
    {users?.map((user, index) => (
      <div key={`users__${index}`}>
        <a className={styles.single}>
          <h3>{user.name}</h3>
        </a>
      </div>
    ))}
  </div>
);

export default Ninjas;
