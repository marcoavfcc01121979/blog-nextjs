import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';

import styles from './home.module.scss';
import logo from '../assets/Vector.svg';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

 export default function Home({ postsPagination }: HomeProps) {
   // TODO

   return(
     <div className={styles.container}>

       <div className={styles.header}>
         <img src={logo} alt="Logo do blog" />
         <span>spacetraveling</span>
       </div>

       <div className={styles.preview}>
         <h1>Como ultilizar hooks</h1>
         <p>Pensando em sicronização em fez de ciclos de vida.</p>
         <div>
            <time>15 Mar 2021</time>
            <span>icone</span>
            <p>Joseph Oliveira</p>
         </div>


       </div>


     </div>
   )
 }

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
