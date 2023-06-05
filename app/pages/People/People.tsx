'use client'
import React, { useState, useEffect } from 'react'

// Import own components and api functions
import { getSpecificPeople, getSpecie, getAllVehicles } from '../../functions/requests';
import Loading from '@/design-system/components/Loading/Loading';
import Card from '@/design-system/components/Card/Card';
// import InfoPeople from './InfoPeople';

export default function People(props: any) {
  const [detailPeople, setDetailPeople] = useState(null);
  const [species, setSpecies] = useState(null);
  const [idPeople, setIdPeople] = useState(1);
  const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
    getSpecificPeople(idPeople, setDetailPeople);
    getSpecie(setSpecies);
    getAllVehicles(setVehicles);
  }, [idPeople])

  return (
    <>
      <aside>
        {props.people != null ? (
          props.people.map((people: any, index: number) => (
            <>
              <div className="card-container" key={index}>
                <Card
                  title={people.name}
                  description="from Tatooine"
                  onClick={() => { setIdPeople(index + 1) }}
                />
                {/* <div className="card-header" id="headingOne" onClick={() => { setIdPeople(index + 1) }}>
                  <div className="title_card">
                    <h4>{people.name}</h4>
                  </div>
                  <button className="btn text-left" type="button" data-toggle="collapse" data-target={'#' + 'p' + people.height} aria-expanded="true" aria-controls="collapse_people">
                    ra
                  </button>
                </div> */}
                {/* {people.vehicles != '' ? (
                    <div id={'p'+people.height} className="collapse collapse_item content_people_movil" aria-labelledby="headingOne" data-parent="#accordionPeople">
                    <h3>Vehicles</h3>
                    <div className="card-body">
                    {people.vehicles.map((vehicle: [], index: number) => (
                      <div className="item_info_card" key={index}>
                        {
                          vehicles != null ? (
                            (vehicles as []).filter( function(e: any){
                              return e.url === vehicle
                            }).map((ele: any, i: number) => (
                              <h5 key={i}>{ele.name}</h5>
                            ))
                            ) : ('')                      
                        }
                      </div>
                    ))}
                    </div>
                  </div>
                  ) : ('')} */}
              </div>
            </>
          ))
        ) : (
          <div className="content_spinner">
            {props.loading && <Loading />}
            <p className="text-alert">There are no people</p>
          </div>
        )}
      </aside>
    </>

  )
}