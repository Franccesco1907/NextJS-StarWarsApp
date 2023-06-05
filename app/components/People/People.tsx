'use client'
import React, { useState, useEffect } from 'react'
import Loading from '@/design-system/components/Loading/Loading';
import Card from '@/design-system/components/Card/Card';
import PeopleInfo from '../PeopleInfo/PeopleInfo';
import styles from './People.module.css'
import { People as PeopleInterface } from '@/app/interfaces/people.interface';

export default function People(props: { people: PeopleInterface[], loading: boolean }) {
  const [peopleId, setPeopleId] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(props.loading);

  useEffect(() => {
    console.log('peopleId', peopleId)
    console.log('props.loading', props.loading)
  }, [peopleId])

  return (
    <div className={peopleId !== 0 ? styles.container_clicked : styles.container}>
      <div className={peopleId !== 0 ? styles.people_list_clicked : ''}>
        {props.people.length !== 0 ? (
          props.people.map((people: PeopleInterface, index: number) => (
            <Card
              key={index}
              title={people.name}
              description={people.mainSpecie + ' from ' + people.home}
              onClick={() => { setPeopleId(index + 1); setLoading(true); }}
            />
          ))
        ) : (
          <div>
            {props.loading && <Loading />}
          </div>
        )}
      </div>
      {
        (loading && peopleId !== 0) && (
          <div className={styles.people_info}>
            <PeopleInfo detailPeople={props.people[peopleId]} peopleId={peopleId} />
          </div>
        )
      }

    </div>
  )
}