'use client'
import Header from '@/design-system/components/Layout/Header/Header';
import { useEffect, useState } from 'react';
import { getPeople } from './functions/requests';
import { People as PeopleInterface } from './interfaces/people.interface';
import styles from './page.module.css';
import People from './components/People/People';


export default function Home() {

  const [loading, setLoading] = useState<boolean>(false);
  const [people, setPeople] = useState<PeopleInterface[]>([]);
  // !TODO: It must be a context. Do it later!
  const [peopleId, setPeopleId] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    getPeople(setPeople);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])

  return (
    <>
      <div className={styles.main}>
        <Header peopleId={peopleId} setPeople={setPeopleId}>Ravn Star Wars Registry</Header>
        <div className={styles.people_container}>
          <People people={people} peopleId={peopleId} setPeopleId={setPeopleId} loading={loading}/>
        </div>
      </div>
    </>
  )
}
