import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';

import styles from './home.module.scss';

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
         <img src="/images/Vector.svg" alt="Logo do blog" />
         <span>spacetraveling</span>
       </div>

       <div className={styles.preview}>
         <h1>Como ultilizar hooks</h1>
         <p>Pensando em sicronização em fez de ciclos de vida.</p>
         <div className={styles.rodape}>
            <div className={styles.tempo}>
              <img src="/images/Vector-1.svg" alt="relogio do tempo"/>
              <time>15 Mar 2021</time>
            </div>

            <div className={styles.usuario}>
              <img src="/images/Vector-2.svg" alt="usuario"/>
              <span>Joseph Oliveira</span>
            </div>
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
