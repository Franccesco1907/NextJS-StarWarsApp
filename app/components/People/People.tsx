'use client'
import React, { useState, useEffect } from 'react'
import Loading from '@/design-system/components/Loading/Loading';
import Card from '@/design-system/components/Card/Card';
import PeopleInfo from '../PeopleInfo/PeopleInfo';
import styles from './People.module.css'
import { People as PeopleInterface } from '@/app/interfaces/people.interface';

export default function People(props: { people: PeopleInterface[], loading: boolean }) {
  const [idPeople, setIdPeople] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(props.loading);

  useEffect(() => {
    console.log('idPeople', idPeople)
    console.log('props.loading', props.loading)
  }, [idPeople])

  return (
    <div className={styles.container}>
      <div>
        {props.people.length !== 0 ? (
          props.people.map((people: PeopleInterface, index: number) => (
              <Card
                key={index}
                title={people.name}
                description={people.mainSpecie + ' from ' + people.home}
                onClick={() => { setIdPeople(index + 1); setLoading(true);}}
              />
          ))
        ) : (
          <div>
            {props.loading && <Loading />}
          </div>
        )}
      </div>
      {
        loading && (
          <div className={styles.people_info}>
            <PeopleInfo detailPeople={props.people[idPeople]} />
          </div>
        )
      }

    </div>
  )
}