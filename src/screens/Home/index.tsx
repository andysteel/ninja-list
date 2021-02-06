import styles from '../../../styles/Home.module.css';
import Link from 'next/link';

const Home = () => (
  <div>
    <h1 className={styles.title}>Home Page</h1>
    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptatem facilis, quos laborum ut animi quam tempore quod deserunt, soluta dignissimos minus. Labore, qui rerum. Tenetur sed aliquam odit amet.</p>
    <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam animi quisquam, quia nobis distinctio fugiat dolores unde reprehenderit aliquid, atque ea, amet eligendi provident suscipit. Ab tempore libero numquam quisquam?</p>
    <Link href="/ninjas">
      <a className={styles.btn}>See the Ninja List</a>
    </Link>
  </div>
);

export default Home;
