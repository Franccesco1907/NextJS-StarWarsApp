'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/design-system/components/Layout/Header/Header'
import styles from './page.module.css'
import { getPeople } from './functions/requests';
import { People as PeopleInterface } from './interfaces/people.interface';
import People from './pages/People/People';
import PeopleInfo from './pages/PeopleInfo/PeopleInfo';


export default function Home() {

  const [loading, setLoading] = useState<boolean>(false);
  const [personId, setPersonId] = useState<number>(1);
  const [people, setPeople] = useState<PeopleInterface | null>(null);

  // When reloading the page shows loader and the setPeople status is populated
  useEffect(() => {
    setLoading(true);
    getPeople(setPeople, 1);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])

  return (
    <>
      <div className={styles.container}>
        <Header>Ravn Star Wars Registry</Header>
        <div className={styles.people}>
          <People people={people} loading={loading}></People>
          <PeopleInfo detailPeople={people}></PeopleInfo>
        </div>
      </div>

    </>

  )
}
